import React, {useEffect, useState, useRef } from 'react';
import {io} from "socket.io-client";
import Sidebar from '../Sidebar/Sidebar';
import image2 from '../../Static/Img/Sidebar/Ellipse 1900.png';
import { API_URL } from "../../constants/urls";
import {format} from 'timeago.js';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useSelector } from 'react-redux';
import './ChatScreen.css'
const Messenger = () =>{
  const [message, setMessage] = useState([]);
  const [users, setUsers] = useState([]);
  const [pickerVisible, setPickerVisible] = useState(false)
  const [userName, setUserName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentChat, setCurrentChat] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef()
  const scrollRef = useRef();
    const { user } = useSelector(state => state.auth );

    useEffect(()=>{
        socket.current = io("ws://ec2-54-210-16-7.compute-1.amazonaws.com:8081")
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                from: data.senderId,
                to:data.receiverId,
                message: data.message
            })
        })
    },[]);

    useEffect(()=>{
        getMessage()
    },[arrivalMessage])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[currentChat])

    useEffect(()=>{
        socket.current.emit("addUser", user.id);
        socket.current.on("getUsers", users =>{
            console.log(users)
        })
    },[user])
   
   

    useEffect(() => {
    
        const url = `${API_URL}/all-users/${user.id}`;
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
           await setUsers(json.users)
            
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
      }, []);


      const getMessage = async (e, name) =>{

          let userInfo = {from: user.id, to:e?e:currentUser}
          console.log("getMessageHit", "from"+user.id, "to"+e)
        const url = `${API_URL}/get-message`;
        let result = await fetch(url,{
            method:'POST',
            body: JSON.stringify(userInfo),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        if (result.status === 200) {
            e?setCurrentUser(e):setCurrentUser(currentUser)
            const json = await result.json();
            setUserName(name)
            setCurrentChat(json)
            
        }
      }

      const sendMessage = async (e) =>{
        let userInfo = {from: user.id, to:currentUser, message}
        
        socket.current.emit("sendMessage", {
            senderId: user.id, receiverId:currentUser, message
        })  
        
        const url = `${API_URL}/message`;
        let result = await fetch(url,{
            method:'POST',
            body: JSON.stringify(userInfo),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        if (result.status === 200) {
            const json = await result.json();
            setMessage("")
            getMessage()
            

        }

      }

     console.log("arrivalMessage",arrivalMessage)

    return(<>

    <Sidebar element ={<> <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md-10 mx-auto background-light-grey my-5">
            
                <div className="row chat-outer mt-5">
                <div className="col-3 chat-left">
                <span >Message</span>

                <ul className='mt-5' style={{listStyleType: "none"  }}>
                 
                {users.map((user, index) =>{
                    return (
                      <>
                        <div onClick={ ()=> { getMessage(user.id, user.name); }} >
                      <li key={user.id}>
                          <img src={image2} alt="avatar" width="45"/> <span className='bold-text' >{user.name}</span>
                        </li>
                        </div>
                        <hr />
                        </>
                    )
                  })}
                </ul>
                </div>
                <div className="col-9 chat-right">
                  <section class="msger">
                    <div class="msger-header">
                    <div class="msger-header-title">
                    <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> {userName?userName:""}
                    </div>
                    <div class="msger-header-options">
                      <span><i class="fas fa-cog"></i></span>
                    </div>
                    </div>
                    <div class="msger-chat">
                    
                    {currentChat?.map((message, index) =>{
                        return(<>
                        <div key={index} ref={scrollRef} className={`msg ${message.fromSelf === true ? "right-msg" : "left-msg"}`}  >
                        <div className="msg-info-name">{message.fromSelf === true? "You" : userName}</div>
                        <div className="msg-bubble">
                            <div className="msg-text">
                        {message.message}
                            </div>
                        </div>
                        <div className="msg-info-time">{format(message.createdAt)}</div>
                        </div>
                        </>)
                    })}
                </div>
                <div class="msger-inputarea">
                  {pickerVisible=== true ?<div style={{position:"absolute", marginTop:"-34%"}}> <Picker data={data} previewPosition="top" navPosition="top" onClickOutside={()=>setPickerVisible(false)} onEmojiSelect={(e)=> setMessage(message?message+e.native:e.native)} /></div>:""}
                <i class="fa-thin fa-circle-plus" style={{cursor:"pointer"}}  onClick={()=>setPickerVisible(true)}></i>
                <input type="text" name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} class="msger-input" placeholder="Type a message..."></input>
                <button type="submit" onClick={sendMessage} class="msger-send-btn"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
                  </section>
                </div>
                </div>
            
            </div>
        </div>
        <hr className='background-light-grey'/>
    </div></>} />

   
    
    </>)
}

export default Messenger
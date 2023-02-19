import React, {useEffect, useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import image2 from '../../Static/Img/Sidebar/Ellipse 1900.png';
import { API_URL } from "../../constants/urls";
import { useSelector } from 'react-redux';
import './ChatScreen.css'
const ChatScreen = () =>{
  let [users, setUsers] = useState([])
  const { user } = useSelector(state => state.auth );


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
                      <li key={user.id}>
                        <div>
                          <img src={image2} alt="avatar" width="45"/> <span className='bold-text' >{user.name}</span>
                        </div>
                        </li>
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
                    <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> Maria Roy
                    </div>
                    <div class="msger-header-options">
                      <span><i class="fas fa-cog"></i></span>
                    </div>
                    </div>
                    <div class="msger-chat">
                    
    <div class="msg left-msg">
    <div class="msg-info-name">BOT</div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi, welcome jdnfjndsfkdm fdkjsnfkd  sjndlskx cdsnfks d dsnfidmcmdsdsknmkd kdsmdcxkm c kdmckaslML c dskncksl
        </div>
      </div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi
        </div>
      </div>
      <div class="msg-info-time">12:45</div>
    </div>

    <div class="msg right-msg">
    <div class="msg-info-name">BOT</div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi, welcome jdnfjndsfkdm fdkjsnfkd  sjndlskx cdsnfks d dsnfidmcmdsdsknmkd kdsmdcxkm c kdmckaslML c dskncksl
        </div>
      </div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi
        </div>
      </div>
      <div class="msg-info-time">12:45</div>
    </div>
    <div class="msg left-msg">
    <div class="msg-info-name">BOT</div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi, welcome jdnfjndsfkdm fdkjsnfkd  sjndlskx cdsnfks d dsnfidmcmdsdsknmkd kdsmdcxkm c kdmckaslML c dskncksl
        </div>
      </div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi
        </div>
      </div>
      <div class="msg-info-time">12:45</div>
    </div>
    <div class="msg left-msg">
    <div class="msg-info-name">BOT</div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi, welcome jdnfjndsfkdm fdkjsnfkd  sjndlskx cdsnfks d dsnfidmcmdsdsknmkd kdsmdcxkm c kdmckaslML c dskncksl
        </div>
      </div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi
        </div>
      </div>
      <div class="msg-info-time">12:45</div>
    </div>
    <div class="msg right-msg">
    <div class="msg-info-name">BOT</div>
      <div class="msg-bubble">
        <div class="msg-text">
          Hi, welcome jdnfjndsfkdm fdkjsnfkd  sjndlskx cdsnfks d dsnfidmcmdsdsknmkd kdsmdcxkm c kdmckaslML c dskncksl
        </div>
      </div>
      <div class="msg-info-time">12:45</div>
    </div>
    </div>
    <form class="msger-inputarea">
    <i class="fa-thin fa-circle-plus"></i>
    <input type="text" class="msger-input" placeholder="Type a message..."></input>
    <button type="submit" class="msger-send-btn"><i class="fa-solid fa-paper-plane"></i></button>
  </form>
                  </section>
                </div>
                </div>
            
            </div>
        </div>
        <hr className='background-light-grey'/>
    </div></>} />

   
    
    </>)
}

export default ChatScreen
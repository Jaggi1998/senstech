import React , { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import communityComment from '../../Static/Img/Community/comment.png';
import { useLocation } from 'react-router-dom';

const WatchVideos = () =>{
 //assigning location variable
 const location = useLocation();

 //destructuring pathname from location
 const { search } = location;
 const [data, setData] = useState({})
  useEffect(()=>{
    async function fetchData () {
      let result = await fetch(`http://ec2-54-210-16-7.compute-1.amazonaws.com:8081/api/get-single-Video${search}`,{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
        }
    })
      result = await result.json()
      return setData(result)

    }
    setTimeout(() => {
      fetchData()
    }, 2000);
   
      

  })

    return(<>

    <Sidebar element ={<> <div className="container-fluid">
        <div className="row ">
            <div className="col-md-9 background-light-grey mt-5">
            <div className="my-5 watch-title">
                    <h3 className=''>Training Videos <span><i class="fa-regular fa-arrow-right-long"></i> 25 Small Business Ideas for New York... </span></h3>
            </div>           
            <div>
            <video key={data.video} width="100%" height="100%" poster={data.thumbnail} controls>
   <source src={data.video} type="video/mp4" />
</video>
            </div>
            <div className='watch-flex'>
              <h5>{data.title}</h5>
              <img src={communityComment} alt=""></img>
            </div>
            <div className='watch-flex'>
            <div className='watch-flex-in'>
            <div className='small-profile-icon'>
                    <img className="rounded-circle my-3 col-sm-2 small-profile"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt="" />
                    <div class="mt-3">
                    <p className='community-text-s'>Marry Johnhid </p>
                    <span>@marry254 - 14 Sep 2022</span>
                    </div>
                    </div>
                    <div>
                      <span class="small-text mx-1"><i class="fa-thin fa-heart"></i> 12.4K </span>
                      <span class="small-text mx-1"><i class="fa-thin fa-message"></i> 54</span>
                    </div>
            </div>
            <p class=" small-text"><span class="light-text">views: </span>11,750</p>
          </div>
            
            </div>
            <div className="col-md-3 my-5 ">
              <div className='right-comment mt-5'>
                <h6>Comments <span>25</span></h6>
                <textarea id="txtcomment" rows="3" cols="50"></textarea>
                <div className='small-profile-icon'>
                    <img className="rounded-circle my-3 col-sm-2 small-profile"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt="" />
                    <div class="mt-3">
                    <p className='community-text-s'>Marry Johnhid </p>
                    <span>@marry254</span>
                    <h6>It is a long established fact that a reader will be distracted by the readable content.</h6>
                    <div class="row"><div class="col-7"><span class="small-text mx-1"><i class="fa-light fa-reply"></i> 12.4K </span><span class="small-text mx-1"><i class="fa-light fa-trash-can"></i> 54</span></div><div class="col-5 right-text"><p class=" small-text"><span>5 hours ago</span></p></div></div>
                    <span className=' border-left'></span><span class="small-text mx-1">10 Replies </span>
                    </div>
                </div>

                <div className='small-profile-icon'>
                    <img className="rounded-circle my-3 col-sm-2 small-profile"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt="" />
                    <div class="mt-3">
                    <p className='community-text-s'>Marry Johnhid </p>
                    <span>@marry254</span>
                    <h6>It is a long established fact that a reader will be distracted by the readable content.</h6>
                    <div class="row"><div class="col-7"><span class="small-text mx-1"><i class="fa-light fa-reply"></i> 12.4K </span><span class="small-text mx-1"><i class="fa-light fa-trash-can"></i> 54</span></div><div class="col-5 right-text"><p class=" small-text"><span>5 hours ago</span></p></div></div>
                    </div>
                </div>

                <div className='small-profile-icon'>
                    <img className="rounded-circle my-3 col-sm-2 small-profile"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt="" />
                    <div class="mt-3">
                    <p className='community-text-s'>Marry Johnhid </p>
                    <span>@marry254</span>
                    <h6>It is a long established fact that a reader will be distracted by the readable content.</h6>
                    <div class="row"><div class="col-7"><span class="small-text mx-1"><i class="fa-light fa-reply"></i> 12.4K </span><span class="small-text mx-1"><i class="fa-light fa-trash-can"></i> 54</span></div><div class="col-5 right-text"><p class=" small-text"><span>5 hours ago</span></p></div></div>
                    </div>
                </div>

                <div className='small-profile-icon'>
                    <img className="rounded-circle my-3 col-sm-2 small-profile"
                          src="https://pngimage.net/wp-content/uploads/2019/05/transparent-abstract-background-png-.jpg"
                          alt="" />
                    <div class="mt-3">
                    <p className='community-text-s'>Marry Johnhid </p>
                    <span>@marry254</span>
                    <h6>It is a long established fact that a reader will be distracted by the readable content.</h6>
                    <div class="row"><div class="col-7"><span class="small-text mx-1"><i class="fa-light fa-reply"></i> 12.4K </span><span class="small-text mx-1"><i class="fa-light fa-trash-can"></i> 54</span></div><div class="col-5 right-text"><p class=" small-text"><span>5 hours ago</span></p></div></div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <hr className='background-light-grey'/>
    </div></>} />

   
    
    </>)
}

export default WatchVideos
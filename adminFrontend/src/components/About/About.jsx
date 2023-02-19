import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import founder from '../../Static/Img/About/Breaking-Chains-Private-Cooperative-Founder-Mary-Boyde-5-300x400.jpg';
import {adminData, ambData, progCo, member} from "./AboutData";
import './About.css';
const About = () => {
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto my-5">
                    <div className="row">

                    <div className="col-md-8">
                <p className='blue-text' >About Breaking Chains</p>
                <h1 className='' >Building Black Wall Street, Not Across City Blocks But Across Nations</h1>
                <p className='grey-text' >Breaking Chains Enterprises is a registered entity of like-minded friends and family. We are a faith-based Cooperative that operates by God's Biblical principles, and we promote the spirit of community.</p>

                 <p className='grey-text'> Our vision is to boldly and confidently create a wealth-building platform that enables every man, woman and child to become socially and economically self-motivated, self-educated and self-empowered to break the proverbial chains of generational poverty.</p>
                    </div>
                    <div className="col-md-4 ">
                    <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front blue-background">
                        
                        <h5 className='text-white' style={{lineHeight:"250px"}}>What is Cooperative Economics ?</h5> 
                        </div>
                        <div className="flip-card-back orange-background">
                          
                        <h5 className='' style={{marginTop:"90px"}} >A group of people united voluntarily to meet their common economic, social, and cultural needs and aspiration.</h5> 
                         
                            
                       
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="">
                      <h1>About the Founder</h1>
                            <img src={founder} alt="" style={{borderRadius:"5px", width:"70%"}}/>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                
                <p className='grey-text mt-5' >It is one thing to have a dream, but it is certainly  another thing to build a life around all of your dreams. Some of the most powerful and most influential people in the world have often said that it takes hard work, self-discipline and an insane amount of determination to become great and do great things. Mary Boyde says, “It takes God.”</p>

                 <p className='grey-text'>A native of Washington, D.C, now residing in Atlanta, Georgia, Mary Louella Boyde grew up knowing she was different – not in the way most would think, but early on she answered a calling that would later not only set her apart from that which was deemed normal, but it would also prove that she was created different to make a difference. </p>
                 <button class="btn text-white py-2 slide learn-more my-2" type="submit">READ ENTIRE ARTICLE</button>
                    </div>
                   
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                        <p className='blue-text' >About Breaking Chains</p>
                        <h1>We Are Breaking Chains Together</h1>
                        <p className='grey-text'>There is so much work to do for our community, and as our Cooperative continues to grow,
it will take a team of dedicated and like-minded people to support our members.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Administratros</h1>
                        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">

                            {adminData.map ((admin, index) =>{
                                return (
                                 <div class="col" key={index}>
                                <div class="card text-center card-border">
                                <img src={admin.imgSrc} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div class="card-body">
                                    <h5 class="card-title">{admin.title}</h5>
                                
                                </div>
                                </div>
                            </div>
                                )}
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Ambassadors</h1>
                        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                        {ambData.map ((amb, index) =>{
                                return (
                                 <div class="col" key={index}>
                                <div class="card text-center card-border">
                                <img src={amb.imgSrc} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div class="card-body">
                                    <h5 class="card-title">{amb.title}</h5>
                                    <p class="card-text blue-text">{amb.text}</p>
                                </div>
                                </div>
                            </div>
                                )}
                            )}
                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Program Coordinators</h1>
                        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                        {progCo.map ((prog, index) =>{
                                return (
                                 <div class="col" key={index}>
                                <div class="card text-center card-border">
                                <img src={prog.imgSrc} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div class="card-body">
                                    <h5 class="card-title">{prog.title}</h5>
                                    <p class="card-text blue-text">{prog.text}</p>
                                </div>
                                </div>
                            </div>
                                )}
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Member Services</h1>
                        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
                            
                        {member.map ((mem, index) =>{
                                return (
                                 <div class="col" key={index}>
                                <div class="card text-center card-border">
                                <img src={mem.imgSrc} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" />
                                <div class="card-body">
                                    <h5 class="card-title">{mem.title}</h5>
                                    <p class="card-text blue-text">{mem.text}</p>
                                </div>
                                </div>
                            </div>
                                )}
                            )}
                           
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                        <p className='blue-text' >Next Steps</p>
                        <h1>I'm Ready. What's Next?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center my-5">
                        <div class="card-group">
                            <div class="card text-center card-border">
                                
                                <div class="card-body">
                                <h2 class="card-title">Respond</h2>
                                <p class="card-text">
                                Get back to the person that invited you and let them know you are ready to get started. If you're visiting without being invited, complete the membership form below.
                                </p>
                              
                                </div>
                            </div>
                            <div class="card text-center card-border">
                                
                                <div class="card-body">
                                <h2 class="card-title">Connect</h2>
                                <p class="card-text">Get connected to all of the tools and resources provided by the Cooperative so you can learn how to build generational wealth for your family.
                                </p>
                                
                                </div>
                            </div>
                            <div class="card text-center card-border">
                                
                                <div class="card-body">
                                <h2 class="card-title">Share</h2>
                                <p class="card-text">
                                Share the Breaking Chains Enterprises with like-minded family and friends so they can also benefit from all the great programs available to our members.
                                </p>
                               
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default About
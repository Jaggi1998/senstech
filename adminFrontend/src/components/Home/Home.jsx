import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import backgroundImg from '../../Static/Img/Home/pexels-helena-lopes-1015568.jpg';
import downArrow from '../../Static/Img/Home/down.svg';
import wealth from '../../Static/Img/Home/wealth.svg';
import responsability from '../../Static/Img/Home/responsability 1.svg';
import mask from '../../Static/Img/Home/Mask group.svg';
import groupImg from '../../Static/Img/Home/Group-9.png';
import groupImg2 from '../../Static/Img/Home/Group 56.png';
import Footer from '../Footer/Footer';
import protest from '../../Static/Img/Home/protest 1.svg';
import moneybag from '../../Static/Img/Home/money-bag 1.svg';
import profit from '../../Static/Img/Home/profits 1.svg';
import girlAvatar from '../../Static/Img/Home/unsplash_B4TjXnI0Y2c.png';
const Home = () =>{
    return (
        <>
        <Navbar/>
                <div className="background-img text-center">
                <div className="bg-img-content">
                <span className='heading bold-text' >I am </span>
                <span className='heading-2 bold-text orange-text' >ChainBreaker </span>
                <p className='text-1 light-text' >Our Cooperative Concepts Are Designed to Empower and Rebuild Our Communities. </p>
                <p className='text-2 light-text' >I Support the Vision of Cooperative Economics</p>
                <button type="button" className="btn blue-background white btn-border light-text me-2 txt-8">START WORK WITH US</button> 
                <button type="button" className="btn btn-border ms-2 white-background light-text txt-8">CONTACT US</button>
                <div className="text-white mt-5 fst-div">

                                <button type="button" className="btn mt-5 fst-div-btn"><p className='btn-txt'>scroll down</p> <img src={downArrow} alt="downArrow" /></button>
                </div>

                </div>
                    <img src={backgroundImg} className="img-fluid" alt="Responsive"/>
                </div>
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-12">
                    <p className="mt-5 blue-text ">WE EXPERTS</p>
                    <h1 className='mb-5 mt-2 bold-text' >Why Join Our Cooperative?</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card card-1 text-center">
                        <div class="card-img-top card-style my-4 white-background">
                            <img src={wealth} alt="Hollywood Sign on The Hill"  />
                        </div>
                        {/* <img src={wealth} className="card-img-top card-style my-4 white-background"
                            alt="Hollywood Sign on The Hill" /> */}
                        <div className="card-body">
                            <h5 className="card-title">Shared Wealth & Work</h5>
                            <a class="card-text blue-text" href="#">Learn More <i class="fa-regular fa-arrow-right-long"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-1 text-center">
                        <div class="card-img-top card-style my-4 white-background">
                            <img src={mask} alt="Hollywood Sign on The Hill"  />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Economic Self-Reliance</h5>
                            <a class="card-text blue-text" href="#">Learn More <i class="fa-regular fa-arrow-right-long"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="card card-1 text-center">
                        <div class="card-img-top card-style my-4 white-background">
                            <img src={responsability} alt="Hollywood Sign on The Hill"  />
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Responsibility Of Generosity</h5>
                            <a class="card-text blue-text" href="#">Learn More <i class="fa-regular fa-arrow-right-long"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 thrd-row">
                <div className="col-md-10 mx-auto my-5">
                    <div className="row">
                <div className="col-md-6 col-sm-12 my-5">
                    <p className='blue-text'>ABOUT BREAKING CHAINS</p>
                    <h1 className='mb-4 bold-text' >Are You Next Chain Breaker? </h1>
                    <p className='grey-text light-text' >Our survival depends on working together and sharing resources. Therefore, our mission is to engage our community of family and friends in cooperative economics and shared wealth by supporting.</p>
                    <p className='grey-text light-text' >one another through Faith realization, financial education, wealth generation, debt elimination and tax minimization; Rebuilding Black Wall Street Not Across City Blocks, But Across Nations.</p>
                    <button type="button" className="btn px-5 py-2 orange-background white btn-border light-text">Learn More</button>
                </div>
                <div className="col-md-6 col-sm-12 ">
                <img src={groupImg} style={{width:"100%"}} alt="downArrow" />
                </div>
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col-12">
                    <p className="mt-5 blue-text ">BREAKING CHAINS SCOOP</p>
                    <h1 className='mb-5 mt-2 bold-text' >Member Programs & Benefits</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-11 mx-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-center light-blue">
                        <img src={protest} style={{borderColor:"#0084E4"}} className="card-img-top card-style my-4 white-background"
                            alt="Hollywood Sign on The Hill" />
                        <div className="card-body">
                            <h5 className="card-title">Black Economic Empowerment System (BEES)</h5>
                            <p className="card-text light-text">
                            A systematic and all-inclusive approach to black community economic empowerment a mutually beneficial system that is rewarding for all parties involved.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col" >
                        <div className="card text-center" style={{border:"2px Solid #FFDFDF"}}>
                        <img src={ moneybag } style={{borderColor:"#FC7272"}} className="card-img-top card-style my-4 white-background"
                            alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title">Chain Breaker Wealth Academy</h5>
                            <p className="card-text thrd-card-text">
                            A comprehensive wealth creation and management program designed to give you the essential strategies needed to achieve financial freedom and create generational wealth.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="card text-center light-pink">
                        <img src={profit} style={{borderColor:"#0084E4"}} className="card-img-top card-style my-4 white-background"
                            alt="Los Angeles Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">B.R.I.D.G.E.S.</h5>
                            <p className="card-text thrd-card-text">Bringing Real Investments During Global Economic Seasons will bring investment opportunities to the Cooperative members who will have an opportunity to participate if they choose to do so.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="col-12 text-center">

                    <h5 className='my-5' >Enjoy all member benefits free for the first 7 days!</h5>
                    <button type="button" className="btn btn-border pink-background white light-text px-4 py-2 font-14">START WORK WITH US</button>
                </div>
            </div>
        </div>
        <div className="frth-row text-center mt-5">
        <div id="carouselExampleControls" className="carousel blue-background text-white" data-bs-ride="carousel">
        <div class="carousel-indicators">
    <button id="carousel-btn"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button id="carousel-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button id="carousel-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <p  className="mt-5 yellow-text light-text">TESTIMONIALS</p>
        <h2 className='mb-5'>What People’s Say</h2>
      <img src={girlAvatar}className="d-block w-7 girl-img my-5" alt="..."/>
      <p className='px-5 light-text'>I'm a single mom unable to work because I can't afford childcare for my kids.</p> 
<p className='light-text'>My cousin introduced me to Breaking Chains and the Eden project. I'm now able to stay home and work </p>
<p className='light-text'>on my dreams of starting a business.</p>

<p className='my-5 yellow-text'>Dr. Billy Bechtelar</p>
    </div>
    <div className="carousel-item">
    <p className="mt-5 yellow-text light-text">TESTIMONIALS</p>
        <h2 className='mb-5'>What People’s Say</h2>
      <img src={girlAvatar}className="d-block w-7 girl-img my-5" alt="..."/>
      <p className='px-5 light-text' >I'm a single mom unable to work because I can't afford childcare for my kids.</p> 
<p className=' light-text' >My cousin introduced me to Breaking Chains and the Eden project. I'm now able to stay home and work </p>
<p className=' light-text' >on my dreams of starting a business.</p>

<p className='my-5 yellow-text'>Dr. Billy Bechtelar</p>
    </div>
    <div className="carousel-item">
    <p className="mt-5 yellow-text light-text">TESTIMONIALS</p>
        <h2 className='mb-5'>What People’s Say</h2>
      <img src={girlAvatar}className="d-block w-7 girl-img my-5" alt="..."/>
      <p className='px-5 light-text'>I'm a single mom unable to work because I can't afford childcare for my kids.</p> 
<p className=' light-text'>My cousin introduced me to Breaking Chains and the Eden project. I'm now able to stay home and work </p>
<p className=' light-text'>on my dreams of starting a business.</p>

<p className='my-5 yellow-text'>Dr. Billy Bechtelar</p>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                </div>
                <div className="container">
                <div className="row my-5 ">
                <div className="col-12 mx-auto my-5">
                    <div className="row">
                <div className="col-md-6 col-sm-12 my-5">
                    <p className='blue-text'>WATCH VIDEO</p>
                    <h1 className='mb-4 bold-text' >More and More People are Joining the Movement! </h1>
                    <p className='grey-text light-text' >Here's a quick video that explains why so many people are excited about Breaking Chains Enterprises, and why it is essential to supporting the needs of our community.</p>
                    
                    <button type="button" className="btn  px-3 me-2 my-2 py-2 blue-background btn-border white light-text">REGISTER FOR AN OVERVIEW</button>
                    <button type="button" className="btn orange-background white btn-border light-text px-3 my-2 py-2">JOIN US TODAY</button>
                </div>
                <div className="col-md-6 col-sm-12 ">
                <img src={groupImg2} style={{width:"100%"}} alt="downArrow" />
                </div>
                    </div>
                </div>
            </div>
                </div>
                <Footer />
        </>
    )
};
export default Home;

import Logo from '../../Static/Img/Navbar/cropped-BCE-Logo-Website-Header.png'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const BasicExample = () => {
  return (
    <>
    <div className="contrainer-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">   
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={Logo} alt="" width="110"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item mx-2 my-2">
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
          <NavLink className="nav-link" to="/about">ABOUT BCE</NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
          <NavLink className="nav-link" to="#">ARTICLES</NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
          <NavLink className="nav-link" to="/">MARKETPLACE</NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
          <NavLink className="nav-link" to="/contact-us">CONTACT US</NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
            <NavLink to="/login" >
          <button type="button" class="btn btn-outline-dark btn-border"><i class="fa-regular fa-user me-1"></i><span>LOGIN</span></button>
            </NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
            <NavLink to='/signup/noref'>
          <button type="button" class="btn orange-background white btn-border">JOIN US TODAY</button>
            </NavLink>
        </li>
        <li className="nav-item  mx-2 my-2">
          <button type="button" class="btn blue-background white btn-border"><i class="fa-light fa-basket-shopping"></i></button>
        </li>
      </ul>
    
       </div>
     </div>
   </nav>
  </div>
 </div>
</div>
</>
  );
}

export default BasicExample;
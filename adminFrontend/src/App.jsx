import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login&Signup/Login/Login";
import Devices from "./components/Devices/Devices"
import Logout from "./components/Login&Signup/Logout/Logout";
import Withdraw from "./components/WithrawUsers/WithrawUsers";
import Signup from "./components/Login&Signup/Signup/Signup";
import Orders from "./components/MyOrders/AllOrders";
import DashboardNext from "./components/Dashboard/DashboardNext";
import UsersList from "./components/Users/UserListing/UserListing";
import TrainingVideos from "./components/TrainingVideos/TrainingVideos";
import Products from "./components/Products/Products";
import Marketplace from "./components/Marketplace/Marketplace";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        {/* <Route path="/chat" element={<Chat />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route> */}
        {/* <Route path="/new-password" element={<NewPassword />}></Route> */}
        {/* <Route path="/new-password/:token" element={<NewPassword />}></Route>
        <Route path="/check-email" element={<CheckEmail />}></Route>
        <Route path="/reset-done" element={<ResetDone />}></Route> */}
        {/* <Route
          path="/create-profile"
          element={<Protected Component={CreateProfile} />}
        ></Route>
        <Route
          path="/edit-profile"
          element={<Protected Component={EditProfile} />}
        ></Route> */}
        {/* <Route
        path="/my-profile"
        element={<Protected Component={MyProfile} />}
      ></Route> */}
        <Route
          path="/users-list"
          element={<Protected Component={UsersList} />}
        ></Route>
        <Route
          path="/devices-list"
          element={<Protected Component={Devices} />}
        ></Route>
         <Route
          path="/training-videos"
          element={<Protected Component={TrainingVideos} />}
        ></Route>
         <Route
          path="/marketplace"
          element={<Protected Component={Marketplace} />}
        ></Route>
       {/* <Route
          path="/community"
          element={<Protected Component={Community} />}
        ></Route>
       
        <Route
          path="/watch-videos"
          element={<Protected Component={WatchVideos} />}
        ></Route>
        <Route
          path="/order-details/:orderId/:itemId"
          element={<Protected Component={OrderDetails} />}
        ></Route>
        <Route
          path="/my-orders"
          element={<Protected Component={MyOrders} />}
        ></Route>
        <Route
          path="/shopping-cart"
          element={<Protected Component={ShoppingCart} />}
        ></Route>
        <Route
          path="/chat-screen"
          element={<Protected Component={ChatScreen} />}
        ></Route> */}
        <Route
          path="/dashboard"
          element={<Protected Component={Dashboard} />}
        ></Route>
        <Route
          path="/dashboard-next"
          element={<Protected Component={DashboardNext} />}
        ></Route>
        {/* <Route
          path="/change-password"
          element={<Protected Component={ChangePassword} />}
        ></Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

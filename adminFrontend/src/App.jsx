import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login&Signup/Login/Login";
import Devices from "./components/Devices/Devices";
import Channels from "./components/Devices/DeviceChannels";
import DeviceSettings from "./components/Devices/DeviceSetting";
import Logout from "./components/Login&Signup/Logout/Logout";
import Signup from "./components/Login&Signup/Signup/Signup";
import AddDevice from "./components/Devices/AddDevice";
import DashboardNext from "./components/Dashboard/DashboardNext";
import UsersList from "./components/Users/UserListing/UserListing";
import AddUser from "./components/Users/AddUser/AddUser";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/signup/" element={<Signup />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/logout" element={<Logout />}></Route>

        <Route path="/users-list" element={<Protected Component={UsersList} />} ></Route>

        <Route path="/add-user" element={<Protected Component={AddUser} />} ></Route>

        <Route path="/devices-list" element={<Protected Component={Devices} />} ></Route>

        <Route path="/add-device" element={<Protected Component={AddDevice} />} ></Route>

        <Route path="/device-channels" element={<Protected Component={Channels} />} ></Route>

        <Route path="/device-settings" element={<Protected Component={DeviceSettings} />} ></Route>
        
        <Route path="/dashboard" element={<Protected Component={Dashboard} />} ></Route>

        <Route path="/dashboard-next" element={<Protected Component={DashboardNext} />} ></Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

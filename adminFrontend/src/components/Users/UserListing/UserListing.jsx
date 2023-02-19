import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../ProfileCommon/ProfileCommon.css";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../../slices/user";
import './UserListing.css'
const UsersList = () => {
  let isLoading = false;
  const { userList } = useSelector(state => (state.user ? state.user : []));
  const { user } = useSelector(state => ({ ...state.auth }));
  const userId = user?.id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(getUsers({ userId }));
      isLoading = true;
    }
  }, [dispatch, userId]);

  const onDeleteUser = userId => {
    dispatch(deleteUser({ userId }));
  };

  return (
    <>
      <Sidebar
        element={
          <>
            <div className="container-fluid">
              <div className="row my-5">
              <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0 text-center">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Username</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Action</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                     {userList &&
                         userList.length > 0 &&
                         userList.map((user, index) => (
                          <tr key={user.id}>
                          <td class="pl-4">{index+1}</td>
                          <td>
                              <h5 class="font-medium mb-0">{user.name}</h5>
                          </td>
                          <td>
                              <span class="text-muted">{user.username}</span>
                          </td>
                          <td>
                              <span class="text-muted">{user.email}</span>
                          </td>
                          <td>
                            <button type="button" class="btn btn-primary btn-circle btn-lg btn-circle"><i class="fa-solid fa-pen-to-square"></i> </button>
                            <button type="button" class="btn btn-danger btn-circle btn-lg btn-circle ms-2" onClick={e => onDeleteUser(user.id)}><i class="fa-solid fa-trash"></i> </button>
                          </td>
                        </tr>
                         ))}
                   
                 
                  </tbody>
                </table>
            </div>
        </div>
    </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default UsersList;
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "./../../hooks/useFetch";

const Users = () => {
  const { data, loading, error } = useFetch("localhost:5000/api/users");
  console.log(data);
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div className="container-fluid mt-4">
          <h1 className="h3 mb-2 text-gray-800">User List</h1>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">User Data</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Username</th>
                      <th scope="col">Fullname</th>
                      <th scope="col">Email</th>
                      <th scope="col">City</th>
                      <th scope="col">Phone</th>
                      <th scope="col">UserType</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

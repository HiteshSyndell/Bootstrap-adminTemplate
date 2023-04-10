import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  let isAdmin = localStorage.getItem("admin");
  let isManager = localStorage.getItem("manager");

  const userList = async () => {
    let api = await axios.get("http://localhost:5000/");
    const users = await api.data;
    setUser([users]);
  };
  console.log(user);


  const deluser=async(e)=>{
    const result=window.confirm("Do You Want To Delete?")
    if(result){
      await axios.delete(`http://localhost:5000/${e}`);
    }
    else{
      
    }
  }

  useEffect(() => {
    userList();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          
          {
                  !isAdmin && !isManager
                  ?
                  <h1 className="text-center text-light">Welcome To The StarAdmin...!</h1>
                  :
                  <div className="table-responsive">
              <div className="text-center">
              <h3 className="text-center">List Of Users</h3>
              </div>
            <table className="table  text-center">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                {isAdmin ? (
                  <>
                    {user.map((e, i) => {
                      return (
                        <>
                          <tr key={e.id}>
                            <th scope="row">{e[1].id}</th>
                            <td>{e[1].name}</td>
                            <td>{e[1].username}</td>
                            <td>{e[1].email}</td>
                            <td>{e[1].mobile}</td>
                            <td className="">
                            <Link to={`/edit/${e[1].id}`}>
                              <button className="btn btn-success">Edit</button>
                              </Link>
                              <button className="btn btn-danger ml-3" onClick={()=>deluser(e[1].id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                          <tr key={e.id}>
                            <th scope="row">{e[2].id}</th>
                            <td>{e[2].name}</td>
                            <td>{e[2].username}</td>
                            <td>{e[2].email}</td>
                            <td>{e[2].mobile}</td>
                            <td>
                              <Link to={`/edit/${e[2].id}`}>
                              <button className="btn btn-success">Edit</button>
                              </Link>
                              <button className="btn btn-danger ml-3" onClick={()=>deluser(e[2].id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {isManager ? (
                      <>
                        {user.map((e, i) => {
                          return (
                            <>
                              <tr key={e.id}>
                                <th scope="row">{e[2].id}</th>
                                <td>{e[2].name}</td>
                                <td>{e[2].username}</td>
                                <td>{e[2].email}</td>
                                <td>{e[2].mobile}</td>
                                <td className="">
                                <Link to={`/edit/${e[2].id}`}>
                              <button className="btn btn-success">Edit</button>
                              </Link>
                              <button className="btn btn-danger ml-3 " onClick={()=>deluser(e[2].id)} >
                                Delete
                              </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      
                        <h3>Sorry :(</h3>
                      
                    )}
                  </>
                )}

                
              </tbody>
            </table>
            
          </div>
                }
        </div>
      </div>
    </>
  );
};

export default Dashboard;

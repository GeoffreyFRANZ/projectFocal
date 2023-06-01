import React, {useState,  useEffect} from 'react'
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import axios from "axios";
import Masonry from "react-masonry-css";


const  UserDetail = () => {
    let  location = useLocation()
    const [img, setImg] =  useState(true)
    const [user, setUser] = useState(true)
    const  route = '/api' + location.pathname
    const width = {
        width: "150px",
        zIndex: 2
    }
    const breakpointColumnsObj = {
        default: 3,
        horizontalOrder: false,
        maxHeight: "100px"
    };
    const  zIndex ={
        zIndex: 1
    }
    const mt= {
        marginTop: "130px"
    }

    useEffect(() => {
        const fetchData =   () => {
            try {
                const response =  axios.get( route)
                console.log(response.data)
                // setImg(response.data.images)
                // setUser(response.data)
            }
            catch (error){
                console.error('Error fetching : ',  error)
            }
        }
        fetchData()
    }, [])
    console.log(img)
    return(
        <section className="h-100 gradient-custom-2">
            <div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div>
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row"
                            >
                                <div className="ms-4 mt-5 d-flex flex-column"  style={width}
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="Generic placeholder image" className="img-fluid mt-4 mb-2"
                                        style={width}
                                    />
                                    <button type="button" className="btn btn-outline-dark"
                                            data-mdb-ripple-color="dark" style={zIndex}
                                    >
                                        Edit profile
                                    </button>
                                </div>
                                <div className="ms-3" style={mt}
                                >
                                    <h4 className="tm-text-gray">{user.name}</h4>
                                    <p className="font-italic mb-1">Email : {user.email}</p>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Recent photos</p>
                                    <p className="mb-0"><a href="#" className="text-muted">Show all</a></p>
                                </div>

                                <Masonry className=" w-100 d-flex flex-wrap"
                                         breakpointCols={breakpointColumnsObj}

                                >
                                    <div>
                                        {/*{img[0].path()}*/}
                                    </div>
                                </Masonry>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const RenderUserDetails = () => {
    return (
        <Router>
            <UserDetail/>
            {/* Other routes and components */}
        </Router>
    );
};

export  default  RenderUserDetails

const userDetail  =  document.getElementById('user-detail')
const userD =  createRoot(userDetail)
userD.render(<RenderUserDetails/>)
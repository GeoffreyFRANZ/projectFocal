import React from  'react'
import '../bootstrap';
import {createRoot} from "react-dom/client";
import getUser from "../controllers/getUser";

const Header = () =>
{
    const { user, loading } = getUser();

    if (user) {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/">
                        La Focale 1909
                    </a>
                    <div  id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-link-1 active" aria-current="page"
                                   href="#">Photos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-4" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-2" href={"/user/" + user.id}>
                                    {user.username}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Connection
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link nav-link-1 active" aria-current="page"
                                   href="">Photos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-2" href="">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-3" href="">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }


}
export  default  Header
const header =  document.getElementById('root')
const  head =  createRoot(header)
head.render(<Header/>)
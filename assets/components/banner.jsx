import  React from 'react'
import {createRoot} from "react-dom/client";

const  Banner = () =>
{
    return  (
        <div className="tm-hero d-flex justify-content-center align-items-center banner-img" >
            <form className="d-flex tm-search-form">

                <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success tm-search-btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
            </form>
        </div>
)
}

export  default Banner

const  banner =   document.getElementById('banner')
const ban = createRoot(banner)
ban.render(<Banner/>)
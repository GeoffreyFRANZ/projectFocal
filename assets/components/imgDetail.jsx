import React, {useState,  useEffect} from 'react'
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import axios from "axios";

const ImgDetail = ()=> {
    let  location = useLocation()
    const [img, setImg] = useState(true)
    const [user, setUser] = useState(true)
    const  route = '/api' + location.pathname
    const  createdAt =  new Date(img.createdAt).toLocaleDateString('fr-FR')
    useEffect(() => {
        const fetchData = async  () => {
            try {
                const response = await axios.get(route)
                setImg(response.data)
                setUser(response.data.user)
            }
            catch (error){
                console.error('Error fetching : ',  error)
            }
        }
        fetchData()
    }, [])
    return(
        <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
                <h2 className="col-12 tm-text-primary">{img.titre}</h2>
            </div>
            <div className="row tm-mb-90">
                <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                    <img  src={`/img/${img.path}`} alt="Image" className="img-fluid"/>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div className="tm-bg-gray tm-video-details">
                        <div className="mb-4 d-flex flex-wrap">
                            <div className="mr-4 mb-2">
                                <span className="tm-text-gray-dark">
                                    Format:
                                </span>
                                <span
                                    className="tm-text-primary">JPG</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="tm-text-gray-dark mb-3">Auteur</h3>
                            <p>
                                Photo prise par:
                                <span className="tm-text-primary">
                                {user.name}
                            </span>
                            </p>
                                <p>
                                    Ajouter  le : {createdAt}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const RenderImgDetails = () => {
    return (
        <Router>
            <ImgDetail />
            {/* Other routes and components */}
        </Router>
    );
};

export  default  RenderImgDetails

const imgDetail = document.getElementById('img-detail')
const imgD = createRoot(imgDetail)
imgD.render(<RenderImgDetails/>)
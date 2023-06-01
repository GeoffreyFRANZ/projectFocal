import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Masonry from "react-masonry-css";
import '../styles/gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listImg: [],
        };
    }

    componentDidMount() {
        const { propsId } = this.props;
        if (typeof propsId === 'undefined') {
            axios
                .get('/api/images')
                .then(response => {
                    this.setState({ listImg: response.data['hydra:member'] });

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        if (typeof  propsId !== 'undefined') {
            axios
                .get(`/api/categories/${propsId}`)
                .then(response => {
                    this.setState({ listImg: response.data['images'] });

                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    render() {
        const imgStyle=  {
            width: "100%",
            objectFit: "cover",
            padding: "2px"

        }
        const breakpointColumnsObj = {
            default: 3,
            horizontalOrder: false,
            maxHeight: "100px"
        };
        return (
            <Masonry className=" w-100 d-flex flex-wrap"
                     breakpointCols={breakpointColumnsObj}

            >
                {this.state.listImg.map((item, index) => (
                    <a href={`/images/${item.id}`} key={index}
                    >
                        <img src={`/img/${item.path}`} alt="" style={imgStyle}
                        />
                        {/*{item.orientation ===1 ? "true": "false" }*/}
                    </a>
                ))}
            </Masonry>
        );
    }
}

// Récupérer la valeur du formulaire soumise par Twig
const formFilter = document.getElementById('form-filter');
formFilter.addEventListener('submit', event => {
    event.preventDefault();

    const val = document.getElementById('search_category').value;
    if (val === ''){
        renderGallery()
    }
    else {
        renderGallery(val);
    }
});

// Fonction pour rendre le composant Gallery avec la valeur de propsId mise à jour
function renderGallery(propsId) {
    const  gallery =  document.getElementById('gallery')
    const gal = createRoot(gallery)
    gal.render(<Gallery propsId={propsId} />)
}

// Rendre le composant Gallery initial avec propsId non défini
renderGallery();

export default Gallery;

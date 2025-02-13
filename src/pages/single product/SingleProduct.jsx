import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import {useParams} from 'react-router-dom'
import { allProducts } from '../../data';
import Footer from '../../components/footer/Footer';
import './SingleProduct.css'
import { addToCart } from '../../redux/cartSlice';
import {useDispatch} from 'react-redux'


function SingleProduct() {
    const dispatch = useDispatch()
    const handleAddToCart= (product) => {
        dispatch(addToCart(product))
    }

    const {id} = useParams();
    const product = allProducts.find((product) => product.id === parseInt(id));
    
    const colors= [ "red", "purple", "teal", "green", "black"] ;
    const sizes = ["xs","s","m","l","xl"]
    
    return (
        <div className="singleProduct-container">
            <Navbar />
            <div className="singleProduct-wrapper">
                <div className="singleProduct-imageSection">
                    <img src= {product.img} alt="" className="singleProduct-image" />
                </div>
                <div className="singleProduct-infoSection">
                    <h2 className="singleProduct-title">{product.title}</h2>
                    <p className="singleProduct-number">${product.price}</p>
                    <h4 className="description-title">Description</h4>
                    <p className="singleProduct-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. ullam cumque alias magnam sint, hic ratione amet culpa consequatur, obcaecati modi ipsa ducimus, laudantium maxime quas quod neque harum atque. Voluptatemi
                    </p>
                    <div className="singleProduct-options">
                        <div className="colors-section">
                            <h4>Colors</h4>
                            <div className="colors">
                                {colors.map((color)=> (
                                    <div key={color} className='color-circle' style={{backgroundColor:color}}></div>
                                ))}
                            </div>
                        </div>
                        <div className='sizes-section'>
                            <h4>Size</h4>
                            <div className='sizes'>
                                {sizes.map((size) => (
                                    <span key={size}>{size}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='addToCart'>
                        <button onClick={() =>handleAddToCart(product) }>Add to Cart</button>
                    </div>
                </div>
            </div>  
            <Footer/>
        </div>
    );

}

export default SingleProduct;
import React, { useEffect, useState } from 'react';
import './SearchBar.css'


const SearchBar = () => {
    const [searchText, setSerchText] = useState("");
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('/fakeData.JSON')
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [searchText]);

    const handleSeacrField = (e) => {
        const searchTextValue = e.target.value;
        setSerchText(searchTextValue);
    };
    return (
        <div>
            <div style={{backgroundColor:'rgb(244 206 206 / 55%)'}}  className="d-flex flex-column justify-content-center align-items-center">
                <h1 style={{ color: '#123456' }} className="mt-5 text-danger mb-3">Search Your <span className="text-dark">Product</span></h1>
                <div className="input-group w-50 mb-3">
                    <input onChange={handleSeacrField} type="text" class="form-control" placeholder="Search....." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark bg-warning btn-lg " type="button" id="button-addon2"> <i className="fas fa-search"></i></button>
                </div>
            </div>
           <div style={{backgroundColor:'rgb(244 206 206 / 55%)'}} >
           <div class="container">
                <div className="row">
                    {
                        products.filter((result) => {
                            if (searchText === "") {
                                return result
                            } else if (result.title.toLowerCase().includes(searchText.toLowerCase())) {
                                return result
                            }
                        }).map((product) =>
                            <div className="col-md-3 single-product mt-5">
                                <div style={{ borderRadius:'10px', backgroundColor :'#e6fff2'}} className="card shadow h-100 mb-5 text-center">
                                    <div className=" pt-3">
                                        <img className="product-image" src={product.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p className="card-text mb-5">Price: ${product.price}</p>
                                        <button className="btn btn-primary w-50">Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
           </div>

        </div>
    );
};

export default SearchBar;
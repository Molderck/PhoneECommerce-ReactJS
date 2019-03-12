import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log("You clicked me on the image container")}>
            <Link to="/details">
              <img src={img} alt="Product" className="card-img-top"/>
            </Link>
            <button className="cartBtn" disabled={inCart?true:false} onClick={() => {console.log("Added to the cart")}}>
              {inCart?(<p className="text-capitalize mb-0" disabled>In Cart</p>):(<i className="fas fa-cart-plus"/>)}
            </button>     
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`

`
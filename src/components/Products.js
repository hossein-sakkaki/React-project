import React, { Component } from 'react'
import Product from "../components/Product"
import styled from "styled-components"
import p1 from '../images/p-1.png'
import p2 from '../images/p-2.jpg'
import p3 from '../images/p-3.jpg'
import p4 from '../images/p-4.jpg'

const PRODUCTBOX = styled.div`
    margin-top: 20px;
`
const HEADER = styled.div`
    width: 70%;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 auto;
    padding: 5px 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border-bottom-left-radius: ${(props) => (props.flag ? '0' : '5px')};
    border-bottom-right-radius: ${(props) => (props.flag ? '0' : '5px')};
    background-color: ${(props) => (props.flag ? '#7297ff' : '#cacaca')} ;
    color: ${(props) => (props.flag ? '#fff' : '#2c2c2c')};
    transition: 0.3s ease-in-out;
`
const BODY = styled.div`
  box-sizing: border-box;
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  
  padding: 0 10px;
  gap: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  height: ${(props) => (props.flag ? '400px' : '0')};
  transition: height 0.3s ease-in-out;
  border: ${(props) => (props.flag ? '1px solid #cacaca' : 'none')};
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const SPAN = styled.span`
    rotate: ${(props) => (props.flag ? '0' : '-180deg')} ;
    transition-duration: 0.3s;
`

class Products extends Component {
    constructor() {
        super();
        this.state = {
            flag: true
        }
    }

    changeNotice = () => {
        const { flag } = this.state;
        this.setState({ flag: !flag })
    }

    render() {
        const { flag } = this.state;
        return (
            <>
                <PRODUCTBOX>
                    <div onClick={this.changeNotice}>
                        <HEADER flag={flag}>
                            <span>
                                Digital Products
                            </span>
                            <SPAN flag={flag}>
                                <i class="fa fa-chevron-up fa-sm"></i>
                            </SPAN>
                        </HEADER>
                    </div>
                    <BODY flag={flag}>
                        <Product image={p1} name="Product_1" price="35$" icone="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt repellat, vitae voluptate maxime minus.</Product>
                        <Product image={p2} name="Product_2" price="28$" icone="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque labore, atque doloremque velit quam tempore illum, aliquam recusandae esse voluptate deleniti voluptatum impedit optio! Veniam, nostrum ut?</Product>
                        <Product image={p3} name="Product_3" price="32$" icone="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laudantium natus, delectus reiciendis excepturi ipsum sit.</Product>
                        <Product image={p4} name="Product_4" price="24$" icone="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error repellat illo explicabo ea vero nihil nam ullam. Dolorum culpa nobis commodi iusto.</Product>
                    </BODY>
                </PRODUCTBOX>
            </>
        );
    }
}

export default Products;
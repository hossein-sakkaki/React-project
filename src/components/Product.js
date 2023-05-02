import React, { Component } from 'react'
import styled from "styled-components"

const DIV = styled.div`
    border: 2px solid #cacaca;
    border-radius: 5px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
`
const IMG = styled.img`
    width: 200px;
    height: 140px;
    border-radius: 5px;
`
const P = styled.p`
    height: 80px;
    overflow: scroll;
    border: 1px solid #f1f1f1;
    padding: 5px;
`
const H2 = styled.h2`
    margin: 0px;
`
const SPAN = styled.span`
    i{
        color: red;
        cursor: pointer;
        font-size: 1.3rem;
    };
`

class Product extends Component {
    constructor() {
        super();
        this.state = {
            flag: true
        }
    }

    doingLike = () => {
        const { flag } = this.state;
        this.setState({ flag: !flag })
    }

    render() {
        const { image, name, price, children } = this.props;
        const { flag } = this.state;
        return (
            <>
                <DIV>
                    <IMG src={image} alt="Pic-alt" />
                    <H2>{name}</H2>
                    <H2><mark>{price}</mark></H2>
                    <P>{children}</P>
                    <SPAN onClick={this.doingLike}>
                        {
                            flag ? (<i class="fa fa-heart-o"></i>) : (<i class="fa fa-heart"></i>)
                        }
                    </SPAN>
                </DIV>
            </>
        );
    }
}
export default Product;
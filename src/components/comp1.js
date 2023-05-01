// import React from 'react';
import React, { Component } from 'react';

import styled from "styled-components"

const DIV=styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 25%;

`

class comp1 extends Component {
    render() { 
        return (
            <>
            <DIV>
                <img src="" alt="Pic"></img>
                <h2>B</h2>
                <h3>C</h3>
                <p> lor </p>
                <div>E</div>
            </DIV>
        </>
        );
    }
}
 
export default comp1;


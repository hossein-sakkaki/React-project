import React from 'react';
import Comp1 from "./components/comp1";

import styled from "styled-components"

const DIV1=styled.p`
    width: 70%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0;
    padding: 5px 10px;
`
const DIV2=styled.p`
    width: 70%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0;
    display: flex;
    padding: 10px;
    gap: 10px;

`

class App extends React.Component {
    render() {
        return (
            <>
                <DIV1>
                    X
                </DIV1>
                <DIV2>
                <Comp1 />
                <Comp1 />
                <Comp1 />
                <Comp1 />
                </DIV2>

                
            </>);
    }
}

export default App;
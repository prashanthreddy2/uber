import styled from 'styled-components'
import React from 'react';
import { useParams } from "react-router-dom";
function Confirm() {
    const {from,to} = useParams();
    console.log({from});
    console.log({to});
    return (
        <Wrapper>
            <h2>{from} {to}</h2>
        </Wrapper>
    )
}

export default Confirm;
const Wrapper = styled.div``
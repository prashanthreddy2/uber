import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Search() {
    
    const  [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");
    return (
        <Wrapper>
            <ButtonContainer>
                {/* link to back button */}
                <Link to="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <Icons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </Icons>
                <InputBoxes>
                    <Input
                        placeholder="Enter location"
                        value={pickup}
                        onChange = {(e) => setPickup(e.target.value)}

                    />
                    <Input
                        placeholder="Where to?"
                        value={dropoff}
                        onChange = {(e) => setDropoff(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>

            {/* link to confirm page */}

            <Link to="/Confirm">
                <Confirm>Confirm Location</Confirm>
            </Link>
        </Wrapper>
    )
}

export default Search
const Wrapper = styled.div`
    height: 100vh;
    background-color: rgb(229,231,235);
`
const ButtonContainer = styled.div`
    background-color : white;
    padding : 1rem 0;
`
const BackButton = styled.img`
    height : 3rem;
    cursor : pointer;
    height: 30px;
    background-color: rgb(229,231,235);
    border-radius: 100%;
    margin-left: 10px;
`
const InputContainer = styled.div`
    background-color : white;
    display : flex;
    align-items: center;
    height: 150px;
    padding: 0 1rem;
`
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    width : 2.5rem;
    margin-right : 0.5rem;
    align-items : center;
    margin-bottom: 25px;
`
const Circle = styled.img`
    height : 0.625rem;

`
const Line = styled.img`
    
    height : 2.5rem;
`
const Square = styled.img`
    
    height : 0.75rem;
`
const InputBoxes = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Input = styled.input`
    height : 2.5rem;
    background-color : rgb(229,231,235);
    margin : -0.5rem 0;
    margin-bottom: 15px;
    padding: 2px;
    border-radius : 5px;
    outline: none;
    border : none;
    
`
const PlusIcon = styled.img`
    width : 40px;
    height : 40px;
    background-color:gray;
    border-radius : 100%;
    margin-left: 7px;
    margin-bottom: 15px;
    
`
const Confirm = styled.div`
    background-color : black;
    color : white;
    text-align : center;
    cursor : pointer;
    border-radius : 40px;
    margin-top : 0.5rem;
    margin-left : 1rem;
    margin-right : 1rem;
    padding : 0.75rem 0.5rem;
    font-size : 1.5rem;
    line-height : 2rem;
    
    
`
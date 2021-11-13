import React from 'react'
import styled from 'styled-components';
import Map from './Map'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <Container>
        <Map/>
        <Bottom>
          <Header>
            <Logo>
                <LogoImage src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvOGqhZIkR7IwXs1M3EMoAJtliMrg...Bu9fQ8"/>
            </Logo>
            <Profile>
              <Name>Name</Name>
              <UserImg src="https://pngimg.com/uploads/face/face_PNG11761.png"/>
            </Profile>
          </Header>

          <ActionButtons>
            <Ride>
              
              <Link to="/Search">
              <RideImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              </Link>
              Ride</Ride>
            <Wheels>
              <RideImage src="https://i.ibb.co/n776JLm/bike.png"/>
              Wheels</Wheels>
            <Reserve>
              <RideImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
              Reserve</Reserve>
          </ActionButtons>

          <InputButton>
            Let's Ride
          </InputButton>

        </Bottom>
      </Container>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
// const MapContainer = styled.div`
//   display: flex;
//   flex: 1;
//   height: 50vh;
//   overflow-y: hidden;
// `
const Bottom = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  background-color: #f8e5e5;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Logo = styled.div`  
  display: flex;
  flex: 0.3;
  height: 100%;
  width: 100%;
`
const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`
const Profile = styled.div`
  display : flex;
  align-items : center;

`
const Name = styled.div`
  margin : 4px;
  width:20;
  padding : 10;
`

const UserImg = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
  border-radius : full;
  cursor : pointer;
`
const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 4px;
`
const Ride = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
  &:hover{
    background-color: white;
  }
`
const RideImage = styled.img`
  height: 100px;
`
const Wheels = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  &:hover{
    background-color: white;
  }
`
const Reserve = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  &:hover{
    background-color: white;
  }
`
const InputButton = styled.div`
  font-size : 30px;
  border: 1px gray solid;
  margin-bottom: 20px;
  padding: 4px;
  text-align: center;
  color: white;
  border-radius: 50px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 30px;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
`


// #50d07d
// #d02552
// #b2cecf


//https://techstory.in/wp-content/uploads/2016/01/10887419_811912108880090_3827623547944886302_o.jpg
import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items:center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 54px;
`
const WhatWeDo = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  color: #ff45ef;
`
const Line = styled.div`
  width: 20px;
  height: 5px;
  background-color: #ff45ef;
  border-radius: 3px;
`
const Subtitle = styled.h2`

`
const Desc = styled.p`
  color: lightgray;
`
const Button = styled.button`
  padding: 10px;
  background-color: #ff45ef;
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
`
const Right = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
`
const Img = styled.img`
  height: 600px;
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease-in-out alternate;

  @keyframes animate {
    to{
      transform: translateY(50px)
    }
    
  }
`
const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          {/* {3d model} */}
          <Img src="./img/moon.webp" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
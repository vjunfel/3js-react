import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* {3d model} */}
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>
            A creative group of designers and developers with a passion for the arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
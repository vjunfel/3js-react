import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1000px;
  background-color: transparent;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 60px;
  margin-right: 50px;
`
const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  text-decoration: none;
`
const ListItem = styled.li`
  gap: 20px;
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const IconSearch = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
const Button = styled.button`
  display: flex;
  padding: 8px 20px;
  background-color: #ff45ef;
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <IconSearch src="./img/search-icon2.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
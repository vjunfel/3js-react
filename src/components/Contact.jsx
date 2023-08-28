import React from 'react'
import { styled } from 'styled-components'
import Map from "./Map"


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
` 

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;

  :focus{
    border: 2px solid pink;
  }
`

const Label = styled.label`
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #ff45ef;
  color: white;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title> Contact Us </Title>
            <InputGroup>
              <Label>Name</Label>
              <Input placeholder='Name'></Input>
            </InputGroup>
            <InputGroup>
              <Label>Email address</Label>
              <Input placeholder='yourmail@mail.com'></Input>
            </InputGroup>
            <InputGroup>
              <Label>Email address</Label>
              <TextArea placeholder='Write your message' rows={10}></TextArea>
            </InputGroup>

            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>

      </Container>
    </Section>
  )
}

export default Contact
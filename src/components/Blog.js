import React from 'react'
import styled from 'styled-components';

function Blog() {
  return (
    <Container>
      <Content> 
      <Wrap3>
        <ButtonGroup>
             <BUTTON>BLOG</BUTTON>
        </ButtonGroup>
        </Wrap3>
    <Wrap>
        <Wrap2>
        <h6>
         The typical stray are domesticated animals, once family pets, thrown out into the streets when owners can no longer afford to feed them or when they get sick and their pet owner doesn't want to deal with making them better (financially, physically or emotionally). The typical stray is the result of unwanted pets who are dumped into the streets intact (intact = pets whose pet owners did not practice spay/neuter). The typical stray is even the result of intact pets who are allowed out of their homes to roam freely in the streets, who come and go into their home or property as they want. These intact animals then mate with other strays, get pregnant and give birth to more unwanted dogs or cats. And the cycle continues.
        </h6>
        </Wrap2>
    </Wrap>
    </Content>
    </Container> 
   )
}

export default Blog


const Wrap = styled.div`
height: 280px;
width: 1320px;

border-radius: 10px;
margin-top: 250px;
margin-left: 40px;
margin-right: 0px;
display: flex;
flex-direction: vertical-right;
cursor: pointer;
overflow: hidden;

.h6,p {
    margin: 1rem;
}
   


border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
img {
    width: 100%;
    height: 60%;
    object-fit: cover;
}

&:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}

`


const Container = styled.div`
   font-size: 20px;

`

const Content = styled.div`
       display: grid;
       grid-gap: 0px;
       grid-template-columns: repeat(2, minmax(0,0fr));
       grid-align: right;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 50px;
`

const BUTTON = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 100px;
width: 1200px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 40px;
margin: 10px;
margin-top: 50px;
margin-bottom: 10px;
background-color: rgba(1, 35, 64);
border: 3px solid rgba(217, 129, 98);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;

`

const Wrap2 = styled.div`
    font-size: 30px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    height: 1000px;
    width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Wrap3 = styled.div`

width: 100vw;
height: 90vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
opacity: 100;
`

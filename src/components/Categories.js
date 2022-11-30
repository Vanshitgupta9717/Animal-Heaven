import React from 'react'
import styled from "styled-components"


function Categories() {
  return (
    <Container>
        
    <Wrap5>
    
        <ButtonGroup>
             <BUTTON>CATEGORIES</BUTTON>
        </ButtonGroup>
        </Wrap5>
    
        <Content>
        <Wrap>
            <img src="/images/choose-piggy.jpeg" alt="" />

            <Wrap2>
               <h2>blog 1</h2>
            </Wrap2>

            <Wrap3>
               <h6>content 1</h6>
            </Wrap3>
        </Wrap>

        <Wrap>
            <img src="/images/Choose-cities.webp" alt="" />

            <Wrap2>
               <h2>blog 2</h2>
            </Wrap2>

            <Wrap3>
               <h6>content 2</h6>
            </Wrap3>
        </Wrap>

        <Wrap>
            <img src="/images/Choose-cashless.png" alt="" />

            <Wrap2>
               <h2>blog 3</h2>
            </Wrap2>

            <Wrap3>
               <h6>content 3</h6>
            </Wrap3>
        </Wrap>

        <Wrap>
            <img src="/images/choose-secure.jpeg" alt="" />

            <Wrap2>
               <h2>blog 4</h2>
            </Wrap2>

            <Wrap4>
               <h6>content 4</h6>
            </Wrap4>
        </Wrap>

    </Content>
 </Container>
  )
}

export default Categories


const Container = styled.div`
     font-size: 20px;
     .h1,h2 {
        margin: 0;
    }

    .h2,h6 {
        margin: 1rem;
    }
    
     
`
const Content = styled.div`
       display: grid;
       grid-gap: 300px;
       grid-template-columns: repeat(5, minmax(0,0.5fr));
       grid-align: center;
       margin-top: 0;
`

const Wrap = styled.div`
height: 500px;
width: 300px;

border-radius: 10px;
cursor: pointer;
overflow: hidden;
margin-top: 0px;
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

margin: 10px;



`

const Wrap2 = styled.div`
    font-size: 15px;
    
    text-align: center;
`

const Wrap3 = styled.div`
    font-size: 28px;
    margin-left: 10px;
    
`

const Wrap4 = styled.div`
    font-size: 25px;
    margin-left: 10px;
    
`

const Wrap5 = styled.div`

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
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 0px;
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
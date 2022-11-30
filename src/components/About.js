import React from 'react'
import styled from "styled-components"


function About() {
  return (
    <Container>
      <Content> 
      <Wrap3>
        <ButtonGroup>
             <BUTTON>ABOUT US</BUTTON>
        </ButtonGroup>
        </Wrap3>
    <Wrap align="left">
        <Wrap2>
        <h6>
        “everything we know we learned from animals”.
        The issue of stray animals is getting serious day by day so here we are with a solution in which we will providing all kind of facilities to strays. 
        We are creating a website in which we are connecting NGOs, Clinics, pet shops to animal person and we are trying to improve situation or conditions for all strays. We are letting them have all the love , care and affection which they actually deserve.
        With our idea we are trying to improve life risk and conditions of strays (cats, dogs, cows etc) .In our website we are trying to provide all necessary and required needs. 
        In future we are also planning to expand and elaborate our idea to next level for the betterment of strays and other animals.
        </h6>
        </Wrap2>
    </Wrap>

    <Wrap4>
    <Wrap2>
        <h6>
        The mission of animal heaven is to end the killing shelters of strays and to bring about a time when there are no more homeless pets.
        Soon there will be no stray animals like dogs and cats & etc left   
        and animals NGOs who never have enough donations going to connect those who are willingly donating to them .For the 
        pets and pets owner going to be tension free as now clinics and chemist shop is one step ahead. In future we are planning to make a animal Friendly cafes where we will include all strays (including cats,dogs,cows etc).

       Together, we will Save them all.   
       
                                                 *we were made to save animals*
        </h6>
        <p>*we were made to save animals*</p>
        </Wrap2>
    </Wrap4>
    </Content>  
    </Container>
  
    )
}

export default About


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
const Wrap4 = styled.div`
height: 280px;
width: 1320px;

border-radius: 10px;
margin-top: 1px;
margin-left: 40px;
margin-right: 0px;
margin-bottom: 30px;
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


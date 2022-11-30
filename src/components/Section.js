import React from 'react'
import styled from "styled-components"


function Section() {
     
     return (
         <Wrap>
            <ItemText>
                
                <h1>An Animal's Eyes Have The Power</h1>
                <h1>Speak A Great Language</h1>
                
                <h4>
                  
                    Let's help our besties and make their lifes healthy and happy. We humans have always professed to love animals, unfortunately, our love lasts only till the animal is able to work for us. As soon as they get sick or old or injured, our love ends. So let's now change this belief and give all the love and support they deserve .
                     
                </h4>
            </ItemText>

            <ButtonGroup>
            <a href="https://docs.google.com/forms/d/1uEZN1TYlIZFrgV1lZVcin97D8_-oZciCWOsvfHi2tMM/edit?usp=drivesdk">
                  <LeftButton>
                       NGO's/CLINICS
                  </LeftButton>
            </a>      

            <a href="https://docs.google.com/forms/d/13rprG9-o8J6plnoN9qj5C9HC8MnLSRYNTQr0yIwnx7Q/edit?usp=drivesdk">
                  <LeftButton>
                  CUSTOMERS/HELPERS
                  </LeftButton>
            </a> 
            </ButtonGroup>

        </Wrap>
     )
}    

export default Section


const Wrap = styled.div`
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/section-img-2.jpeg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    opacity: 100;
    
`

const ItemText = styled.div`
   padding-top: 15px;
   text-align: center;
   .h1,h2 {
    .p {
        font-size: 30px;
    }
    
    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 50px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 50px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;
    margin: 10px;
    background-color: rgba(1, 35, 64);
    border: 3px solid rgba(217, 129, 98);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const RightButton = styled(LeftButton)`
    
`

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header'
import About from './About'
import Blog from './Blog'



function Home() {



    return (
        <Container>
            <Section />  
        </Container>

    )
}

export default Home

const Container = styled.main`
          min-height: calc(100vh - 70px);
          padding: 0 calc(3.5vw + 5px);
          position: relative;
          overflow-x: hidden;
          
          
       
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        margin: 10px;


    }   


`
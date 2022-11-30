import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Navlink, Routes } from 'react-router-dom'


function Header() {
    return (
        <Nav>
            <Logo src="/images/animal-heaven-logo.jpeg" />
            <NavMenu>
               <Link classname="navbar-brand" to="/">
                   <img src="/images/home-icon.svg" />
                   <span>HOME</span>
                   
               </Link>

               <a>
                   <img src="/images/search-icon.svg" />
                   <span>SEARCH</span>
               </a>

               <Link classname="navbar-brand" to="/about">
                   <img src="/images/company-icon.svg" />
                   <span>ABOUT US</span>
               </Link>

               <Link classname="navbar-brand" to="/blog">
                   <img src="/images/blog.icon.svg" />
                   <span>BLOG</span>
               </Link>

               <Link classname="navbar-brand" to="/categories">
                   <img src="/images/series-icon.svg" />
                   <span>CATEGORIES</span>
               </Link>
            </NavMenu>
            
             <UserImg 
                img src="/images/profile-icon.svg"
             />            
               
            

        </Nav>
    )
}

export default Header

const Nav = styled.nav `
     height: 70px;
     background: #090b13;
     display: flex;
     align-items: center;
     padding; 0 36px;
     overflow-x: hidden;

`
const Logo = styled.img`
      width:250px;
      height: 100px;
      cursor: pointer;
      align: left;

`
const NavMenu = styled.div`
     display: flex;
     flex: 1;
     margin-left: 25px;
     align-items: center;

     a {
         display: flex;
         align-items: center;
         padding: 0 12px;
         cursor: pointer;
     }

     img {
         height: 20px;

     }

     span {
         font-size: 13px;
         color: white;
         letter-spacing: 1.42px;
         position: relative;

        &:after {                       
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
            transform: scaleX(0);
        }
     }

     &:hover {
         span:after {
               transform: scaleX(1);
               opacity: 1;
            }
        }
    } 

`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
`
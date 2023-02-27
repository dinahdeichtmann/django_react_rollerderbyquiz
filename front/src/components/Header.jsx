import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaHome, FaQuestion, FaBook } from "react-icons/fa";

const HeaderContainer = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: linear-gradient(to right top, #4E5166, #ffffffba);
    height: 60px;
    box-shadow: 0px 8px 3px 2px grey 0.5;
    opacity: 70%;
    padding: 3px;
    @media(min-width: 760px) {
    top:0px;
    margin-bottom: 10px;
    }
    
`
const NavLink = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 50px;
        margin-right: 50px;
    @media(min-width: 760px) {
        justify-content: flex-end;
        margin-left: 100px;
        margin-right: 100px;
    }
    
`

const Content = styled.p`
    padding: 17px 40px;
    color: white;
    font-size: 20px;
&:hover{
        cursor: pointer;
        border-bottom: solid 3px #FFF;
    }`

function Header(){
    return(
    <HeaderContainer>
        <NavLink>
            <Link to="/">
                <Content>        
                    <FaHome/>
                </Content>
            </Link>
            <Link to="/filter">
                <Content>       
                    <FaQuestion/>
                </Content>
            </Link>
            <Link to="/rules">
                <Content>
                    <FaBook/>
                </Content>
            </Link>

        </NavLink>
    </HeaderContainer>
    )
}

export default Header
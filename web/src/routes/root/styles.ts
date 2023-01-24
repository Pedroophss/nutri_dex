import styled from "styled-components"

export const NavBar = styled.div`
    height: 3em;
    width: 100%;
    background-color: #333;
    display: flex;
    flex-direction: row;
    align-items: flex-start
    justify-content: center;
`

export const NavItem = styled.a`
    display: flex;
    text-decoration: none;
    color: white;
    width: 7em;
    height: 100%;
    
    justify-content: center;
    align-items: center;
    line-height: 100%;

    &:hover  {
        background-color: #04AA6D;
    }

    &.active {
        background-color: #04AA6D;
    }
`
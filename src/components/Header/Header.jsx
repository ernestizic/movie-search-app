import React from 'react'
import { StyledHeader } from './Header.styled'
import Logo from "../../assets/MyTestApp.png" 

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <img src={Logo} alt="logo" />
      </header>
    </StyledHeader>
  )
}

export default Header
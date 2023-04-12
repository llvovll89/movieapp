import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sideSlice';
import { ToggleSection } from '../styles/GlobalStyle';
import { RxHamburgerMenu } from 'react-icons/rx';

const Toggle = () => {
    const dispatch = useDispatch();

    const toggleOpen = () => {
        dispatch(toggleSidebar());
    }

  return (
    <ToggleSection onClick={toggleOpen}>
    <RxHamburgerMenu />
    </ToggleSection>
  )
}

export default Toggle
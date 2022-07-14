import { useState } from 'react';
import {Nav ,BrandWrapper, Brand, NavCtaWrapper, NavThemeToggleWrapper, ToggleTheme, NavToggleWrapper} from '../../styled/Nav';
import { BiHide } from 'react-icons/bi';
import Boards from './Boards';
import { BoardContext } from '../../helpers/context/BoardContext';
import { ReactComponent as DarkThemeIcon } from '../../assets/svg/icon-dark-theme.svg';
import { ReactComponent as LightThemeIcon } from '../../assets/svg/icon-light-theme.svg';
import AddBoard from '../modals/AddBoard';


export default function Navbar() {
    const [boards, setBoards] = useState([]);
    const [newBoardStatus, setNewBoardStatus] = useState(false);
    return (
        <BoardContext.Provider value={{boards, setBoards, newBoardStatus, setNewBoardStatus}}>
            <Nav>
                <BrandWrapper>
                    <Brand> Boards </Brand>
                </BrandWrapper>
                <Boards/>
                <NavCtaWrapper>
                    <NavThemeToggleWrapper>
                        <LightThemeIcon />
                        <ToggleTheme type="checkbox" name="theme" id="themeInput" />
                        <DarkThemeIcon />
                    </NavThemeToggleWrapper>
                    <NavToggleWrapper>
                        <BiHide/> <span>Hide Sidebar</span>
                    </NavToggleWrapper>
                </NavCtaWrapper>
            </Nav>
            <AddBoard status={newBoardStatus} />
        </BoardContext.Provider>
    )
}
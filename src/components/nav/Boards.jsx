import { useState, useContext, useRef } from 'react';
import { useSpring } from '@react-spring/web';
import { NavListWrapper, NavListHeading, NavList, NavListItem, CreateNewBoard } from '../../styled/Nav';
import { ReactComponent as BoardIcon } from '../../assets/svg/icon-board.svg';
import { BoardContext } from '../../helpers/context/BoardContext';


export default function Boards() {
    const boardItemRef = useRef();
    const boardsData = useContext(BoardContext);
    const { setNewBoardStatus } = boardsData;
    const [hover, setHover] = useState(false);
    const spring = useSpring({
        to: {
            backgroundPosition: hover ? 'left' : 'right',
            backgroundSize: hover ? '5000%' : '100%',
        },
        config: {
            mass: 3,
            tension: 200,
            friction: 32
        }
    });

    const startHoverOnEnter = () => {
        setHover(true);
    }

    const endHoverOnLeave = () => {
        setHover(false);
    }

    const openModal = () => setNewBoardStatus(true);

    return (
        <NavListWrapper>
            <NavListHeading>All Boards ({boardsData.boards.length})</NavListHeading>
            <NavList>
                {boardsData.boards.map((board, index) => {
                    return (
                        <NavListItem key={index} ref={boardItemRef} onMouseEnter={startHoverOnEnter} onMouseLeave={endHoverOnLeave}>
                            <BoardIcon />
                            <span>
                                {board}
                            </span>
                        </NavListItem>
                    )
                })}
            </NavList>
            <CreateNewBoard onClick={openModal}>
                <BoardIcon />
                <span>+ create new board</span>
            </CreateNewBoard>
        </NavListWrapper>
    );
}
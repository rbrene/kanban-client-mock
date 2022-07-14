import { useState, useContext } from 'react';
import { BoardContext } from '../../helpers/context/BoardContext';
import { CreateBoardFormContext } from '../../helpers/context/FormsContext';
import Modal from './Modal';
import { ModalBackdrop } from '../../styled/index';
import CreateBoard from '../forms/boards';
import { useSpring } from '@react-spring/web';
import { rem } from '../../helpers/units';


export default function AddBoard(props) {
    const ctxBoards = useContext(BoardContext);
    const { newBoardStatus, setNewBoardStatus } = ctxBoards;
    const [formHover, setFormHover] = useState(false);
    const boardsSpring = useSpring({
        from: {
            scale: newBoardStatus ? 0.8 : 1
        },
        to: {
            scale: newBoardStatus ? 1 : 0.8
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 26
        }
    })

    const closeModal = () => setNewBoardStatus(false);

    return (
        <Modal {...props}>
            <ModalBackdrop onClick={formHover ? null : closeModal}>
                <CreateBoardFormContext.Provider value={{setNewBoardStatus}}>
                    <CreateBoard style={boardsSpring} onMouseLeave={() => setFormHover(false)}  onMouseEnter={() => setFormHover(true)} />
                </CreateBoardFormContext.Provider>
            </ModalBackdrop>
        </Modal>
    );
}
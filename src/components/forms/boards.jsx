import { useState, useContext } from 'react';
import { BoardContext } from '../../helpers/context/BoardContext';
import { BoardFormContainer, BoardForm, FormControl, FormLabel } from '../../styled/forms/index';
import Input from './Input';
import Button from '../buttons/Button';


const CreateBoard = props => {
    const ctxBoards = useContext(BoardContext);
    const {boards, setBoards, setNewBoardStatus} = ctxBoards;
    const [boardName, setBoardName] = useState('');
    const [inputError, setInputError] = useState({
        active: false,
        message: ''
    });

    const submission = e => {
        if (boardName === '') {
            e.preventDefault();
            setInputError({
                active: true,
                message: 'Board cannot be blank. Please enter a valid board name.'
            })
            setBoardName('');
        }
        else {
            e.preventDefault();
            setInputError({
                active: false,
                message: '',
            })
            setBoards([...boards, boardName])
            setBoardName('')
            setNewBoardStatus(false)
        }
    }

    const captureInputBoardName = e => setBoardName(e.target.value);


    return (
        <BoardFormContainer {...props}>
            <BoardForm action="/" onSubmit={submission}>
                <h3>Add New Board</h3>
                <FormControl>
                    <FormLabel htmlfor="boardName">Board Name</FormLabel>
                    <Input type="text" placeholder="e.g Web Design" value={inputError ? boardName : inputError.message} onChange={captureInputBoardName} />
                </FormControl>
                <Button type="submit">Create New Board</Button>
            </BoardForm>
        </BoardFormContainer>
    );
}

export default CreateBoard;
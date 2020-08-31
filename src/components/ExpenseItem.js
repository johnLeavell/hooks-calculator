import React from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const ExpenseItem = ({expense}) => {
    const {id, charge, amount } = expense 
    return (
        <li className='item'>
            <div className='info'>
            <span className='expense'>{charge}</span>
            <span className='amount'>${amount}</span>
            </div>
            <div>
                <button className='edit-btn' aria-label='edit button'>
                    <AiFillEdit />
                </button>
                <button className='cleart-btn' aria-label='delete button'>
                    <AiFillDelete/>
                </button>
            </div>
        </li>
        
    )
}

export default ExpenseItem

import React from 'react';
import ExpenseItem from './ExpenseItem';
import {AiFillDelete} from 'react-icons/ai';

const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className="list">
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id} expense={expense} />;
            })}
            </ul>
            {expenses.length > 0 && (
            <button classname='btn'>
                Clear expenses
                <AiFillDelete className='btn-icon'/>
            </button>
            )}
        </>
    )
}

export default ExpenseList

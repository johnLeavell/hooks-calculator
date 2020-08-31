import React from 'react';
import ExpenseItem from './ExpenseItem';
import {RiDeleteBin5Line} from 'react-icons/ri';

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
                <RiDeleteBin5Line className='btn-icon'/>
            </button>
            )}
        </>
    )
}

export default ExpenseList

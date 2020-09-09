import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import {v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id: uuidv4(), charge: 'rent', amount: 1600},
  {id: uuidv4(), charge: 'car payment', amount: 400},
  {id: uuidv4(), charge: 'credit card', amount: 1200}
];

function App() {
  // state values
  // all expenses, add expense

  const [ expenses, setExpenses ] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  //single amount
  const [amount, setAmount] = useState('');
  // functionality
  const handleCharge = e => {
    setCharge(e.target.value)
  };
  const handleAmount = e => {
    setAmount(e.target.value)
  };
  const handleSubmit = e =>{
    e.preventDefault();
  };

  return (

    <>
    <Alert />
      <h1>budget calculator</h1>
        <main className='App'>
          <ExpenseForm 
            charge={charge} 
            amount={amount} 
            handleAmount={handleAmount}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            />
          <ExpenseList expenses={expenses}/>
        </main>
        <h1>
          total spending : {" "}
          <span className='total'>
          $ 
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
            },0)}
          </span>
        </h1>
    </>
  );
}

export default App;


// implementing state in functional components
// 1st) import useState()
// useState() returns an [] with two values
//  first value: the actual value of the state
//  second value: function that updates/controls the state
// pass default in useState()
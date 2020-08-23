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
// console.log(initialExpenses);
function App() {
  // console.log(useState());
  const [ expenses, setExpenses ] = useState(initialExpenses);
  // console.log(expenses);
  return (
    <>
    <Alert />
      <h1>budget calculator</h1>
        <main className='App'>
          <ExpenseForm />
          <ExpenseList expenses={expenses}/>
        </main>
        <h1>total spending : <span className='total'>
          $ 
          {expenses.reduce((acc, curr) => {
            return acc + curr.amount},0)}
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
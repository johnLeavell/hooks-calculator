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
  // ************* state values *******************
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // ************* functionality *******************
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle delete
  const handleDelete = id => {
    console.log(`item deleted : ${id}`);
  };
  // handle edit
  const handleEdit = id => {
    console.log(`item edited : ${id}`);
  };

  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
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
            return (acc += parseInt(curr.amount));
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
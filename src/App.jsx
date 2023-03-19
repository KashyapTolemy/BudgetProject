import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title'
import Body from "./components/body"
import Table from "./components/table"
export default function App(){
  const [expenseRs,setexpenseRs]=useState(0);
  const [expenseAmount,setexpenseAmount]=useState(0);
    return (
      <div className ="bg">
        <div className="app">
            <div className="titleh"><Title /></div>
            <div className="balanceh">
              <Body
                expenseRs ={expenseRs}
                setexpenseRs ={setexpenseRs}
                expenseAmount={expenseAmount}
                setexpenseAmount ={setexpenseAmount}
              />
            </div>
            <div className="listh">
              <Table 
              expenseRs ={expenseRs}
              setexpenseRs ={setexpenseRs}
              expenseAmount={expenseAmount}
              setexpenseAmount ={setexpenseAmount}
              />
            </div>
        </div>
      </div>
    )
}

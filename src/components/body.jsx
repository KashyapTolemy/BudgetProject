import React,{useState} from "react";

export default function Body({expenseRs,setexpenseRs,expenseAmount,setexpenseAmount}){
    const [budgetInput,setbudgetInput]=useState(0)
    // const [expenseAmount,setexpenseAmount]=useState(0);
    // const [expenseRs,setexpenseRs]=useState('');
    const [balanceAmount,setbalanceAmount]=useState(0);
    const [clickTime, setClickTime] = useState(null);
    const handleClick=()=>{
        const time =new Date().toLocaleString();
        setClickTime(time);
        console.log(time);
        expensefunction();
    }
    const expensefunction=()=>{
        console.log(expenseAmount)
        console.log(expenseRs)
        setbalanceAmount(parseInt(balanceAmount)-parseInt(expenseAmount))
    }
    return(
        <div>
            <h1 className="balance">Current Balance --<span className="balance1"> $ {parseInt(balanceAmount)}</span> </h1>
            <div className="boxes">
                <div className="budget">
                    <h2>Enter your Budget :</h2>
                    <input 
                        type="number"
                        value={budgetInput}
                        onChange={(e) => setbudgetInput(e.target.value)}
                        ></input>
                    
                    <div>
                        <button onClick={()=>{
                            console.log(budgetInput)
                            setbalanceAmount(parseInt(balanceAmount)+parseInt(budgetInput))
                        }}>Add</button>
                    </div>
                </div>
                <div className="expense">
                    <h2>Enter your Expense: </h2>
                    <input type="text"
                    value={expenseRs}
                    onChange ={(e)=>setexpenseRs(e.target.value)}></input>
                    <h2>Enter your Expense Amount: </h2>
                    <input 
                    type="number"
                    value={expenseAmount}
                    onChange={(e)=>setexpenseAmount(e.target.value)}
                    ></input>
                    <div>
                        <button onClick ={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
// export const expensereason =expenseRs;
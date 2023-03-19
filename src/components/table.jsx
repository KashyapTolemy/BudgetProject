import React from "react";
import Body from "./body";
// import expenseRs from "./body";
export default function Table({expenseRs,setexpenseRs,expenseAmount,setexpenseAmount}){
    // const expensereason =Body().props.children.props.expenseRs;
    return(
        <div className="table1">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Expense</th>
                        <th scope="col">Expense Amount</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td data-label="Account">{expenseRs}</td>
                    <td data-label="Amount">${expenseAmount}</td>
                    <td data-label="Due Date">04/01/2016</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
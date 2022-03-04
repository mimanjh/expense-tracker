import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    filteredExpenses.map((expense, index) => (
                        <ExpenseItem
                            key={expense.id}
                            // key={index}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )} */}
                {/* {expensesContent} */}
                <ExpensesList expenses={filteredExpenses} />
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense, index) => (
                        <ExpenseItem
                            key={expense.id}
                            // key={index}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))} */}
                {/* <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                /> */}
            </Card>
        </div>
    );
};

export default Expenses;

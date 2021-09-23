import React from 'react'
import Button from './Button'


const Todo = ({ todos }) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.toLocaleString('en-us',{month:'short'})
    const day = date.toLocaleString('en-us',{weekday:'long'})
    const dayNumber = date.getDate()

    return (
        <div className="todo">
            <div className="date">
                <span className="day-number">{ dayNumber }</span>
                <span className="month"> {month} <br /> {year} </span>
                <span className="day"> {day} </span>
            </div>
            <div className="">
                {
                    todos.map(ele => (
                        <p className="todolist">
                            <li>
                                { ele }
                            </li>
                        </p>
                    ))
                }
                <Button value="+" myStyle="add-btn" type="submit" />
            </div>
        </div>
    )
}

export default Todo

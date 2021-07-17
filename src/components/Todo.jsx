import React from 'react'
import Button from './Button'

const Todo = () => {
    return (
        <div className="todo">
            <div className="date">
                <span className="day-number">12</span>
                <span className="month">April <br /> 2020</span>
                <span className="day"> TUESDAY </span>
            </div>
            <div className="">
                <p className="todolist">
                    To do list
                    <input type="checkbox" value="x" />
                </p>
                <Button plus_sign="+" />
            </div>
        </div>
    )
}

export default Todo

import React, { useState } from 'react'
import Button from './Button'
import ButtonCancel from './ButtonCancel'


const AddTodo = ({ addTodos }) => {

    const [value, setValue] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()

        addTodos(value)
        setValue('')
    }

    const handleOnchange = (e) => {
        e.preventDefault()

        setValue(e.target.value)
    }

    return (
        <div className="add-todo">
            <div className="modal fade" id="exampleModal" tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{
                            border: 'none'
                        }}>
                            <h1 className="modal-title" id="exampleModalLabel">New Todo</h1>
                        </div>
                        <div className="modal-body">
                            <p>Please write content of todo in input below!</p>
                            <form className="row g-3 needs-validation"
                                noValidate onSubmit={ handleOnSubmit }>

                                <input type="text"  placeholder="Do something!!!"
                                required id="validationCustom01" autoFocus={true}
                                onChange={handleOnchange} value={value} />

                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="modal-footer" style={{
                                border: 'none'
                                }}>
                                    <ButtonCancel value="Cancel" myStyle="cancel" />
                                    <Button value="Add" id="btn" myStyle="add" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo

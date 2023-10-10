import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateExchange = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        exchangeNumber: "",
        exchanger: "",
        openDate: "",
        closeDate: "",
        lastModifiedDate: "",
        accountBalance: "",
        status: "",
    })

    const handleInputChange = (e) => {
        const value = e.target.value
        setFormData({ ...formData, [e.target.name]: value })

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:7000/app-v1/exchange/create', {
            method: "POST",
            body: JSON.stringify({
                exchangeNumber: formData.exchangeNumber + (Math.round(Math.random() * 100 + 1)),
                exchanger: formData.exchanger,
                openDate: formData.openDate,
                closeDate: formData.closeDate,
                lastModifiedDate: formData.lastModifiedDate,
                accountBalance: formData.accountBalance,
                status: formData.status
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(result => setMessage(result.msg))
        navigate('/')
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className='login__page'>
                <div className="login__header">
                    <h3>Create Exchange</h3>
                </div>
                <div className="input__group">
                    <label>Exchange Number</label>
                    <input type="number" name="exchangeNumber" value={formData.exchangeNumber} className='login__input' placeholder='Enter Exchange Number' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Exchanger</label>
                    <input type="text" name="exchanger" value={formData.exchanger} className='login__input' placeholder='Enter Exchanger Name' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Open Date</label>
                    <input type="date" name="openDate" value={formData.openDate} className='login__input' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Close Date</label>
                    <input type="date" name="closeDate" value={formData.closeDate} className='login__input' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Last Modified Date</label>
                    <input type="date" name="lastModifiedDate" value={formData.lastModifiedDate} className='login__input' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Account Balance</label>
                    <input type="text" name="accountBalance" value={formData.accountBalance} className='login__input' placeholder='Enter Exchanger Account Balance' onChange={handleInputChange} required />
                </div>
                <div className="input__group">
                    <label>Status</label>
                    <select name="status" value={formData.status} className='login__input' onChange={handleInputChange} required>
                        <option>Select Status</option>
                        <option value="Active">Active</option>
                        <option value="New">New</option>
                    </select>
                </div>
                <button type='submit' className='login__btn'>Create</button>
                {
                    message !== "" && (<span className="response__message">{message}</span>)
                }
            </form>
        </div>
    )
}

export default CreateExchange
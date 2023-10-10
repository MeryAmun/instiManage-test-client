import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const EditExchange = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        exchangeNumber: state.exchangeNumber,
        exchanger: state.exchanger,
        openDate: state.openDate,
        closeDate: state.closeDate,
        lastModifiedDate: state.lastModifiedDate,
        accountBalance: state.accountBalance,
        status: state.status
    })
    const handleInputChange = (e) => {
        const value = e.target.value
        setFormData({ ...formData, [e.target.name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:7000/app-v1/exchange/${state._id}`, {
            method: "PUT",
            body: JSON.stringify({
                exchangeNumber: formData.exchangeNumber,
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
                    <h3>Update Exchange</h3>
                </div>
                <div className="input__group">
                    <label>Exchange Number</label>
                    <input type="text" name="exchangeNumber" value={formData.exchangeNumber} className='login__input' placeholder='Enter Exchange Number' onChange={handleInputChange} required />
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
                        <option value="active">Active</option>
                        <option value="new">New</option>
                    </select>
                </div>
                <button type='submit' className='login__btn'>Update</button>
                {
                    message !== "" && (<span className="response__message">{message}</span>)
                }
            </form>
        </div>
    )
}

export default EditExchange
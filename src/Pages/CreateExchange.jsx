import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateExchange = () => {
    const navigate = useNavigate()
const [formData, setFormData] = useState({
    exchangeNumber:"",
      exchanger:"",
      openDate:"",
      closeDate:"",
      lastModifiedDate:"",
      accountBalance:"",
      status:"",
})

const handleInputChange = (e)  => {
const value = e.target.value
setFormData({...formData,[e.target.name]:value})

} 
const handleSubmit = (e) =>{
e.preventDefault()
console.log(formData)
navigate('/dashboard')
}
return (
   <div className="login">
     <form onSubmit={handleSubmit} className='login__page'>
        <div className="form-group">
        <div className="input__group">
            <label>Exchange Number</label>
            <input type="text"  name="exchangeNumber" value={formData.exchangeNumber} className='login__input' placeholder='Enter Exchange Number' onChange={handleInputChange} required/>
        </div>
        <div className="input__group">
            <label>Exchanger</label>
            <input type="text" name="exchanger" value={formData.exchanger} className='login__input'  placeholder='Enter Exchanger Name' onChange={handleInputChange} required/>
        </div>
        </div>
        <div className="form-group">
        <div className="input__group">
            <label>Open Date</label>
            <input type="date" name="openDate" value={formData.openDate} className='login__input'   onChange={handleInputChange} required/>
        </div>
        <div className="input__group">
            <label>Close Date</label>
            <input type="date" name="closeDate" value={formData.closeDate} className='login__input'   onChange={handleInputChange} required/>
        </div>
        </div>
        <div className="form-group">
        <div className="input__group">
            <label>Last Modified Date</label>
            <input type="date" name="lastModifiedDate" value={formData.lastModifiedDate} className='login__input'   onChange={handleInputChange} required/>
        </div>
        <div className="input__group">
            <label>Account Balance</label>
            <input type="text" name="accountBalance" value={formData.accountBalance} className='login__input'  placeholder='Enter Exchanger Account Balance' onChange={handleInputChange} required/>
        </div>
        </div>
        <div className="input__group">
            <label>Account Balance</label>
            <select name="accountBalance" value={formData.accountBalance} className='login__input'   onChange={handleInputChange} required>
             <option value="active">Active</option>
             <option value="new">New</option>
            </select>
        </div>
        <button type='submit' className='login__btn'>Create Exchange</button>
    </form>
   </div>
  )
}

export default CreateExchange
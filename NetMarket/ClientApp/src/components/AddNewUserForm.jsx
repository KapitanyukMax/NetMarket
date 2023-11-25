import {useState} from 'react';
import './AddNewUserForm.css';
//import axios from 'axios';

const AddNewUserForm=()=>{
    const [UserName, setUserName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');


    const handleUserNameChange=(e)=>{
        setUserName(e.target.value);
    }
    const handleDateOfBirth=(e)=>{
        setDateOfBirth(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = async ()=>{
        const user={
            UserName: UserName,
            DateOfBirth: DateOfBirth,
            Email : Email,
            PhoneNumber : PhoneNumber
        }

    console.log(user);
    // try {
    //     const response = await axios.post('https://localhost:44447', user);
    //     console.log('Success:', response.data);
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    setUserName('');
    setDateOfBirth('');
    setEmail('');
    setPhoneNumber('');
    };
    return(
        <div>
            <h2>Enter your personal data : </h2>
            <form>
                <div className="add-user-form">
                <div>
                    <label htmlFor="userName">Name : </label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={UserName}
                            onChange={handleUserNameChange}
                            required
                        />
                </div>
                <div>
                    <label htmlFor="userDateOfBirth"> Date of birth : </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={DateOfBirth}
                        onChange={handleDateOfBirth}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userEmail">Email : </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={Email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone number : </label>
                    <input
                        type="phone"
                        id="userPhoneNumber"
                        name="userPhoneNumber"
                        value={PhoneNumber}
                        onChange={handlePhoneNumber}
                        required
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Confirm </button>    
                </div>         
            </form>
        </div>
    )
}

export default AddNewUserForm;
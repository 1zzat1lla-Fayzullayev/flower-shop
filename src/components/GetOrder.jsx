import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function GetOrder({ hasOrder,setHasOrder }) {




    const [data, setData] = useState({ name: '', number: 0 })
    const selectedFlowers = useSelector(state => state.userProduct.myArray)

    const BOT_TOKEN = '7059782474:AAFbkHTcoIY5B-EQWXJazFZtPCR5PGmoRV4';
    const chat_id = '-1002016358863';
    const telegramAPIURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const text = `name:${data.name}
        \nnumber:${data.number}
        \norder:  `

        console.log(data);
        axios.post(telegramAPIURL, { chat_id, text }, config)
    }

    const handleChange = (e) => {
        setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }



    if (hasOrder) {
        return (
            <div className='GetOrder font-Poppins'>
                <div className="x-div" onClick={()=>setHasOrder(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="form-div">
                    <form onSubmit={handleSubmit}>
                        <h2>Leave your number & name</h2>
                        <input
                            type="text"
                            name='name'
                            required
                            placeholder='Name'
                            onChange={handleChange}
                            value={data.name || ''}
                        />
                        <input
                            type="number"
                            name='number'
                            required
                            placeholder='Number'
                            onChange={handleChange}
                            value={data.number || ''}
                        />
                        <button>Order</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default GetOrder
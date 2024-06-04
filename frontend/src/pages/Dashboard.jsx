
import { Balance } from '../components/Balance';
import { Appbar } from './../components/Appbar';
import { Users } from './../components/Users';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);

    

    const authtoken = 'Bearer ' + localStorage.getItem("token");
    //`Bearer ${localStorage.getItem("email")}`
    useEffect(()=>{
        const fetchBalance = async () =>{
            try{
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        'Authorization': authtoken
                    }
                    });
                    console.log(response);
                    setBalance(response.data.balance);
            }
            catch(error){
                console.error('Error fetching balance:', error);
            }
        };
       
        fetchBalance();
    },[]);


    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value ={balance} />
            <Users />
        </div>
    </div>
}
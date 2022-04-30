
import React, { useState, useEffect} from 'react'
import axios from 'axios'

import { useParams, Link } from 'react-router-dom';
const Users = () => {
    const {id} = useParams();
    const url = 'https://reqres.in/api/users'
    const [items, setItems] = useState(null)
    useEffect(() =>{
        axios.get(url)
            .then(response => {
                setItems(response.data)
            })
    }, [url])
    
    if(items){
        
        let item = items.data;
        if(id==1){
            return(
                <Link to='1' className='lnk' >
                <div className='card' >
                <img src = {item[0].avatar} alt='image6'></img>
                    <h1>First Name: {item[0].first_name}</h1>
                    <h1>Last Name: {item[0].last_name}</h1>
                    <h5>Email: {item[5].email}</h5>
                </div>
                </Link>
            );
        }
        if(id==2){
            return(
                <Link to='2' className='lnk' >
                <div className='card' >
                <img src = {item[1].avatar} alt='image6'></img>
                    <h1>First Name: {item[1].first_name}</h1>
                    <h1>Last Name: {item[1].last_name}</h1>
                    <h5>Email: {item[1].email}</h5>
                </div>
                </Link>
            );
        }
        if(id==3){
            return(
                <Link to='3' className='lnk' >
                <div className='card' >
                <img src = {item[2].avatar} alt='image6'></img>
                    <h1>First Name: {item[2].first_name}</h1>
                    <h1>Last Name: {item[2].last_name}</h1>
                    <h5>Email: {item[2].email}</h5>
                </div>
                </Link>
            );
        }
        if(id==4){
            return(
                <Link to='4' className='lnk' >
                <div className='card' >
                <img src = {item[3].avatar} alt='image6'></img>
                    <h1>First Name: {item[3].first_name}</h1>
                    <h1>Last Name: {item[3].last_name}</h1>
                    <h5>Email: {item[3].email}</h5>
                </div>
                </Link>
            );
        }
        if(id==5){
            return(
                <Link to='5' className='lnk' >
                <div className='card' >
                <img src = {item[4].avatar} alt='image6'></img>
                    <h1>First Name: {item[4].first_name}</h1>
                    <h1>Last Name: {item[4].last_name}</h1>
                    <h5>Email: {item[4].email}</h5>
                </div>
                </Link>
            );
        }
        if(id==6){
            return(
                <Link to='6' className='lnk' >
                <div className='card' >
                <img src = {item[5].avatar} alt='image6'></img>
                    <h1>First Name: {item[5].first_name}</h1>
                    <h1>Last Name: {item[5].last_name}</h1>
                    <h5>Email: {item[5].email}</h5>
                </div>
                </Link>
            );
        }
        else if(!id){
            return(
                <div className='cards'>
                <Link to='1'className='linkss' >
                    <div className='card'>
                    <img  src = {item[0].avatar} alt='image1'></img>
                    <h1>First Name: {item[0].first_name}</h1>
                    <h1>Last Name: {item[0].last_name}</h1>
                    <h5>Email: {item[0].email}</h5>
                </div>
                </Link>
                <Link to='2' className='linkss' >
                <div className='card'>
                <img  src = {item[1].avatar } alt='image2'></img>
                    <h1>First Name: {item[1].first_name}</h1>
                    <h1>Last Name: {item[1].last_name}</h1>
                    <h5>Email: {item[1].email}</h5>
                </div>
                </Link>
                <Link to='3' className='linkss' >
                <div className='card'>
                <img  src = {item[2].avatar} alt='image3'></img>
                    <h1>First Name: {item[2].first_name}</h1>
                    <h1>Last Name: {item[2].last_name}</h1>
                    <h5>Email: {item[2].email}</h5>
                </div>
                </Link>
                <Link to='4' className='linkss' >
                <div className='card'>
                <img  src = {item[3].avatar} alt='image4'></img>
                    <h1>First Name: {item[3].first_name}</h1>
                    <h1>Last Name: {item[3].last_name}</h1>
                    <h5>Email: {item[3].email}</h5>
                </div>
                </Link>
                <Link to='5' className='linkss' >
                <div className='card'>
                <img  src = {item[4].avatar} alt='image5'></img>
                    <h1>First Name: {item[4].first_name}</h1>
                    <h1>Last Name: {item[4].last_name}</h1>
                    <h5>Email: {item[4].email}</h5>
                </div>
                </Link>
                <Link to='6' className='linkss'>
                <div className='card' >
                <img  src = {item[5].avatar} alt='image6'></img>
                    <h1>First Name: {item[5].first_name}</h1>
                    <h1>Last Name: {item[5].last_name}</h1>
                    <h5>Email: {item[5].email}</h5>
                </div>
                </Link>
                
            </div>
            );
        }
    
    }
};
 export default Users;

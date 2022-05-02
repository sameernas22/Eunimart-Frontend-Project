
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
        if(id){
            return(
                
                <div className='card' >
                <img src = {item[id-1].avatar} alt='image6'></img>
                    <h1>First Name: {item[id-1].first_name}</h1>
                    <h1>Last Name: {item[id-1].last_name}</h1>
                    <h5>Email: {item[id-1].email}</h5>
                </div>
                
            );
        }

        
        else if(!id){
            const CreateDivs = ({i}) =>{
                let item=items.data;
                if(i==1){
                    return(
                        <Link to={i.toString()} className='linkss' >
                            <div className='card'>
                            <img  src = {item[0].avatar} alt='image1'></img>
                            <h1>First Name: {item[0].first_name}</h1>
                            <h1>Last Name: {item[0].last_name}</h1>
                            <h5>Email: {item[0].email}</h5>
                        </div>
                        </Link>
                    )
                }
                else{
                    
                    
                    return(
                        <>
                        <CreateDivs i = {i-1}/>
                        <Link to={i.toString()} className='linkss' >
                            <div className='card'>
                            <img  src = {item[i-1].avatar} alt='image1'></img>
                            <h1>First Name: {item[i-1].first_name}</h1>
                            <h1>Last Name: {item[i-1].last_name}</h1>
                            <h5>Email: {item[i-1].email}</h5>
                        </div>
                        </Link>
                        
                        </>
                    )
                }
            }
            
            return(
            <div className='cards'>
        
        <CreateDivs i={items.per_page}/>
            </div>
            
            );
        }
    
    }
};
 export default Users;

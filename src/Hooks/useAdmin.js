import  {useState, useEffect } from 'react'

const useAdmin = (user) => {
    const[admin,setAdmin]=useState(false)
    const[adminLoading,setAdminLoading]=useState(true)
    useEffect(()=>{
        const email=user?.email
       if(email){
        fetch(`https://protected-journey-61299.herokuapp.com/useadmin/${email}`,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
            setAdminLoading(false)
        })
       }
    },[user])
    return [admin,adminLoading]
};

export default useAdmin;
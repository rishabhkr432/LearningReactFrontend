import React from "react"
import UsersList from "../Components/UsersList"
const Users = () =>{
    const USERS = [{id: 'u1', name: 'Mandu', image: "https://image.tmdb.org/t/p/original/yhihlwOXX90QZPGjUlEsUL5Tsbu.jpg", places: 5}] 
return <UsersList items={USERS}/>

}
export default Users
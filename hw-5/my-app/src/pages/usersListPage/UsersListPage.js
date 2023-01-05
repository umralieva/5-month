import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../redux/actions";

function UsersListPage(props) {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getUsersAction())
    },[dispatch])
    const {users}= useSelector(state => state.usersReducer)
    console.log(users)
    return (
     <Table striped bordered hover>
         <thead>
         <tr>
             <th>#</th>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Username</th>
         </tr>
         </thead>
         <tbody>
         {users.map( user=>
             <tr key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.username}</td>
                 <td>{user.email}</td>
                 <td>{user.contactphone}</td>
             </tr>

         )}
         </tbody>


     </Table>



    );
}

export default UsersListPage;
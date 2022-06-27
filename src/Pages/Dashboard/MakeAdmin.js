
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
  

    const {data:users, isLoading,  refetch} = useQuery('users', ()=> fetch(`http://localhost:5000/users`).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    return (

        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =><AdminRow 
        key = {user._id}
        user ={user}
        index ={index}
        refetch = {refetch}
        ></AdminRow>)
      }



      
      
    </tbody>
  </table>
</div>

    );
};

export default MakeAdmin;
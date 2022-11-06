
import Layout from "../../components/Layout"
import axios from 'axios';

const Index = ({users}) => {
  return (
    <Layout>
        <div classname="container">
        <h1>all users list</h1>
        <table class="table">
  <thead>
  <th scope="col">Name</th>
  </thead>
  <tbody>
    {users.map(el=>(
        <tr key={el.id}>
         <td>{el.name}</td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    
    </Layout>
  )
}

export default Index;

export async function getStaticProps(){
    try{
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
          return {
            props:{
                users:data
            }
          }
    }
    catch(err){
              return err
    }
}
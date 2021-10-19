import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const SingleDetails = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://kaushik-pramanik.github.io/data/data.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const data = users?.find(user => Number(user.id) === Number(id))
    console.log(data);


    return (
        <div>
            <h4>{id}</h4>
            <img src={data?.img} alt="" />
            <h3>{data?.name}</h3>
            <p>{data?.description}</p>


        </div>
    );
};

export default SingleDetails;
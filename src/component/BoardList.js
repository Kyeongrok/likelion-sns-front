import React, {useState, useEffect} from 'react'
import '../css/BoardList.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';


function BoardList() {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://ec2-3-38-111-117.ap-northeast-2.compute.amazonaws.com:32574/api/boards')
            .then(response => { setData(response.data);
                console.log(response.data)
            })
            .catch(Error => console.log(Error));
    }, []);

    return ( 
        
    <Table striped bordered hover>
            {/* <h1>Order Get<br/></h1> */}
        <thead>
            <tr className={'Box'}>
                <th colSpan='1' scope='col' >Id</th>
                <th colSpan='1' >title</th>
                <th colSpan='1' >content</th>
            </tr>
        </thead>
            <tbody>
            {data.map(board => 
                <tr key={board.id} className={'Box'}>
                    <td>{board.id}</td>
                    <td className='id_deco' onClick={(e) => {
                        navigate("/WritePost", { state : {
                            id : board.id,
                            title : board.title,
                            content : board.content
                        }})
                    }}>{board.title}</td>
                    <td>{board.content}</td>
                </tr>
                )}
            </tbody>
    </Table> 
    )
}

export default BoardList;
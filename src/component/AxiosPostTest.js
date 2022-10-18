import React, {useState} from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'
import './css/ProductPost.css'



function OrderPost() {
    // const [orderProductId, setOrderProductId] = useState('')
    // const [orderStatus, setorderStatus] = useState(false)
    const [orderQuantity, setOrderQuantity] = useState(1)
    const location = useLocation();
    const navigate = useNavigate();
    
    console.log(location.state);
        
    const addPosts = async () => {
        const proId  = location.state.productId
        console.log('-----addPosts-----')
        console.log('Hello world:', orderQuantity)
        // console.log('Param', orderProductId)
        console.log('proid', proId)
        let response = await axios
        .post('http://ec2-15-164-22-248.ap-northeast-2.compute.amazonaws.com:32423/api/v1/order/', 
        {
            productId: proId,
            quantity : orderQuantity,
        }).then(function (response) {
            console.log(response.data);
            console.log({orderQuantity})
            alert('주문이 완료되었습니다.')
            navigate("/orget")
        })
        .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log('response:', response);
            console.log('response.data', response.data);
            alert('주문이 실패하였습니다.')
        }  
    };
    // onClick={(event)=> setOrderProductId(location.state.productId)}
    // placeholder={location.state.productId}
        return ( 
            <div>
                <h1>Order Post</h1>
                <form>
                    <br/>
                    <input className='Box2' defaultValue={location.state.productId} />
                    <br/>
                    <input className='Box2' defaultValue={location.state.productName}/>
                    <br/>
                    <input className='Box2' defaultValue={location.state.productPrice}/>
                    <br/>
                    <select className='Box2'>
                        <option value={orderQuantity}>1</option>
                      
                    </select>
                    <br/>
                 </form>
                 <button onClick={() => {   
                            addPosts()}
                        } type="button">
                    Enroll Order</button>
          </div>
        );
        
        }

  export default OrderPost;
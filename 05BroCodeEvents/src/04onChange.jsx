import React,{useState} from "react";

function MyComponent(){
    const[name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");


   function handleNameChange(event){
        setName(event.target.value);
          
        }
    function handleQuantity(event){
        setQuantity(Number(event.target.value))
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }



    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instruction"/>
            <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="">Select payment method</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <p>Payment Method: {payment}</p>
        </div>
    );

}
export default MyComponent;

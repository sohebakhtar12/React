import React,{useState} from "react";

function MyComponent(){
    const[name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState(""); 
    const[shipping,setShipping]=useState("Delivery"); 


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

    function hendleShipping(event){
        setShipping(event.target.value)
    }



    return(
        <div>

<b> <p>-------------1:: Input topic using onChange</p></b>

            <input value={name} onChange={handleNameChange} type="text"/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number"/>
            <p>Quantity: {quantity}</p>
<b> <p>-------------2:: textarea topic using onChange</p></b>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instruction"/>
            <p>Comment: {comment}</p>

 
 <b> <p>--------3:: option topic using onChange</p>
</b>
      <select value={payment} onChange={handlePayment}>
        <option value="">Select payment method</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
      </select>

      <p>Payment Method: {payment}</p>

      
<b><p>-------4:: Label topic using onChange</p></b>
      <label>
        <input type="radio" value="Pick Up"
            checked={shipping==="Pick Up"}
            onChange={hendleShipping}/>
        Pick Up
      </label><br/>
       <label>
        <input type="radio" value="Delivery"
            checked={shipping==="Delivery"}
            onChange={hendleShipping}/>
        Delivery
      </label>
      <p>Shipping:{shipping}</p>
        </div>
    );

}
export default MyComponent;

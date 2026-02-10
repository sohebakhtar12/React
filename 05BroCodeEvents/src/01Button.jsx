function Button(){
    let count=0;
    
    const handleClick=(name)=>{
        if(count<3){
            console.log(`${name} you clicked me ${count} time/s`);
            count++;
        }else{
            console.log(`${name} stop clicking me`);
        }
    }
    return(
        <>
        <button onClick={()=>handleClick("soheb")}>Click me😂</button>

        </>
    );
 
}
export default Button
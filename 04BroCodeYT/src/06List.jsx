function List(){
    const fruits=[{name:"apple", calories: 95},
                  {name:"orange", calories: 45},
                  {name:"banana", calories: 105},
                  {name:"coconut", calories: 159},
                  {name:"pineapple", calories: 37}];
       
    fruits.sort();
   const listItems=fruits.map(fruit=><li key={fruit.name }>
                                        {fruit.name }:&nbsp;
                                        <b>{fruit.calories}</b>
                                    </li>)

    const Vegetables=[{name:"Potatoes", calories: 95},
                  {name:"Celery", calories: 110},
                  {name:"banana", calories: 15},
                  {name:"carrots", calories: 25},
                  {name:"corn", calories: 63},
                  {name:"broccoli", calories: 50}];
       
    Vegetables.sort();
   const listveg=Vegetables.map(Vegetables=><li key={Vegetables.name }>
                                        {Vegetables.name }:&nbsp;
                                        <b>{Vegetables.calories}</b>
                                    </li>)     

    return (
        <>
        <h2>fruits</h2>
        <ol>{listItems},</ol>,
        <h2>vegetables</h2>
        <ol>{listveg}</ol>
        </>
    );

}
export default List
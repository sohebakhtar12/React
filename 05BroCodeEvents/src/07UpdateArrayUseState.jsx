import React, { useState } from "react";

function MyArray() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const [newFood, setNewFood] = useState("");

    function handleAddFoods() {
        if(newFood.trim() === "") return;
        setFoods(f => [...f, newFood]);
        setNewFood("");
    }

    function handleRemoveFoods(index) {
        setFoods(f => f.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFoods(index)}>
                        {food}
                    </li>
                )}
            </ul>

            <input
                type="text"
                value={newFood}
                onChange={(e) => setNewFood(e.target.value)}
                placeholder="Enter food name"
            />
            <button onClick={handleAddFoods}>Add Food</button>
        </div>
    );
}

export default MyArray;
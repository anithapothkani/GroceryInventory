import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemCost, setItemCost] = useState('');

    const addItem = () => {

        if (itemName && itemQuantity && itemCost) {
            setItems([...items, { name: itemName, quantity: parseInt(itemQuantity), cost: parseFloat(itemCost) }]);
            setItemName('');
            setItemQuantity('');
            setItemCost('');
        }

    };

    const deleteItem = (index) => {


        const mewItems = items.filter((_, i) => i !== index);
        setItems(newItems);

    };

    const getTotalQuantity = () => {

        return items.reduce((total, item) => total + item.quantity, 0);
            };


                     const getTotalCost = () => {

    return items.reduce((total, item) => total + (item.quantity * item.cost), 0).toFixed(2);
};


const handleprint = () => {

    const printContent = document.getElementById('printable-receipt').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
};


    return (

        <div className="inventory">
            <h1> Grocery Inventory</h1>
            <div className="add-item">
                <input type="text"
                
                    placeholder="Item Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />

                <input type="number"
                    placeholder="Quantity"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(e.target.value)}
                />


                <input type="number"
                    placeholder="Cost per Item"
                    value={itemCost}
                    onChange={(e) => setItemCost(e.target.value)}
                />



                <button onClick={addItem}>Add Item</button>
            </div>


            <table>
                <thead>
                    <tr>
                        <th> Item Name </th>
                        <th> Quantity </th>
                        <th>   Cost Per Item</th>
                        <th>  Total Cost </th>
                        <th>  Actions </th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item, index) => (

                        <tr key={index}>
                            <td> {item.name} </td>
                            <td>  {item.quantity} </td>
                            <td>${item.cost.toFixed(2)} </td>
                            <td>${(item.quantity * item.cost).toFixed(2)} </td>
                            <td> <button onClick={() => deleteItem(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className="total-quantity">
                <h2>Total Quantity:  {getTotalQuantity()} </h2>
                <h2>  Total Cost: ${getTotalCost()}     </h2>
            </div>

            <button onClick={handleprint} className="print-button">  Print Receipt      </button>



            <div id="Printable-Reciept" className="Printable-reciept">
                <h2> Grocery Inventory Receipt </h2>
                <table>
                    <thead><tr>
                        <th>Item </th>
                        <th> Qty  </th>
                        <th> Cost </th>
                        <th>  Total </th>
                    </tr>
                    </thead>


                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td> {item.name}</td>
                                <td> {item.quantity} </td>
                                <td> ${item.cost.toFixed(2)} </td>
                                <td> ${(item.quantity * item.cost).toFixed(2)}  </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
                <div className="total">
                    <p>Total Quantity:  {getTotalQuantity()}</p>
                    <p>Total Cost: ${getTotalCost()}        </p>
                </div>
            </div>

        </div>



    );

};


export default App;





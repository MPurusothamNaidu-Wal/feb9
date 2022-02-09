import { useState } from "react";
let Products = () => {
    let [products, setProducts] = useState([])

    let addProduct = (event) => {
        event.preventDefault();
        let productObject = {
            body: event.target.description.value,
            name: event.target.name.value,
            color: event.target.color.value,
            price: event.target.price.value,
            date: event.target.date.value,
        };
        let newProducts = [...products, productObject];
        setProducts(newProducts);
    }
    return (
        <div className="priceTodo">
            <div className="TodoForm">
            <form onSubmit={addProduct}>
                <input type="text" name="name" className="productInput" placeholder="Product Name" /><br/>
                <textarea name="description"  className="textArea"></textarea><br/>
                <input type="color" name="color"   className="productInput" /><br/>
                <input type="number" name="price" className="productInput" /><br/>
                <input type="date" name="date" className="productInput"/><br/>
                <button className="productButton" className="AvgSubmit">Add</button>
            </form>
            </div>
            
            {products.map((val, index) => {
                return (
                    <div className="productMain">
                    <div className="productView">  
                        <div >
                            <p className="block">Name : {val.name}</p> 
                            <p className="block">Body : {val.body}</p>
                            <p className="block">Color: {val.color}</p>
                            <p className="block">Price: {val.price} </p>
                            <p className="block">Expiry Date:<br/> {val.date} </p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;
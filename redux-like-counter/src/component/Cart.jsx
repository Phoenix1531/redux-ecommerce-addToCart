import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    var cart = useSelector((storeData) => {
        return storeData.cart;
    })
    return (
        <div>
            <h1>Cart</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "50px 10px" }}>
                {cart.map((e, i) => {
                    return <div key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "lightBlue", padding: "10px", borderRadius: "15px" }}>
                        <img src={e.image} width={"150px"} />
                        <h2>{e.title}</h2>
                        <h3>$ {e.price}</h3>
                        <p> 🎇{e.rating.rate}</p>
                        <button style={{ backgroundColor: "yellow", padding: "10px", color: "black", cursor: "pointer", borderRadius: "10px", border: "none" }}
                            onClick={() => {
                                dispatch(addToCart(e))
                            }}>ADD TO CART</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Cart
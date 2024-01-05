import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchSuccess } from '../utils/redux/action'
const Content = () => {
    const products = useSelector(storeData => storeData.product)
    const dispatch = useDispatch()
    useEffect(() => {
        if (products.length == 0) {
            axios.get("https://fakestoreapi.com/products").then((res) => {
                dispatch(fetchSuccess(res.data))
                console.log("fetched")
            })
        }
    })
    return (
        <div>
            <h1>STORE</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", margin: "50px 10px" }}>
                {products.map((e, i) => {
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

export default Content
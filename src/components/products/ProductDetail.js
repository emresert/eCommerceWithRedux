import React, { Component } from 'react'

import TextInput from "../toolbox/TextInput"


const ProductDetail = ({categories, product, onSave, onChange}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update Product" : "Add Product"}</h2>


            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata"
            >

            </TextInput>
            <button type="submit" className="btn btn-primary"> Save</button>

        </form>
    )
}

export default ProductDetail;
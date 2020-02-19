import React, { Component } from 'react'

// child import edildi
import TextInput from "../toolbox/TextInput"

// Hooks'da Obje notasyonu olarak ihtiyacımız olan  
// parametreleri tanımlamamız gerekir. Bu parametreler 
// herhangi bir yerden çekilebilir (state reducer vs.) 
const ProductDetail = (categories, product, onSave, onChange) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update Product" : "Add Product"}</h2>

            {/* child için proplar tanımlandı */}
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
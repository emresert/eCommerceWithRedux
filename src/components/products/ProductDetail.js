import React, { Component } from 'react'

import TextInput from "../toolbox/TextInput"
import SelectInput from '../toolbox/SelectInput';





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

            <SelectInput 
            name="categoryId" 
            label="Category" 
            value={product.categoryId || ""} 
            defaultOption="Choose a category"
            options={categories.map(category =>({
                value:category.id,
                text:category.categoryName
            }))}
            onChange={onChange}
            error="Hata"
            >

            </SelectInput>

            <button type="submit" className="btn btn-primary"> Save</button>

        </form>
    )
}

export default ProductDetail;
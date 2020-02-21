import React from 'react'

import TextInput from "../toolbox/TextInput"
import SelectInput from '../toolbox/SelectInput';





const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Update Product" : "Add Product"}</h2>


            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error={errors.productName}
            >

            </TextInput>

            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error={errors.quantityPerUnit}
            ></TextInput>

                <TextInput
                    name="unitPrice"
                    label="unit Price"
                    value={product.unitPrice}
                    onChange={onChange}
                    error={errors.unitPrice}
                >

                </TextInput>

                <TextInput
                    name="unitsInStock"
                    label="units In Stock"
                    value={product.unitsInStock}
                    onChange={onChange}
                    error={errors.unitsInStock}
                >

                </TextInput>

                <SelectInput
                    name="categoryId"
                    label="Category"
                    value={product.categoryId || ""}
                    defaultOption="Choose a category"
                    options={categories.map(category => ({
                        value: category.id,
                        text: category.categoryName
                    }))}
                    onChange={onChange}
                    error={errors.categoryId}
                >
                </SelectInput>

                <button type="submit" className="btn btn-primary"> Save</button>

        </form>
            )
        }
        
export default ProductDetail;
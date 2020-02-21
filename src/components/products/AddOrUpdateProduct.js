
import React, { useEffect, useState } from "react"


import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productActions"


import { connect } from "react-redux"
import ProductDetail from "./ProductDetail"


function AddOrUpdateProduct({
    saveProduct,
    getProducts,
    getCategories,
    categories,
    products,
    history,
    ...props
}) {



    const [product, setProduct] = useState({ ...props.product })


    useEffect(() => {

        if (categories.length === 0) {
            getCategories();
        }


        setProduct({ ...props.product })
    }, [props.product])


    function handleChange(event) {

        const { name, value } = event.target


        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }
    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
        })
    }


    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        ></ProductDetail>
    )

}


export function getProductById(products, productId) {
    let product = products.find(product => product.id == productId) || null;
    return product;
}


function mapStateToProps(state, ownProps) {

    const productId = ownProps.match.params.productId;
    const product = productId && state.productListReducer.length > 0 ?
        getProductById(state.productListReducer, productId) : {}

    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}


const mapDispatchToProps = {
    getCategories, saveProduct
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
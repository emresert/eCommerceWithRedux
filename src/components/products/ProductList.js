import React, { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import {Table, Button} from "reactstrap"

import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"

import alertify from "alertifyjs"



class ProductList extends Component {
    componentDidMount(){
    this.props.actions.getProducts();
    }
    
    state = {
        isVisible:{display:"none"}
    }

    addToCart = (product) =>{

        this.props.actions.addToCart({quantity:1,product})

        alertify.success(product.productName+" added to Cart")
    }

    render() {
        return (
            <div>
                <h6 style={this.props.currentCategory.categoryName?null:this.state.isVisible}>
                {this.props.currentCategory.categoryName} <span style={{fontSize:"13px",fontWeight:"600"}}>is listing.</span> </h6>

                <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity Per Unit</th>
          <th>Unit Price</th>
          <th>Unit in Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {this.props.products.map(pro=>(
        <tr key={pro.id}>
          <th scope="row">{pro.id}</th>
          <td>{pro.productName}</td>
          <td>{pro.quantityPerUnit}</td>
          <td>{pro.unitPrice}</td>
          <td>{pro.unitsInStock}</td>
          <td>
              <Button color="primary" onClick={()=>this.addToCart(pro)}>Add</Button>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products:state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart : bindActionCreators(cartActions.addToCart,dispatch)
           
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
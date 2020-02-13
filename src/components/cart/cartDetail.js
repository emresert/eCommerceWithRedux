import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import { Table, Button } from "reactstrap"
import alertify from "alertifyjs"
class cartDetail extends Component {

removeFromCart = (product)=>{
    this.props.actions.removeItemFromCart(product)
    alertify.error(product.productName+" removed from Cart")
}

    render() {
        return (
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.product.unitPrice}</td>

                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>Add</Button>
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
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeItemFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(cartDetail)

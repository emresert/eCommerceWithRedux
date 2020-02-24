import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs";

class cartSummary extends Component {

  
    cropItem = (item) =>{
       var clearItem = item.substring(0, 14);
       clearItem = clearItem+"... "
       return clearItem
    }

    removeItemFromCart = (product)=>{
        this.props.actions.removeItemFromCart(product);
        alertify.error(product.productName+ " removed!")
    }
    
    renderEmpty() {
        return (
            <NavItem>
                <NavLink >
                    Empty Cart
           </NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color:"white"}}>
                    Your Cart
                </DropdownToggle >
                <DropdownMenu right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id} >
                            <Badge onClick={()=>this.removeItemFromCart(cartItem.product)} style={{borderRadius:"50%",float:"right",marginTop:"4px"}} color="danger">X</Badge>
                            <Badge color="success"  style={{borderRadius:"50%",float:"left",marginTop:"4px"}}>{cartItem.quantity} </Badge>&nbsp;
                         <span style={{marginRight:"35px"}}>{cartItem.product.productName.length>15?this.cropItem(cartItem.product.productName): cartItem.product.productName}</span>
                                            
                        </DropdownItem>
                    ))}


                    <DropdownItem divider />
                    <DropdownItem>
                      <Link style={{textDecoration:"none"}} to={"/cart"}> Go to Cart</Link> 
                        </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )

    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            removeItemFromCart : bindActionCreators(cartActions.removeFromCart,dispatch)
        } 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cartSummary)
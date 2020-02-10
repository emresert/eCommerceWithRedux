import React, { Component } from 'react'
import CartSummary from "../cart/cartSummary"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


export default class Navi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar style={{backgroundColor:"#ff8d01",color:"white"}}  expand="md">
                    <NavbarBrand >e-commerce</NavbarBrand>
                    <NavbarToggler  />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem >
                                <NavLink >Cart Item </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >
                                 Form Demo   
                                </NavLink>
                            </NavItem>
                            <CartSummary></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
import React, { Component } from 'react'
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">e-commerce</NavbarBrand>
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
                          
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
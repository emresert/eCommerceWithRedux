import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class cartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Your Cart
                </DropdownToggle >
                    <DropdownMenu right>
       
                        
                            <DropdownItem >
                                Option
                            </DropdownItem>
                            <DropdownItem >
                                Option
                            </DropdownItem>
                      
                        <DropdownItem divider />
                        <DropdownItem>
                        Quit
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}

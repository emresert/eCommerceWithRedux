import React, { Component } from 'react'
import {connect} from "react-redux"


class ProductList extends Component {
    state = {
        isVisible:{display:"none"}
    }
    render() {
        return (
            <div>
                <h6 className="mt-4" style={this.props.currentCategory.categoryName?null:this.state.isVisible}>
                {this.props.currentCategory.categoryName} <span style={{fontSize:"13px",fontWeight:"600"}}>is listing.</span> </h6>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer
    }
}


export default connect(mapStateToProps)(ProductList)
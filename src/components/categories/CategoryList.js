
import React, { Component } from 'react'


import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component {

    componentDidMount() {

        this.props.actions.getCategories();

    }
    render() {
        return (
            <div>
                <ListGroup>
                    {this.props.categories.map(cat => (
                        <ListGroupItem onClick={()=>this.props.actions.changeCategory(cat)} key={cat.id}>{cat.categoryName}</ListGroupItem>
                        ))}
                </ListGroup>
                    <h3>{this.props.currentCategory.categoryName}</h3>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory : bindActionCreators(categoryActions.changeCategory,dispatch)
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

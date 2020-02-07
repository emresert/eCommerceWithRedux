
import React, { Component } from 'react'


import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions"
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component {

    componentDidMount() {

        this.props.actions.getCategories();
    }
    selectedCategory = (category) =>{
        console.log(category.id)
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }
    render() {
        return (
            <div>
                <ListGroup className="mt-2" >
                   
                        <ListGroupItem style={{backgroundColor:"aliceblue", fontWeight:"bolder",textAlign:"center"}}>
                            Categories
                        </ListGroupItem>
                
                </ListGroup>
                <ListGroup >
                    {this.props.categories.map(cat => (
                        <ListGroupItem
                            style={{fontSize:"14px", textAlign:"center",cursor:"pointer"}}
                            active={this.props.currentCategory.id === cat.id ? true : null}
                            onClick={() => this.selectedCategory(cat)} key={cat.id}>{cat.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
                
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
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

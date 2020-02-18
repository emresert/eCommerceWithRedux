import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navi/Navi'
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import cartDetail from "../cart/cartDetail"
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';

function App() {
  return (
    <Container>
      <Navi>
      </Navi>
      <Switch>
       
        <Route path="/product" component={Dashboard}></Route>
        <Route path="/cart" component={cartDetail}></Route>

        {/* Verilen route bir parametre aldığında devreye girecek */}
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}></Route>
        
        <Route path="/" component={Dashboard}></Route>
        
      </Switch>
    </Container>
  );
}

export default App;

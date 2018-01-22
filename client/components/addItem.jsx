import React, {Component} from 'react';
import { Tab, Grid, Form, Button, Menu, Image, Icon,Dropdown,Input,Label} from "semantic-ui-react";

import SwipeableViews from 'react-swipeable-views';
import {HashRouter, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addItemReducer from './../../redux/actions/newItem.js';
import addNewTempItem from './../../redux/actions/addNewTempItem.js'

var array = [];

class Additem extends Component {
  constructor() {
    super();
this.state={
    cost:0,
    description:'',
    quantity:0,
    item:'',
    itemArray:[],
    activeItem:'New Item',
    index:0,
    options: [
      {
        key: 'shoes',
        text: 'Shoes',
        value: 'Shoes'
      }, {
        key: 'tshirt',
        text: 'T-Shirts',
        value: 'T-Shirts'
      }, {
        key: 'slippers',
        text: 'Slippers',
        value: 'Slippers'
      }, {
        key: 'tackPants',
        text: 'Track Pants',
        value: 'Track Pants'
      }, {
        key: 'bags',
        text: 'Bags',
        value: 'Bags'
      }
    ]
}
  }

handleProducts(e,{value})
{
  this.setState({item:value});
  console.log('on change', this.state.item);
  if(value == 'T-Shirts' && value == 'T-Shirts')
    this.setState({description:'Men’s Tech Stretch Long-Sleeve T-Shirt',cost:70})
  else
  if(value == 'Track Pants' && value == 'Track Pants')
    this.setState({description:'Running Pants',cost:100})
    else
      if(value == 'Slippers' && value == 'Slippers')
      this.setState({description:'Ragg Slipper',cost:70})
      else if(value == 'Bags' && value == 'Bags')
      this.setState({description:'Leather Bags',cost:100})
  else
  this.setState({description:'Casual shoes',cost:150})
}
handleItemClick(e,{name}){
  if(name=='New Item')
  this.setState({index:0,activeItem:name})
}

handleQuantity(e)
{
  this.setState({quantity:e.target.value})
}

handleAddItem()
{
  console.log('hiiiiiiiiii');
  var item = {
    supplier:this.props.match.params.supplier,
    itemNumber:this.state.item,
    cost:this.state.cost,
    quantity:this.state.quantity,
    totalCost:this.state.quantity*this.state.cost
  }
  this.props.addNewItem(item)

}

 render() {
   const { activeItem } = this.state
    return (
      <Grid padded>
          <Grid.Row/>
        <Grid.Row><Grid.Column width={16}><Image as={Link} to='/' src='./../../images/logo.jpg'/>
      </Grid.Column></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Menu pointing secondary>
          <Menu.Item name='New Item' active={activeItem === 'New Item'} onClick={this.handleItemClick.bind(this)} />
        </Menu>
        <SwipeableViews index={this.state.index} disabled>
    <div>
      <Form>
      <Form.Field>
      <label style={{color:'#B71236'}}>Item Name</label>
      <Dropdown placeholder='Item Name' fluid  selection options={this.state.options} onChange={this.handleProducts.bind(this)}/>
          </Form.Field>
           <Form.Field>
             <label style={{color:'#B71236'}}>Item Description</label>
             <label>{this.state.description}</label>
           </Form.Field>
         <Form.Field>
             <label style={{color:'#B71236'}}>Unit Cost</label>
             <label>${this.state.cost}</label>
           </Form.Field>
          <Form.Field>
            <label style={{color:'#B71236'}}>Quantity</label>
            <input placeholder='Quantity' onChange={this.handleQuantity.bind(this)}/>
           </Form.Field>
           <Button as={Link} to={'/createPO/'+this.props.match.params.poId} fluid type='submit' positive style={{color:'white',borderRadius: '15px',marginTop:'20%'}} onClick={this.handleAddItem.bind(this)}>Add Item</Button>
           <Link to={'/createPO/'+this.props.match.params.poId}><Button negative fluid type='submit' inverted style={{borderRadius: '15px',marginTop:'2%'}}>Cancel</Button>

        </Link></Form>
    </div>

  </SwipeableViews>
        </Grid.Column>
        <Grid.Column width={1}/>
        </Grid.Row>
</Grid>
    );
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addItemReducer: addItemReducer,
    addNewItem:addNewTempItem
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Additem);

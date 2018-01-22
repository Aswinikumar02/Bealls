import React from 'react';
import { Button, Image, List,Icon,Radio,Modal,Header } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import removeItem from './../../redux/actions/removeItem.js'

class POList extends React.Component
{
  constructor()
  {
    super();
    this.state={open:false,index:0}
  }

  handleModal(index)
  {
    this.setState({index:index,open:true})
  }

  handleDelete()
  {
    this.setState({open:false});
    this.props.handleremoveItem(this.state.index);
  }

  render()
  {
    console.log(this.props.dataState.tempItemArray);
    return(
      <div>
          <List verticalAlign='middle'>
            {this.props.dataState.tempItemArray.map((item,key)=>{
              return(
                <List.Item style={{marginBottom:'5px'}} key={key}>
                  <List.Content floated='right'>
                    <Button icon circular inverted style={{backgroundColor:'#b70b2d'}} onClick={this.handleModal.bind(this,key)}><Icon name="close" /></Button>
                  </List.Content>
                  <Image avatar src='https://i.vimeocdn.com/portrait/6462071_300x300' style={{borderRadius:'50px'}}/>
                  <List.Content>
                  <List.Header>
                  <List divided horizontal>
                    <List.Item >{item.itemNumber}</List.Item>
                    <List.Item >Cost : ${item.cost}</List.Item>
                    <List.Item >Quantity : {item.quantity}</List.Item>
                  </List>
                  </List.Header>
                  <List.Description>{item.supplier +" | PO Id"+this.props.poId}</List.Description>
                  </List.Content>
                </List.Item>
              )
            })}

          </List>
          <Modal open={this.state.open} basic size='small'>
            <Header icon='remove' content='Are you sure you want to delete this item?' />
            <Modal.Actions>
              <Button basic color='red' inverted onClick={()=>{this.setState({open:false})}}>
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={this.handleDelete.bind(this)}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleremoveItem: removeItem,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(POList);

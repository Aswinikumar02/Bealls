import React, {Component} from 'react';
import { Modal,Button,Grid, Header} from "semantic-ui-react";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addItemReducer from './../../redux/actions/newItem.js';

import {HashRouter, Route, Link} from 'react-router-dom';


class Submitmodal extends Component {
  constructor() {
    super();
    this.state={
      open:true
    }
  }

handleclose(){
  this.setState({ open: false })
  this.props.addItemReducer(this.props.item)
}
 render() {
console.log('inside modal',this.props.successmsg);
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
      <Modal basic open={this.state.open}>
                <Modal.Content>
                  <Header as='h3' inverted>{this.props.successmsg}</Header>
                </Modal.Content>
                <Modal.Actions>
                  <Button as={Link} to='/' negative onClick={this.handleclose.bind(this)}>
                    Ok
                  </Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
            <Grid.Column width={2}/>
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
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Submitmodal);

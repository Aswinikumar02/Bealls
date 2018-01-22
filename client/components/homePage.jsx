import React, {Component} from 'react';
import { Container, Grid, Image, Button, Radio} from "semantic-ui-react";
import Popage from './../views/createPO.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import handleDataToggle from './../../redux/actions/dataToggle.js'


class Homepage extends Component {
  constructor() {
    super();
    this.state={
      poId:''
    }

  }

  componentDidMount()
  {
    this.setState({poId:Math.floor(1000 + Math.random() * 900000)})
  }

 render() {
    return (
      <div style={{marginTop:'10%'}}>
        <Grid>
          <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <center>
                <Image src='./../../images/logo.jpg'/>
              </center>
              </Grid.Column>
              <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={9}/>
            <Grid.Column width={3}>

              <Radio toggle label='Data' checked={this.props.dataState.toggleState} style={{
              color: '#7af442',
              marginBottom: '15px'
            }} onChange={this.props.handleDataToggle}/>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row />
          <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <center>
                <Button as={Link} to={'/createPO/'+this.state.poId} size='massive' style={{backgroundColor:'#B71236',color:'white',width:'100%',height:'80px',boxShadow: '0px 6px 0px #B71236, 0px 3px 15px rgba(0,0,0,.4)'}}>Create New Buy</Button>
              </center>
              </Grid.Column>
              <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row />
          <Grid.Row />
          <Grid.Row>
              <Grid.Column width={2} />
              <Grid.Column width={12}>
                <center>
                  <Button as={Link} to='/summary' size='massive' style={{backgroundColor:'#B71236',color:'white',width:'100%',height:'80px',boxShadow: '0px 6px 0px #B71236, 0px 3px 15px rgba(0,0,0,.4)'}}>View Previous Buys</Button>
              </center>
              </Grid.Column>
              <Grid.Column width={2} />
          </Grid.Row>


        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDataToggle: handleDataToggle,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Homepage);

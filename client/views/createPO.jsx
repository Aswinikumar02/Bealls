import React from 'react';
import { Radio,Grid, Image,Form,Dropdown,TextArea,Button,Icon,Segment } from 'semantic-ui-react';


import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import POList from './../components/poList.jsx';

import handleDataToggle from './../../redux/actions/dataToggle.js'
import Submitmodal from './../components/submitModal.jsx';

import addItemReducer from './../../redux/actions/newItem.js';
import cancelPO from './../../redux/actions/cancelPO.js'

class CreatePO extends React.Component {

  constructor() {
    super();
    this.state = {
      supplier:'Nike',
      options: [
        {
          key: 'nike',
          text: 'Nike',
          value: 'Nike'
        }, {
          key: 'adidas',
          text: 'Adidas',
          value: 'Adidas'
        }, {
          key: 'puma',
          text: 'Puma',
          value: 'Puma'
        }, {
          key: 'ucb',
          text: 'United color of benetton',
          value: 'United color of benetton'
        }, {
          key: 'redtape',
          text: 'Red Tape',
          value: 'Red Tape'
        }
      ],
      submitmsg:false,
      poId:'',
      item:''
    }
  }


  handleSuplier(e,{value})
  {
    this.setState({supplier:value,poId:this.props.match.params.poId})
  }

submitmodal(){
  var status = this.props.dataState.toggleState ? 'submitted' : 'saved'
  var item = {
    poId:this.props.match.params.poId,
    items:this.props.dataState.tempItemArray,
    status:status
  };
  this.setState({submitmsg:true})
  var msg = this.props.dataState.toggleState ? 'Your PO has been submitted successfully' : 'Your PO is saved and it will be submitted once your internet connectivity is switched on'
  this.setState({successmsg:msg,item:item})

}
  render() {
    console.log(this.props.dataState);
    return (<div>
      {this.state.submitmsg ? <Submitmodal successmsg={this.state.successmsg} item={this.state.item}/> : null}
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image as={Link} to='/' src='./../../images/logo.jpg'/>
          </Grid.Column>
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
        <Grid.Row>
          <Grid.Column width={16}>
            <Form>
              <Form.Field style={{marginBottom:'20px'}}>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">PO Id</span>
                </label>
                <label>{this.props.match.params.poId}</label>
              </Form.Field>
              <Form.Field>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">Brands</span>
                </label>
                <Dropdown placeholder='Select a Brand' fluid  selection options={this.state.options} onChange={this.handleSuplier.bind(this)}/>
              </Form.Field>
              <Form.Field>
                <label style={{
                    color: '#d83656',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  <span className="fontStyle">PO Notes</span>
                </label>
                <TextArea placeholder='Tell us more' style={{
                    minHeight: 100
                  }}/>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}/>
          <Grid.Column width={8}><center>
            <Button as={Link} to={'/addItem/'+this.state.supplier+'/'+this.props.match.params.poId} inverted style={{
                backgroundColor: '#d83656'
              }} >
              <Icon name='plus'/>Add Item
            </Button>
          </center>
          </Grid.Column>
          <Grid.Column width={4}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <POList poId={this.props.match.params.poId}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Button fluid inverted style={{
                backgroundColor: '#b70b2d',
                borderRadius: '15px'
              }} onClick={this.submitmodal.bind(this)}>
              Submit PO
            </Button>
            <Button as={Link} to='/' fluid color='yellow' style={{
                borderRadius: '15px',
                marginTop: '5px'
              }} onClick={()=>this.props.cancelPO()}>
              Cancel PO
            </Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>);
  }
}

function mapStateToProps(state) {
  return {dataState: state.poReducer}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleDataToggle: handleDataToggle,
    addItemReducer: addItemReducer,
    cancelPO:cancelPO
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreatePO);

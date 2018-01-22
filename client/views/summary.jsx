import React from 'react'
import {Icon,Grid, Image,Form,Dropdown,TextArea,Button,Card,Header,Label, Radio } from 'semantic-ui-react';

import {HashRouter, Route, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import handleDataToggle from './../../redux/actions/dataToggle.js'
class Summary extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    var d = new Date();
    return(
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Image as={Link} to='/' src='./../../images/logo.jpg' />
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
          {this.props.dataState.itemArray.map((item,key)=>{
            var totalCost=0,totalCount=0
            item.items.map((list,index)=>{
              totalCost += list.totalCost;
              totalCount += parseInt(list.quantity);
            })
            return(
              <Card fluid color='red' key={key}>
                <Card.Content>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Header as='h4'><span className="fontStyle">Supplier:{item.items[0].supplier}</span></Header>
                          <Header as='h5' style={{color:'#d83656'}}>Total Cost: ${totalCost}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Total Qty: {totalCount}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Item Count: {item.items.length}</Header>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Header as='h4'><span className="fontStyle">PO#:{item.poId}</span></Header>
                          <Header as='h5' style={{color:'#d83656'}}>Status: PO {item.status}</Header>
                          <Header as='h5' style={{color:'#d83656'}}>Submit Date: {d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()}</Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Content>
              </Card>
            )
          })}

          </Grid.Column>
        </Grid.Row>


      </Grid>
    )
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
export default connect(mapStateToProps, matchDispatchToProps)(Summary);

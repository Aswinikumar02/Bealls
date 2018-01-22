module.exports = (state={
  toggleState:false,
  itemArray:[],
  tempItemArray:[]
},action)=>{
  switch(action.type){
  case "toggle":
    if(state.toggleState == false)
    {
    return {
      toggleState:!state.toggleState,
      itemArray:state.itemArray.map((item)=>{
        item.status = 'submitted';
        return item
      }),
      tempItemArray:state.tempItemArray
    }
  }
  else {
    return {
      toggleState:!state.toggleState,
      itemArray:state.itemArray,
      tempItemArray:state.tempItemArray

    }
  }
  break;
  case "addItem":
    var temp = [];
    temp = state.itemArray;
    temp.push(action.item);
    state.itemAr = action.item
    return{
      toggleState:state.toggleState,
      itemArray:temp,
      tempItemArray:[]
    }
    break;
  case "remove":
  return{
    toggleState:state.toggleState,
    itemArray:state.itemArray,
    tempItemArray:state.tempItemArray.filter((item,index)=>{
      if(index !== action.index)
        return item
    })
  }
  break;
  case "addNewTempItem":
    var temp = [];
    temp = state.tempItemArray;
    temp.push(action.tempItem);
    return{
      toggleState:state.toggleState,
      itemArray:state.itemArray,
      tempItemArray:temp
    }
  break;
  case "cancel":
    return{
      toggleState:state.toggleState,
      itemArray:state.itemArray,
      tempItemArray:[]
    }
    break;
  }
  return state;
}

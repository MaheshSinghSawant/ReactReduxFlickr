import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageGrid extends Component{



  getImages(){
    return this.props.picsData.map((pic)=>{
      return(
        <div className='img' key={pic.id}><img src={"http://farm"+ pic.farm +".static.flickr.com/"+ pic.server +"/"+ pic.id +"_"+ pic.secret +"_m.jpg"} /></div>
      );
    });
  }

  render(){

    if(!(this.props.picsData)){
      return(<h1>type</h1>);
    }

    else{
      return(
        <div className='img-grid'>
        {this.getImages()}
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return ({picsData:state.picsData});
}
export default connect(mapStateToProps)(ImageGrid);

import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageGrid extends Component{



  getImages(){
    return this.props.picsData.map((pic)=>{
      return(
        <div className='Grid-cell u-size1of3' key={pic.id}><img onClick={()=>console.log(pic.id)} src={"http://farm"+ pic.farm +".static.flickr.com/"+ pic.server +"/"+ pic.id +"_"+ pic.secret +"_m.jpg"} /></div>
      );
    });
  }

  render(){

    if(!(this.props.picsData)){
      return(<h1>type</h1>);
    }

    else{
      return(
        <div className='Grid Grid--fit Grid--withGutter'>
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

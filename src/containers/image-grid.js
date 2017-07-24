import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LightBox from 'react-images';


class ImageGrid extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLightBoxOpen: false,
      images: []
    }
  }

  getImages(){
    return this.props.picsData.map((pic)=>{
      return(
        <div className='Grid-cell u-size1of3 u-sizeFit' key={pic.id}><img className='u-sizeFit' style={{height: '250px', width:'250px'}}
        onClick={()=>this.handleImageClick("http://farm"+ pic.farm +".static.flickr.com/"+ pic.server +"/"+ pic.id +"_"+ pic.secret +"_m.jpg")}
        src={"http://farm"+ pic.farm +".static.flickr.com/"+ pic.server +"/"+ pic.id +"_"+ pic.secret +"_m.jpg"} /></div>
      );
    });
  }

  handleImageClick(url){

    const largeurlmod = url.substring(0, url.length-6);
    const finalurl = largeurlmod + '.jpg';
    console.log(finalurl);
    this.setState({images: [{src: finalurl}]});
    this.setState({isLightBoxOpen: !this.state.isLightBoxOpen});
  }

  render(){

    if(!(this.props.picsData)){
      return(<h1>type</h1>);
    }

    else{
      return(
        <div className='Grid Grid--fit Grid--withGutter Grid--alignCente'>
        {this.getImages()}
        <LightBox images={this.state.images}
        isOpen = {this.state.isLightBoxOpen}
        backdropClosesModal = {true}
        onClose = {() => {this.setState({isLightBoxOpen:!this.state.isLightBoxOpen})}}
        />
        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return ({picsData:state.picsData});
}

export default connect(mapStateToProps)(ImageGrid);

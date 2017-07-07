import React,{ Component } from 'react';
import './banner.css';
class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {
          bannerData:{},
          banner:[],
          bannerLength:0
        };
    }
    componentWillMount (){
    }
    componentWillReceiveProps(nextProps){
        if( nextProps.banner.length > 1 ){
          this.setState({bannerData:nextProps});
          this.showBanner(nextProps)
          this.autoPlay(nextProps)
        }
    }
    showBanner(nowProps){
        let bannerDiv = this.refs.bannerDiv;
        bannerDiv.style.width = nowProps.banner.length * nowProps.ImgWidth + nowProps.unit;
        this.setState({
            banner:nowProps.banner,
            bannerLength:nowProps.banner.length
        })
    }
    autoPlay(nowProps){
        let bannerDiv = this.refs.bannerDiv;
        let Length = nowProps.banner.length;
        let index = 1;
        let playNumber = setInterval( ()=>{
            if( index ===  Length){
                bannerDiv.style.transform = 'translateX(0%)';
                index = 1;
            }else{
                bannerDiv.style.transform = 'translateX('+(-100/Length*index)+'%)';
                index++;
            }
            bannerDiv.setAttribute('index',index);
        }, 5000 );
        bannerDiv.setAttribute('playNumber',playNumber);
    }
    stopPlay(){
      let bannerDiv = this.refs.bannerDiv;
      clearInterval(bannerDiv.getAttribute('playNumber'));
    }
    render(){
        return (
            <div className="banner" ref="bannerDiv">
                {
                  this.state.banner.map((v, i)=>{
                    return (
                      <a style={{width: 100/this.state.bannerLength+'%'}} key={i} href={v.url}>
                        <img src={v.pic+'@750w_235h.webp'} alt={v.name}/>
                      </a>
                    );
                  })
                }
            </div>
        );
    }
}

export default Banner;

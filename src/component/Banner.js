import React,{ Component } from 'react';

class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {
            banner:[]
        };
    }
    componentWillMount (){
    }
    componentWillReceiveProps(nextProps){
        this.showBanner(nextProps)
        this.autoPlay(nextProps)
    }
    showBanner(nowProps){
        let arr = [];
        let bannerData = nowProps.banner;
        let Length = nowProps.banner.length;
        let ImgWidth = nowProps.ImgWidth;
        let bannerDiv = this.refs.bannerDiv;
        bannerDiv.style.width = Length*ImgWidth+nowProps.unit;
        for( let i =0; i< bannerData.length;i++){
            arr.push(
                <a style={{width: 100/Length+'%'}} key={i} href={bannerData[i].url}>
                    <img src={bannerData[i].pic} alt={bannerData[i].name}/>
                </a>
            );
        }
        this.setState({
            banner:arr
        })
    }
    autoPlay(nowProps){
        let bannerDiv = this.refs.bannerDiv;
        let Length = nowProps.banner.length;
        let index = 1;
        setInterval( ()=>{
            if( index ===  Length){
                bannerDiv.style.transform = 'translateX(0%)';
                index = 1;
            }else{
                bannerDiv.style.transform = 'translateX('+(-100/Length*index)+'%)';
                index++;
            }
        }, 5000 );
        
    }
    render(){
        return (
            <div className="banner" ref="bannerDiv">
                {this.state.banner}
            </div>
        );
    }
}

export default Banner;
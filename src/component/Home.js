import React,{Component} from 'react';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import Nav from './Nav';
import Banner from './Banner';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            AllHot:[],
            banner:[]
        };
    }
    componentWillMount (){
        this.getBannerData();
        this.getAllHot();
    }
    getBannerData(){
        fetchJsonp('http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695')
        .then( (response) => {
            return response.json()
        }).then( (json) => {
            let bannerData = json.data;
            this.setState({banner:bannerData});
        }).catch( (ex) => {
            console.log('parsing failed', ex)
        })
    }
    getAllHot(){
        axios.get('/index/ranking-3day.json')
        .then( (response) => {
            let AllHotData = response.data.recommend.list;
            let arr = [];
            for(let v in AllHotData){
                AllHotData[v].play = this.MoreThanThousand(AllHotData[v].play);
                AllHotData[v].video_review = this.MoreThanThousand(AllHotData[v].video_review);
                arr.push(AllHotData[v]);
            }
            arr = arr.splice(0,4);
            this.setState({AllHot:arr});
        }).catch( (ex) => {
            console.log('parsing failed', ex)
        })
    }
    MoreThanThousand(val){
        if( Number(val) >= 10000){
            return (val/10000).toFixed(1)+'万';
        }else{
            return val;
        }
    }
    render() {
        return(
            <div className="warp">
                <header className="header">
                    <a className="logo l" href="/">
                        <img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""/>
                    </a>
                    <div className="r">
                        <a href="/search" className="search">
                            <svg>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-sousuo">
                                </use>
                            </svg>
                    </a>
                        <a className="userPic" href="/user">
                            <img src="http://i1.hdslb.com/bfs/face/9c52da8de07005c15f7c401bf62ca5a6afc51f41.jpg" alt=""/>
                        </a>
                        <a href="/#" className="downloadApp">下载客户端</a>
                    </div>
                </header>
                <Nav/>
                <Banner banner={this.state.banner} ImgWidth={'100'} unit={'%'} />
                <dl className="listDiv">
                    <dt>
                        <p className="title">
                            <svg className="hotIcon">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-bianjituijian">
                                </use>
                            </svg>
                            <span>热门推荐</span>
                        </p>
                        <a className="more" href="/list">
                            <svg className="topIcon">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-paihangbang1" ></use>
                            </svg>
                            <span className="top">排行榜</span>
                            <svg className="arrowIcon">
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-gengduo">
                                </use>
                            </svg>
                        </a>
                    </dt>
                    <dd>
                        {
                            this.state.AllHot.map( (v,i)=>{
                                return(
                                    <a key={i} href={'/video/av'+v.aid}>
                                        <div className="pic">
                                            <img src={v.pic} alt=""/>
                                            <div className="fixed">
                                                <p className="play">
                                                    <svg>
                                                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-bofangshu"></use>
                                                    </svg>
                                                    <span>{v.play}</span>
                                                </p>
                                                <p className="video_review">
                                                    <svg ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-danmushu" ></use>
                                                    </svg>
                                                    <span>{v.video_review}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="title">{v.title}</p>
                                    </a>
                                );
                            })
                        }
                    </dd>
                </dl>
            </div>
        );
    }
}
export default Home;
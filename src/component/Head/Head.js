import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './head.css';
class Head extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <header className="header">
                <Link className="logo l" to="/">
                    <img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" alt=""/>
                </Link>
                <div className="r">
                    <Link to="/search" className="search">
                        <svg>
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-sousuo">
                            </use>
                        </svg>
                </Link>
                    <Link className="userPic" to="/user">
                        <img src="http://i1.hdslb.com/bfs/face/9c52da8de07005c15f7c401bf62ca5a6afc51f41.jpg" alt=""/>
                    </Link>
                    <Link to="/#" className="downloadApp">下载客户端</Link>
                </div>
            </header>
        );
    }
}

export default Head;
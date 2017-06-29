import React,{Component} from 'react';
class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            navStaus:'',
            navData:[
                {title:'首页',href:'/',cls:'active'},
                {title:'动画',href:'/channel/1'},
                {title:'番剧',href:'/channel/2'},
                {title:'国创',href:'/channel/3'},
                {title:'音乐',href:'/channel/4'},
                {title:'舞蹈',href:'/channel/5'},
                {title:'科技',href:'/channel/6'},
                {title:'游戏',href:'/channel/7'},
                {title:'娱乐',href:'/channel/8'},
                {title:'鬼畜',href:'/channel/9'},
                {title:'电影',href:'/channel/10'},
                {title:'电视剧',href:'/channel/11',cls:'bigTitle'},
                {title:'生活',href:'/channel/12'},
                {title:'时尚',href:'/channel/13'},
                {title:'广告',href:'/channel/14'},
                {title:'直播',href:'/channel/15'}
            ]
        }
    }
    
    fill (){
        let j = 6 - this.state.navData.length % 6;
        let arr = [];
        for(let i=0;i<j;i++){
            arr.push(<a key={i} className='hidden'><p>&nbsp;</p></a>)
        }
        return arr;
    }
    changeNavStatus (status){
        this.setState({
            navStaus:status
        })
    }
    render(){
        return(
            <div className={"navAll "+ this.state.navStaus}>
                <nav className="nav">
                    {
                        this.state.navData.map((v,i)=>{
                            return (
                                <a  className={v.cls||''} 
                                    href={v.href} 
                                    key={i} 
                                >
                                    <p>{v.title}</p>
                                </a>
                            );
                        })
                    }
                    {this.fill()}
                </nav>
                <div className="popDown" onClick={this.changeNavStatus.bind(this,'up')}>
                    <svg>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-shouqixiao" ></use>
                    </svg>
                </div>
                <div className="popUp" onClick={this.changeNavStatus.bind(this,'down')}>
                    <svg>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-xialaxiao">
                        </use>
                    </svg>
                </div>
            </div>
        );
    }
}
export default Nav;
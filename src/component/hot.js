import React,{ Component } from 'react';
class Hot extends Component {
  constructor(this.props.) {
    super(props);
  }
  render() {
    return (
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

    );
  }
}

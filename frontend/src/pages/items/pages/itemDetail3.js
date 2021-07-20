import React from 'react'
// import "../assets/css/bootstrap.min.css"
import "./itemDetail3.css"
import itemImage from '../img/504.jpg'
import itemImage1 from '../img/5042.jpg'
import itemImage2 from '../img/5043.jpg'
import leftImage from '../img/left.png'
import rightImage from '../img/right.png'
import titleBoxImage from '../img/title-box.png'
import heartImage from '../img/heart.png'
import cartImage from '../img/cart.png'
import btnFavImage from '../img/btn-fav.png'
import ItemCard from "../components/itemCards/ItemCard"
import { item1, item2, item3, item4, item5, item6, item7, item8 } from "../components/itemCards/itemData1"

const midImage = {
    width: '80px',
    margin: '5px'
};
const itemStyle = {
    width: '17rem',
    border: '0px'
}

const ItemDetail = (props) => {
    const {
    } = props
    return (
        <>
            <div className="itemDetail">
                <div className="container">
                    <div className="">
                        <div className="itemDetail-card-body row">
                            <div className="itemDetail-left text-center ">
                                <div className="itemDetailA mb-1">
                                    <img src={itemImage} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row ddd itemDetailB">
                                        <div>
                                            <img src={leftImage} style={{ marginTop: '33px', paddingRight: '5px' }} alt="" />
                                        </div>
                                        <div>
                                            <img src={itemImage} style={midImage} alt="" />
                                        </div>
                                        <div>
                                            <img src={itemImage1} style={midImage} alt="" />
                                        </div>
                                        <div>
                                            <img src={itemImage2} style={midImage} alt="" />
                                        </div>
                                        <div>
                                            <img src={itemImage1} style={midImage} alt="" />
                                        </div>
                                        <div>
                                            <img src={itemImage2} style={midImage} alt="" />
                                        </div>
                                        <div>
                                            <img src={rightImage} style={{ marginTop: '33px', paddingLeft: '5px' }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="">
                                    <div className="">
                                        <div className="divimg" id="img1"><img src={itemImage} className="bigimg3 active" alt="" /></div>
                                        <div className="divimg" id="img2"><img src={itemImage1} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img3"><img src={itemImage2} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img4"><img src={itemImage1} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img5"><img src={itemImage2} className="bigimg3" alt="" /></div>
                                    </div>
                                    <div className="smallgroup">
                                        <a href="#img"><img src={leftImage} style={{ marginTop: '6px', paddingRight: '10px' }} alt="" /></a>
                                        <a href="#img1"><img src={itemImage} className="smallimg" alt="" /></a>
                                        <a href="#img2"><img src={itemImage1} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img3"><img src={itemImage2} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img4"><img src={itemImage1} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img5"><img src={itemImage2} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img"><img src={rightImage} style={{ marginTop: '6px', paddingLeft: '10px' }} alt="" /></a>
                                    </div>
                                </div>
                            </div> */}
                            <div className="itemDetail-middle col-12 col-lg-6">
                                <div className="d-flex">
                                    <div className="info-title p-1">000003</div>
                                </div>
                                <div className=" d-flex">
                                    <div className="info-title p-1" style={{ fontSize: '32px' }}>504</div>
                                </div>
                                <div className="d-flex">
                                    <div className="info-title p-1">★本遊戲提供504種不同的玩法！</div>
                                </div>
                                <div className="d-flex cardA">
                                    <div className="card-text1 p-1">定價NT$2890</div>
                                </div>
                                <div className="d-flex">
                                    <div className="card-text2 p-1">特價NT$2650</div>
                                </div>
                                <div className="d-flex cardB">
                                    {/* <button className="btn1">-</button>
                                    <input type="text" className="input px-0" />
                                    <button className="btn2">+</button> */}
                                    <ul className="counter">
                                        <li id="minus" className="btn11"><input type="button" onclick="minuser()" value="-" className="button11" /></li>
                                        <li id="countnum" className="btn12">1</li>
                                        <li id="plus" className="btn13"><input type="button" onclick="adder()" value="+" className="button13" /></li>
                                    </ul>
                                    <button className="join ml-2">加入購物車</button>
                                </div>
                            </div>
                            <div className="itemDetail-right">
                                <img src={btnFavImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row itemcontent">
                    <p>本遊戲提供504種不同的玩法！<br />
                        九個不同的遊戲模組，造就504種不同的規則組合！<br />
                        每次遊戲請依序選擇三個不同的模組，第一個模組將決定你的獲勝方式，第二個模組決定你賺錢的方式，<br />
                        最後一個模組則勾勒遊戲的大致走向，這一共有9x8x7=504種組合！<br />
                        遊戲提供的九個模組為：物流–在城市之間奔走，運送貨物、競速–試圖先於你的對手達陣、特權–藉由不同特權獲取優勢、<br />
                        軍事–充滿衝突與戰爭的世界、探索–探索未知的世界、道路–建構你個人的交通網、多數–試著取得多數席次，進行區域控制、<br />
                        生產–成為貨物生產大王、股權–爭奪各股份有限公司的所有權。
                    </p>

                    <p>作者｜Friedemann Friese<br />
                        插畫｜Harald Lieske<br />
                        ★2013 德國年度玩家遊戲獎推薦<br />
                        ★2013 德國玩家票選最佳遊戲第一名<br />
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="">
                    <div className="thumbnail text-center">
                        <img src={titleBoxImage} alt="" />
                        <div className="caption">
                            <p className="">相似商品</p>
                        </div>
                    </div>
                </div>
                <div className="step1">
                    <div className="row step2">
                        <div className="pic"><a href="/item-detail5"><ItemCard step={item5} /></a></div>
                        <div className="pic"><a href="/item-detail6"><ItemCard step={item6} /></a></div>
                        <div className="pic"><a href="/item-detail7"><ItemCard step={item7} /></a></div>
                        <div className="pic"><a href="/item-detail8"><ItemCard step={item8} /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail

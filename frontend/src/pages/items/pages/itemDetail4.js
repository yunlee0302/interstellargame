import React from 'react'
// import "../assets/css/bootstrap.min.css"
import "./itemDetail4.css"
import itemImage from '../img/數字急轉彎.jpg'
import itemImage1 from '../img/數字急轉彎2.jpg'
import itemImage2 from '../img/數字急轉彎3.jpg'
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
                                    <div className="info-title p-1">000004</div>
                                </div>
                                <div className=" d-flex">
                                    <div className="info-title p-1" style={{ fontSize: '32px' }}>數字急轉彎</div>
                                </div>
                                <div className="d-flex">
                                    <div className="info-title p-1">★2011 美國遊戲雜誌獎最佳家庭遊戲入圍</div>
                                </div>
                                <div className="d-flex cardA">
                                    <div className="card-text1 p-1">定價NT$490</div>
                                </div>
                                <div className="d-flex">
                                    <div className="card-text2 p-1">特價NT$390</div>
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
                    <p>快速又有趣的數字運算！<br />

                        這遊戲和數1、2、3一樣簡單！<br />
                        玩家們要把牌堆最上面的紙牌加減1、2或3，如果手上有一樣數字的牌，就可以打出來。<br />
                        這聽起來很簡單，但是遊戲過程中可是全部的玩家同時搶著出牌，所以可以出的牌會一直改變，動作慢了點，可就沒得出囉！<br />
                        第一個將紙牌出完的人獲勝！<br />

                        建議搭配《7 DATE 9 數急字轉彎》獲得更多的樂趣！<br />
                    </p>

                    <p>作者｜Maureen Hiron<br />
                        插畫｜John Kovalic, Cathleen Quinn-Kinney<br />
                        ★2011 美國遊戲雜誌獎最佳家庭遊戲入圍<br />
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

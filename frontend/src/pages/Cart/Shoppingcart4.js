import React, { useState, useEffect } from 'react'
import './Shoppingcart4.css'
import itemphoto from './img/item1.png'
import launch from './img/launch.svg'
import pinkline from './img/pinkline.svg'
import axios from '../Cart/components/axios'

export default class Shoppingcart4 extends React.Component {
  constructor() {
    super()
    this.state = {
      data: false,
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const { match } = this.props
    if (match.params.id !== nextProps.match.params.id) {
      this.Id = nextProps.match.params.id
      this.getData()
    }
  }
  componentDidMount() {
    let url = 'http://localhost:6005/neworders/'
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp })
      })
    })
  }

  render() {
    const data = this.state.data
    console.warn(data)
    return (
      <div>
        {data ? (
          <div>
            <div className="cart4top m-5">
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
              <img
                className="pinkline"
                src={pinkline}
                alt=""
                width={200}
                height={100}
              />
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
              <img
                className="pinkline"
                src={pinkline}
                alt=""
                width={200}
                height={100}
              />
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="cart4top1 mb-5 ">
              <p2>購物明細</p2>
              <p2>付款資料</p2>
              <p2>訂單資訊</p2>
            </div>
            <div className="  cart4order1    p-3">
              <div className="cart4ordertitle ">
                <p>訂單資訊</p>
              </div>
            </div>
            <div className="cart4title1 ">
              <div className="cart4title2 ">
                <div className="m-4"><p>訂單編號：{data.orderId}</p></div>
                <div className=" frame pl-4 pt-4 ">
                  <p> 收件人：{data.orderName}</p>
                  <br></br>

                  <p> 電話：{data.orderMobile}</p>
                  <br></br>

                  <p> mail：{data.orderMail}</p>
                  <br></br>

                  <p> 地址：{data.orderAddress}</p>
                  <br></br>

                  <p>配送方式：{data.deliveryTypeId}</p>
                  <br></br>

                  <p> 付款方式：{data.paymentTypeId}</p>
                  <br></br>
                </div>
                <div className="m-3 ">
                  <br></br> <p>共2項商品</p>
                </div>
              </div>
            </div>
            <table className="cart4title3  ">
              <tbody>
                <tr className="cart4th ">
                  <th className="cart4th " width="120px" />
                  <th className="cart4th " width="200px">
                   <p>商品名稱</p> 
                  </th>
                  <th className="cart4th " width="200px">
                  <p>商品單價</p> 
                  </th>
                  <th className="cart4th " width="180px">
                  <p>商品數量</p> 
                  </th>
                  <th className="cart4th " width="200px">
                  <p>金額小計</p> 
                  </th>
                </tr>

                <tr>
                  <td height="150px" className="time">
                    {' '}
                    <img
                      className="itemphoto"
                      src={itemphoto}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>

                  <td className="time">
                    <p>大冒險超好玩</p>
                  </td>
                  <td className="time">
                    <p>NT$500</p>
                  </td>
                  <td className="time">
                    <p>50</p>
                  </td>
                  <td className="time">
                    <p>NT$500</p>
                  </td>
                </tr>
                <tr>
                  <td height="150px" className="time">
                    {' '}
                    <img
                      className="itemphoto"
                      src={itemphoto}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>

                  <td className="time">
                    <p>大冒險超好玩</p>
                  </td>
                  <td className="time">
                    <p>NT$500</p>
                  </td>
                  <td className="time">
                    <p>50</p>
                  </td>
                  <td className="time">
                    <p>NT$500</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="Shoppingcart4end  p-3 mb-5">
              <div className=" Shoppingcart4end1 pl-2 pt-5">
                <p>金額總計: NT$7000</p>
                <br />
                <p>運費金額: NT$60</p>
                <br />
                <p>優惠券折抵: -NT${data.voucherId}</p>
                <br />
                <div className="red">
                  <p>訂單金額: NT$700</p>
                </div>
              </div>
            </div>
            <div className="button1 pb-4">
              <button onClick={() => {}}>回首頁</button>
            </div>
          </div>
        ) : (
          <p>Please wat...</p>
        )}
      </div>
    )
  }
}

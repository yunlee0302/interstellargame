import React, { useState, useEffect } from 'react'
import './Shoppingcart4.css'
import launch from './img/launch.svg'
import pinkline from './img/pinkline.svg'
import { withRouter } from 'react-router-dom'
function Shoppingcart4(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [deliveryTypeId, setdeliveryTypeId] = useState('')
  const [paymentTypeId, setpaymentTypeId] = useState('')
  const [dataLoading, setDataLoading] = useState(false)
  const [orderName, setorderName] = useState('')
  const [orderId, setorderId] = useState('')
  const [orderMobile, setorderMobile] = useState('')
  const [orderMail, setorderMail] = useState('')
  const [orderAddress, setorderAddress] = useState('')
  const [voucherId, setvoucherId] = useState('')
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])
  async function getFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/neworders/'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data', data)
    // 設定資料
    setorderId(data.orderId)
    setdeliveryTypeId(data.deliveryTypeId)
    setpaymentTypeId(data.paymentTypeId)
    setorderName(data.orderName)
    setorderMobile(data.orderMobile)
    setorderMail(data.orderMail)
    setorderAddress(data.orderAddress)
    setvoucherId(data.voucherId)
  }

  useEffect(() => {
    getFromServer()
  }, [])

  const display = (
    <>
      <div className="orderpage">
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
        <div className="cart4top mb-5 mr-5">
          <p2 className="cartwhite">購物明細</p2>
          <p2 className="cartwhite">付款資料</p2>
          <p2 className="cartwhite">訂單資訊</p2>
        </div>
        <div className="  cart4order1    p-3">
          <div className="cart4ordertitle ">
            <p4 class="cartbold">訂單資訊</p4>
          </div>
        </div>
        <div className="cart4title1 ">
          <div className="cart4title2 cartp ">
            <div className="m-4 cartp">訂單編號：{orderId}</div>
            <div className=" frame  pl-4 pt-4  mb-3">
              <p> 收件人：{orderName}</p>
              <br></br>

              <p> 電話：{orderMobile}</p>
              <br></br>

              <p> mail：{orderMail}</p>
              <br></br>

              <p> 地址：{orderAddress}</p>
              <br></br>

              <p>配送方式：{deliveryTypeId}</p>
              <br></br>

              <p> 付款方式：{paymentTypeId}</p>
              <br></br>
            </div>
            <div>
              <br></br> <p className="cartp">共{mycart.length}項商品</p>
              <br></br>
            </div>
          </div>
        </div>
        <table className="cart4title3 cartp2  ">
          <tbody>
            <tr className="cart4th  ">
              <th width="" />
              <th width="200px">商品名稱</th>
              <th width="200px">商品單價</th>
              <th width="180px">商品數量</th>
              <th width="230px">金額小計</th>
            </tr>

            {mycart.map((item, index) => {
              return (
                <tr key={item.itemId}>
                  <td
                    id={item.itemId}
                    onClick={() => {
                      const cartList = [...mycart]
                      cartList.splice(index, 1)
                      setMycart(cartList)
                      localStorage.setItem('cart', JSON.stringify(cartList))
                    }}
                  ></td>

                  <td className="time pt-3 ">
                    <p> {item.name}</p>
                  </td>
                  <td className="time  pt-3">
                    <p>NT${item.price}</p>
                  </td>
                  <td className="time  pt-3">
                    <p>{item.amount}</p>
                  </td>
                  <td className="time  pt-3">
                    <p>NT${item.amount * item.price}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="Shoppingcart4end  p-3 mb-5">
          <div className=" Shoppingcart4end1 pl-2 pt-5 cartp3">
            <p>金額總計: NT$ {sum(mycart)}</p>
            <p>運費金額: NT$60</p>
            <p>優惠券折抵: -NT${voucherId}</p>
            <br />{' '}
            <div className="red">
              <p>訂單金額: NT$ {sum(mycart) + 60 - voucherId}</p>
            </div>
          </div>
        </div>
        <div className=" buttoncart1 pb-4">
          <a href="/homepage">
            <button
              className="btn homeP-btn items"
              onClick={() => {
                localStorage.removeItem('cart')
              }}
            >
              確認
            </button>
          </a>
        </div>
      </div>
    </>
  )
  return <>{display}</>
}
export default withRouter(Shoppingcart4)

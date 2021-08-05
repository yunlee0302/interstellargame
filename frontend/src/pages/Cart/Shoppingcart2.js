import React, { useState, useEffect } from 'react'
import './Shoppingcart1.css'
import { withRouter } from 'react-router-dom'
import './Shoppingcart2.css'
import grayline from './img/grayline.svg'
import launch from './img/launch.svg'
import launch2 from './img/launch2.svg'
function Shoppingcart2(props) {
  console.log(props)
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.itemId === mycart[i].itemId
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }
    console.log('商品有多少', mycart.length)

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])
  console.log(mycartDisplay)
  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.itemId === item.itemId)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  //計算購物車商品數量函式
  const itemsum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount
    }
    return total
  }

  //如果沒登入就結帳要跳到登入頁
  const userId = localStorage.getItem('userId')
  if (!userId) {
    props.history.push('/login')
  }
  // 刪除單一項目
  const updateCartRemove = (index) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(currentCart[index])

    const a = currentCart.filter((v, i) => {
      console.log(v)
      if (index !== i) {
        return v
      }
    })
    console.log(a)

    localStorage.setItem('cart', JSON.stringify(a))

    // 設定資料
    setMycart(a)
    // 更新購物車數量
    let total = 0
    for (let i = 0; i < a.length; i++) {
      total += a[i].amount
    }
    // updateCartNum()
  }

  // 計算總價
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 計算所有商品數量

  return (
    <>
      <div className="container">
        <div className="top m-5">
          <img src={launch} alt width={100} height={100} />

          <img src={grayline} alt width={200} height={100} />
          <img src={launch2} alt width={100} height={100} />
          <img src={grayline} alt width={200} height={100} />
          <img src={launch2} alt width={100} height={100} />
        </div>
        <div className="top1 mb-4 ">
          <p2 className="cartwhite">購物明細</p2>
          <p3 className="cartgray">付款資料</p3>
          <p3 className="cartgray">訂單資訊</p3>
        </div>
      </div>
      <div className="cart1title1 p-3 mt-5">
        <p4 class="cartbold ">購物明細</p4>
      </div>

      <table className="cart1title2 tablecart">
        <tbody>
          <tr>
            <th className="thcart " width="150px "></th>
            <th className="thcart " width="200x">
              商品名稱
            </th>
            <th className="thcart " width="200px">
              商品單價
            </th>
            <th className="thcart" width="220px">
              商品數量
            </th>
            <th className="thcart1" width="220px">
              金額小計
            </th>
          </tr>
          {mycart.map((item, index) => {
            return (
              <tr key={item.itemId}>
                <td
                  className="tdcart"
                  id={item.itemId}
                  onClick={() => {
                    const cartList = [...mycart]
                    cartList.splice(index, 1)
                    setMycart(cartList)
                    localStorage.setItem('cart', JSON.stringify(cartList))
                  }}
                ></td>

                {/* <td height="150px">
                  {' '}
                  <img
                    className="itemphoto"
                    src={itemphoto}
                    alt=""
                    width={100}
                    height={100}
                  />
                </td>  */}
                <td className="tdcart" height="130px">
                  {item.name}
                </td>
                <td className="tdcart2">{item.price}</td>
                <td className="tdcart2">{item.amount}</td>
                <td className="tdcart2"> NT${item.amount * item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="end  p-5 mb-5">
        <p className="cartwhite">訂單總金額: NT${sum(mycartDisplay)}</p>
      </div>

      <div className="buttoncart1 pb-4">
        <button
          className="btn homeP-btn booking"
          onClick={() => {
            props.history.push('/Shoppingcart1')
          }}
        >
          回購物車
        </button>
        <button
          className="btn homeP-btn items"
          onClick={() => {
            props.history.push('/Shoppingcart3')
          }}
        >
          下一步
        </button>
      </div>
    </>
  )
}

export default withRouter(Shoppingcart2)

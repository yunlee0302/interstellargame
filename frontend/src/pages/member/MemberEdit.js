import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles/memberEdit.scss'

//pop up套件
import swal from 'sweetalert'

// image
import memberImg from './images/member-img.png'
import googleLogin from './images/google-login.png'

// 日期格式套件
const moment = require('moment-timezone')

function MemberEdit(props) {
  // 從localStorage抓取該會員ID
  const userId = JSON.parse(localStorage.getItem('userId'))

  const [nickname, setNickname] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const [userDataIsExist, setUserDataIsExist] = useState(true)

  // 載入會員資料
  async function getUserFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/getUser/' + userId

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

    // const newData = data
    // console.log(newData)

    setNickname(data.userNickname)
    setName(data.userName)
    setGender(data.userGender)
    setBirthday(data.userBirthday)
    setEmail(data.userEmail)
    setPhone(data.userPhone)
    setAddress(data.userAddress)

    // 如果從伺服器回傳的資料沒有id值
    if (!data.userId) {
      setUserDataIsExist(false)
      return
    }
    console.log('data:', data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer()
  }, [])

  // 更新會員資料
  async function updateUserToSever() {
    // 開啟載入指示

    const newData = {
      name,
      email,
      nickname,
      gender,
      phone,
      birthday,
      address,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/updateInfo/' + userId

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 彈出提示視窗
    if (data) {
      swal({
        text: '個人資料儲存成功',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    } else {
      swal({
        text: '個人資料儲存失敗，請重新編輯',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
    setTimeout(() => {
      if (data.userId != undefined) {
        window.location.replace(`/member/`)
        return data.userId
      } else {
        return 0
      }
    }, 1000)
  }

  // async function uploadImgToSever() {
  //   // 開啟載入指示

  //   const newData = {
  //     img,
  //   }

  //   // 連接的伺服器資料網址
  //   // const url = 'http://localhost:3000/members/' + userData.userId
  //   const url = `http://localhost:3000/members/try-upload/${userData.userId}`

  //   // 注意資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'PUT',
  //     body: JSON.stringify(newData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   console.log(JSON.stringify(newData))

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('伺服器回傳的json資料', data)
  // }

  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate.toISOString().substring(0, 10)
    return `${date_text_new}`
  }

  const display = (
    <>
      ;
      <form
        name="form1"
        method="post"
        novalidate
        onsubmit="send(); retrun false;"
      >
        <input type="file" className="" id="avatar" name="avatar" />
      </form>
      <div className="container">
        <div className="member-edit row text-center ">
          <h1 className="text-light">修改個人資訊</h1>
          {/* <button type="submit" className="btn">
            <img src={googleLogin} alt="googleLogin" /> Google登入中
          </button> */}
          <div className="editTop text-center">
            <div className="memberA">
              <img src={memberImg} alt="memberImg" />
            </div>
            <div className="memberB">
              <button className="btn mb-3">上傳頭貼</button>
              <button type="submit" className="btn my-3">
                確認上傳
              </button>
            </div>
          </div>
          <div className="edit-form">
            <div className="input-box pb-4">
              <label htmlFor="nickname">暱稱*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="nickname"
                  value={nickname}
                  placeholder="請輸入你的暱稱"
                  onChange={(event) => {
                    setNickname(event.target.value)
                  }}
                />
              </div>
              {/* <small id="nickname" className="form-text hidden">
                  此暱稱已有人使用過
                </small> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="name">真實姓名*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="name"
                  value={name}
                  placeholder="請輸入你的真實姓名"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>
              {/* <small id="name" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="gender">性別*</label>
              <div className="input-frame">
                <select
                  className="form-control transparent-input "
                  id="gender"
                  placeholder="E-mail"
                  value={this.state.value}
                  onChange={(event) => {
                    setGender(event.target.value)
                  }}
                >
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              </div>
              <small id="birthday" className="form-text hidden" />
            </div>
            <div className="input-box py-4">
              <label htmlFor="birthday">生日*</label>
              <div className="input-frame">
                <input
                  type="date"
                  className="form-control transparent-input "
                  id="birthday"
                  value={convert_date(birthday)}
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  onChange={(event) => {
                    setBirthday(event.target.value)
                  }}
                />
              </div>
              {/* <small id="gender" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="email">E-mail*</label>
              <div className="input-frame">
                <input
                  readOnly
                  type="text"
                  className="form-control transparent-input text-muted"
                  id="email"
                  value={email}
                />
              </div>
              {/* <small id="email" className="form-text text-left text-danger" />
              Email作為登入帳號無法變更 */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="phone">手機*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="phone"
                  placeholder="請輸入你的手機號碼"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                />
              </div>
              {/* <small id="phone" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="address">地址*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="address"
                  placeholder="請輸入你的收件地址"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value)
                  }}
                />
              </div>
              {/* <small id="address" className="form-text hidden" /> */}
            </div>

            <button
              className="btn btn-block"
              onClick={() => {
                updateUserToSever()
              }}
            >
              儲存會員資料
            </button>
            <Link className="btn btn-block" to="/member">
              回會員中心
            </Link>
          </div>
        </div>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(MemberEdit)

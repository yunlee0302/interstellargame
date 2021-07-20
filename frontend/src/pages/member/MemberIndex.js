import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberIndex.scss'

//pop up套件
import swal from 'sweetalert'

// images
import memberImg from './images/member-img.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'

function MemberIndex(props) {
  // 從localStorage抓取會員ID
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

  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate.toISOString().substring(0, 10)
    return `${date_text_new}`
  }

  // 會員登出
  async function logoutToSever() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    // const data = await response.json()

    localStorage.clear()
    window.location.replace(`/login/`)
  }

  const display = (
    <>
      <div className="member mt-5">
        <div className="container">
          <div className="member-card">
            <div className="member-card-title row">
              <p className="text-light">ID CARD</p>
              {/* <span className="tips">完成個人資訊可獲得折價券！</span> */}
            </div>
            <div className="member-card-body row">
              <div className="member-left col-12 col-lg-3 text-center ">
                <div className="memberA">
                  <img src={memberImg} alt="memberImg" />
                  <p>{nickname ? nickname : '未設定暱稱'}</p>
                </div>
                <div className="memberB">
                  <button
                    className="btn my-3"
                    onClick={() => {
                      props.history.push('/member/memberPwdEdit/' + userId)
                    }}
                  >
                    修改密碼
                  </button>
                  <button
                    className="btn my-3"
                    onClick={() => {
                      logoutToSever()
                    }}
                  >
                    登出
                  </button>
                </div>
              </div>
              <div className="member-middle col-12 col-lg-6">
                <div className="pb-2 d-flex">
                  <div className="info-title p-1">姓名</div>
                  <div className="info-text p-1">{name ? name : '未設定'}</div>
                </div>
                {/* <div className="py-2 d-flex">
                  <div className="info-title p-1">性別</div>
                  <div className="info-text p-1">
                    {gender ? gender : '未設定'}
                  </div>
                </div> */}
                <div className="py-2 d-flex">
                  <div className="info-title p-1">生日</div>
                  <div className="info-text p-1">
                    {birthday ? convert_date(birthday) : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div className="info-title p-1">Email</div>
                  <div className="info-text p-1">{email}</div>
                </div>
                <div className="py-2 d-flex">
                  <div className="info-title p-1">手機</div>
                  <div className="info-text p-1">
                    {phone ? phone : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div className="info-title p-1">地址</div>
                  <div className="info-text p-1">
                    {address ? address : '未設定'}
                  </div>
                </div>
              </div>
              <div className="member-right col-12 col-lg-3">
                <button
                  className="btn"
                  onClick={() => {
                    props.history.push('/member/memberEdit/' + userId)
                  }}
                >
                  修改個人資訊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="member-btn-group text-center row">
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun01} alt="fun01" />
            <p className="py-1">查詢訂單</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun02} alt="fun02" />
            <p className="py-1">查詢預約</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberFavList')
            }}
          >
            <img src={fun03} alt="fun03" />
            <p className="py-1">我的最愛</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberCoupon')
            }}
          >
            <img src={fun04} alt="fun04" />
            <p className="py-1">我的優惠券</p>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <h1 className="text-light text-center">會員資料</h1>
      {display}
    </>
  )
}

export default withRouter(MemberIndex)

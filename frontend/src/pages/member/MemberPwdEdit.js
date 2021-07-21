import React, { useState, useEffect } from 'react'
import { withRouter, Link, NavLink, Redirect } from 'react-router-dom'

// style
import './styles/memberPwdEdit.scss'

// pop up套件
import swal from 'sweetalert'

function MemberPwdEdit(props) {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userId = userData.userId
  // console.log('userId:', userId)

  const [password, setPassword] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [newPwdCheck, setNewPwdCheck] = useState('')

  // 檢查兩個密碼是否相同
  async function checkPassword(newPwd, newPwdCheck) {
    if (newPwd === newPwdCheck && newPwdCheck != '') {
      return true
    } else {
      return false
    }
  }

  // 更新密碼
  async function updatePwdToSever() {
    if (await checkPassword(newPwd, newPwdCheck)) {
      const newData = {
        password: newPwd,
      }

      const url = 'http://localhost:3000/members/pwd/' + userId

      // 以下實際發出request
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
      // console.log(`request header = ${request.headers}`)
      // console.log(`request body = ${request.body}`)

      // if (newData.password != null) {
      const response = await fetch(request)
      const data = await response.json()
      if (data.passowrd) {
        userData.userPassword = data.passowrd
      }
      // } else {
      //   alert(password)
      // }
      // end if
      localStorage.setItem('userData', JSON.stringify(data))
      console.log('伺服器回傳的json資料', data)
      // 要等驗証過，再設定資料(簡單的直接設定)

      //直接在一段x秒關掉指示器
      setTimeout(() => {
        swal({
          text: '密碼修改成功！！！',
          icon: 'success',
          button: false,
          timer: 3000,
        })
      }, 1000)
    } else {
      // 抓出了空字串或者兩行不同 警訊以下內容
      swal({
        text: '密碼有誤, 請重新檢查',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
  }

  const display = (
    <>
      ;
      <div>
        <div className="container m-container">
          <div className="m-pwd-edit row text-center ">
            <h1 className="text-light m-pwd-edit-h1">修改密碼</h1>
            <div className="m-pwd-edit-form">
              <div className="input-box pb-4">
                <label htmlFor="password" className="m-pwd-edit-label">
                  當前密碼*
                </label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    required
                    className="form-control m-edit-input "
                    id="userPwd"
                    placeholder="請輸入目前的密碼"
                    minLength="6"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwd">新密碼*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwd"
                    value={newPwd}
                    required
                    className="form-control transparent-input "
                    id="newPwd"
                    placeholder="請輸入您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwd(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwdCheck">新密碼確認*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwdCheck"
                    alue={newPwdCheck}
                    required
                    className="form-control transparent-input "
                    id="newPwdCheck"
                    placeholder="請再輸入一次您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwdCheck(event.target.value)
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block m-pwd-edit-btn"
                onClick={() => {
                  updatePwdToSever()
                }}
              >
                確認修改密碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(MemberPwdEdit)

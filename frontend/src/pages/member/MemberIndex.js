import React from 'react'
import { Route } from 'react-router-dom'


const MemberIndex = () => {
    return (
        <>
        <Route path="/login">
          <LoginIndex auth={auth} setAuth={setAuth} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgetPwd">
          <ForgetPwd />
        </Route>
        <Route path="/forgetPwdMailSent">
          <ForgetPwdMailSent />
        </Route>
        <Route path="/member/memberPwdEditSuccess">
          <MemberPwdEditSuccess auth={auth} />
        </Route>
        <Route path="/member/memberPwdEdit">
          <MemberPwdEdit auth={auth} />
        </Route>
        <Route path="/member/memberCoupon">
          <MemberCoupon auth={auth} />
        </Route>
        <Route path="/member/memberOrder">
          <MemberOrder auth={auth} />
        </Route>
        <Route path="/member/memberEdit">
          <MemberEdit auth={auth} />
        </Route>
        <Route path="/member/memberEditSuccess">
          <MemberEditSuccess auth={auth} />
        </Route>
        <Route path="/member/memberFavList">
          <MemberFavList auth={auth} />
        </Route>
        <Route path="/member">
          <MemberIndex auth={auth} />
        </Route> 
        </>
    )
}

export default MemberIndex

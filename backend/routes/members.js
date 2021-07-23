const express = require('express');
const router = express.Router();

// sql
const User = require('../domain/members.js')
const dbMysql2 = require('../database/db.connect')

// 照片上傳
const multer = require('multer');
const upload = multer({dest:'tmp_uploads/'});

// const session = require('express-session')

async function executeSQL(
    sql,
    res,
    method = 'get',
    multirows = true,
    instance = {}
  ) {
    try {
      const [rows, fields] = await dbMysql2.promisePool.query(sql)
  
      switch (method) {
        case 'post': {
          // 仿照json-server的回傳
          const insertId = { id: rows.insertId }
          // 合併id值
          const result = { ...instance, ...insertId }
          //回傳
          res.status(200).json(result)
          console.log('result:',result)
          break
        }
        case 'put': {
          // 仿照json-server的回傳，有更新到會回傳單一值，沒找到會回到空的物件字串
          // console.log(rows.affectedRows)
          let result = {}
          if (rows.affectedRows) result = { ...instance }
          // result = rows[0]
          //回傳
          res.status(200).json(result)
          console.log('result:',result)
          break
        }
        case 'delete': {
          // 仿照json-server的回傳
          res.status(200).json({})
          break
        }
        case 'get':
        default:
          {
            if (multirows) {
              // res.status(200).json({
              //   users: rows,
              // })
              res.status(200).json(rows)
            } else {
              // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
              let result = {}
              if (rows.length) result = rows[0]
              res.status(200).json(result)
            }
          }
          break
      }
    } catch (error) {
      // 錯誤處理
      console.log('executeSQL error',error)
  
      // 顯示錯誤於json字串
      res.status(200).json({
        message: error,
      })
    }
  }

  async function userLogin(sql, req, res, instance) {
    try {
      const [rows,fields] = await dbMysql2.promisePool.query(sql)

      // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
      let result = {}
      if (rows.length) {
          result = rows[0]
  
        req.session.regenerate(function (err) {
          if (err) {
            res.status(200).json({ status: 2, message: '登入失敗' })
          }
          
          req.session.loginId = result.id
          req.session.loginEmail = result.email
          req.session.loginPassword = result.password
          req.session.loginName = result.name
          req.session.loginNickname = result.nickname
          req.session.loginGender = result.gender
          req.session.loginPhone = result.phone
          req.session.loginBirthday = result.birthday
          req.session.loginAddress = result.address
  
          // 如果要用全訊息可以用以下的回傳
          // res.json({ status: 0, message: '登入成功' })
          // console.log("created sid="+req.session.id);
          res.status(200).json(result)
        })
      } else {
        res.status(200).json({ status: 1, message: '帳號或密碼錯誤' })
  
        //res.status(200).json(result)
      }
    } catch (error) {
      // 錯誤處理
      console.log('userLogin error',error)
  
      // 顯示錯誤於json字串
      res.status(200).json({
        message: error,
      })
    }
  }

// 會員註冊 POST
router.post('/register', (req, res, next) => {
    // 測試response，會自動解析為物件
    // console.log(typeof req.body)
    // console.log(req.body)
  
    //從request json 資料建立新的物件
    let user = new User(
      req.body.email,
      req.body.password
    )
  
    executeSQL(user.addUserSQL(), res, 'post', false, user)
  })


// 會員登入 POST
router.post('/login', function (req, res, next) {
    console.log('login req.body:',req.body)

    let user = new User(
      req.body.email,
      req.body.password
    )

    userLogin(user.getUserByEmailAndPasswordSQL(), req, res, user)
  })

// 上傳大頭貼
  router.post('/try-upload/:userId',upload.single('avatar'), (req, res)=>{
    console.log(req.file);
    res.json(req.file); // 用json傳給前端
  }); 
  
  // 獲得會員資料
  router.get('/getUser/:userId', (req, res, next) => {

    userId = +req.params.userId
    console.log('userId:',userId)

    executeSQL(User.getUserByIdSQL(userId), res, 'get', false)
  })
  

  // 處理會員登出
  router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
      if (err) {
        res.status(200).json({ status: 1, message: '登出失敗' })
        return
      }

      // 清除所有的session
      req.session = null

      res.clearCookie('skey')
      res.status(200).json({ status: 0, message: '登出成功' })
    })
  })


// get 獲取訂單資訊，使用會員id
router.get('/getOrder/:userId', (req, res, next) => {

  userId = +req.params.userId

  executeSQL(User.getUserOrderByIdSQL(userId), res, 'get', true)
})

// get 獲取我的最愛，使用會員id
router.get('/getFavlist/:userId', (req, res, next) => {

  userId = +req.params.userId

  executeSQL(User.getUserFavlistByIdSQL(userId), res, 'get', true)
})

// get 獲取優惠券，使用會員id
router.get('/getCoupon/:userId', (req, res, next) => {

  userId = +req.params.userId

  executeSQL(User.getUserCouponByIdSQL(userId), res, 'get', true)
})



// put 更新一筆資料
router.put('/updateInfo/:userId', (req, res) => {
  let user = new User(
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.nickname,
    req.body.gender,
    req.body.phone,
    req.body.img,
    req.body.birthday,
    req.body.address
    )

    userId = +req.params.userId

    console.log ('userId:',userId)
    console.log (User)
    // console.log ('user:',user)

  executeSQL(user.updateUserByIdSQL(userId), res, 'put', false, user)
})


// 更新密碼
router.put('/pwd/:userId', (req, res) => {

  let user = new User(
    'email',
    req.body.password,
    'name',
    'nickname',
    'gender',
    'phone',
    'img',
    'birthday',
    'address'
  )
  // console.log ('user:',user)
  
  userId = +req.params.userId

  executeSQL(user.updatePwdByIdSQL(userId), res, 'put', false, user)
})

// 更新會員大頭貼
router.get('/try-upload/:userId', (req, res)=>{
  res.render('try-upload/:userId'); // 用json傳給前端

  // 包含其他檔案
  // res.json(file: req.file,
  //   bocy:req.body,
  //   ); 

  let user = new User(
    'email',
    'password',
    'name',
    'nickname',
    'gender',
    'phone',
    req.body.img,
    'birthday',
    'address'
  )
  // console.log ('user:',user)
  
  userId = +req.params.userId

  executeSQL(user.updateImgByIdSQL(userId), res, 'put', false, user)

}); 









module.exports = router;
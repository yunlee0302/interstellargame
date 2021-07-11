# 資料夾Tree

# 更新版 20210707
```
.
├── README.md
├── backend                                         #後端資料夾，npx express-generator的架構
│   ├── app.js                                      #有加CORS處理
│   ├── bin
│   │   └── www
│   ├── database
│   │   └── db.connect.js                           #資料庫連接檔案
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── images
│   │   ├── javascripts
│   │   └── stylesheets
│   │       └── style.css
│   ├── routes
│   │   ├── booking.js                              #預約route
│   │   └── index.js
│   ├── views
│   │   ├── error.jade
│   │   ├── index.jade
│   │   └── layout.jade
│   └── yarn.lock
├── font
│   ├── NotoSansCJKtc-Black.otf
│   ├── NotoSansCJKtc-Bold.otf
│   ├── NotoSansCJKtc-DemiLight.otf
│   ├── NotoSansCJKtc-Light.otf
│   ├── NotoSansCJKtc-Medium.otf
│   ├── NotoSansCJKtc-Regular.otf
│   ├── NotoSansCJKtc-Thin.otf
│   ├── NotoSansMonoCJKtc-Bold.otf
│   └── NotoSansMonoCJKtc-Regular.otf
├── frontend                                        #轉成JSX 依頁面丟到react-frontend這裏
│   ├── blank.html
│   ├── fontawesome
│   │   ├── css
│   │   │   ├── all.css
│   │   │   ├── all.min.css
│   │   │   ├── brands.css
│   │   │   ├── brands.min.css
│   │   │   ├── fontawesome.css
│   │   │   ├── fontawesome.min.css
│   │   │   ├── regular.css
│   │   │   ├── regular.min.css
│   │   │   ├── solid.css
│   │   │   ├── solid.min.css
│   │   │   ├── svg-with-js.css
│   │   │   ├── svg-with-js.min.css
│   │   │   ├── v4-shims.css
│   │   │   └── v4-shims.min.css
│   │   └── webfonts
│   │       ├── fa-brands-400.eot
│   │       ├── fa-brands-400.svg
│   │       ├── fa-brands-400.ttf
│   │       ├── fa-brands-400.woff
│   │       ├── fa-brands-400.woff2
│   │       ├── fa-regular-400.eot
│   │       ├── fa-regular-400.svg
│   │       ├── fa-regular-400.ttf
│   │       ├── fa-regular-400.woff
│   │       ├── fa-regular-400.woff2
│   │       ├── fa-solid-900.eot
│   │       ├── fa-solid-900.svg
│   │       ├── fa-solid-900.ttf
│   │       ├── fa-solid-900.woff
│   │       └── fa-solid-900.woff2
│   ├── image
│   │   ├── bg.png
│   │   ├── login
│   │   │   ├── google-login.png
│   │   │   ├── login-frame-sm.png
│   │   │   ├── login-frame.png
│   │   │   ├── register-frame-sm.png
│   │   │   └── register-frame.png
│   │   └── member
│   │       ├── fun00.png
│   │       ├── fun01.png
│   │       ├── fun02.png
│   │       ├── fun03.png
│   │       ├── fun04.png
│   │       ├── google-login.png
│   │       ├── item001.jpg
│   │       └── member-img.png
│   ├── login
│   │   ├── forgetPwd.html
│   │   ├── forgetPwdMailSent\ .html
│   │   ├── loginindex.html
│   │   └── register.html
│   └── member
│       ├── memberEdit.html
│       ├── memberEditSuccess.html
│       ├── memberFavList.html
│       ├── memberOder.html
│       ├── memberPwdEdit.html
│       ├── memberPwdEditSuccess.html
│       └── memberindex.html
├── react-frontend
│   ├── README.md
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Breadcrumbs.js
│   │   │   ├── Button.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── index.js
│   │   ├── pages
│   │   │   ├── About.js
│   │   │   ├── cart
│   │   │   ├── game
│   │   │   ├── index.js
│   │   │   ├── member
│   │   │   ├── message
│   │   │   ├── products
│   │   │   └── reservation                                 #預約頁面 待更新
│   │   │       ├── ReservationsIndex.js
│   │   │       ├── components
│   │   │       │   ├── Button.js
│   │   │       │   ├── Calendar-unfinished
│   │   │       │   │   ├── DatePicker.js
│   │   │       │   │   └── datePicker.css
│   │   │       │   ├── boardingPass
│   │   │       │   │   ├── BoardingPass.js
│   │   │       │   │   ├── BoardingPassMobile.js
│   │   │       │   │   ├── BoardingPassPc.js
│   │   │       │   │   ├── boardingPass.css
│   │   │       │   │   └── boardingPassMobile.css
│   │   │       │   ├── peopleRadioButton
│   │   │       │   │   ├── PeopleRadioButton.js
│   │   │       │   │   ├── PeopleSelect.js
│   │   │       │   │   └── peopleRadioButton.css
│   │   │       │   ├── stepCards
│   │   │       │   │   ├── Carousel.js
│   │   │       │   │   ├── StepCard.css
│   │   │       │   │   └── StepCard.js
│   │   │       │   └── storeInfo
│   │   │       │       ├── Store.js
│   │   │       │       ├── StoreInfo.js
│   │   │       │       ├── TimeButton.js
│   │   │       │       ├── store.css
│   │   │       │       └── timeButton.css
│   │   │       ├── images
│   │   │       │   ├── astronaut.svg
│   │   │       │   ├── boardingPass.png
│   │   │       │   ├── boardingPassMobile.png
│   │   │       │   ├── boardingPassStamp.png
│   │   │       │   ├── boardingPassStampMobile.png
│   │   │       │   ├── flat.svg
│   │   │       │   ├── pricing.png
│   │   │       │   ├── step1.png
│   │   │       │   ├── step2.png
│   │   │       │   ├── step3.png
│   │   │       │   └── step4.png
│   │   │       ├── index.js
│   │   │       ├── orderData.js
│   │   │       ├── stepData.js
│   │   │       └── storeData.js
│   │   └── styles
│   │       └── global.scss                                 #共用的scss檔
│   └── yarn.lock
└── sql
    ├── boardgame.sql                                       #共用的database
    ├── categories.sql
    ├── delivery_types.sql
    ├── favlist.sql
    ├── item_lists.sql
    ├── items.sql
    ├── members.sql
    ├── orders.sql
    ├── payment_types.sql
    ├── reservations.sql
    └── store.sql
```
# 20210702
```
.
├── RESTful.txt
├── backend
│   └── images
├── frontend
│   ├── README.md
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── Buttons.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── index.js
│   │   ├── pages
│   │   │   ├── About.js
│   │   │   ├── cart
│   │   │   │   └── CartIndex.js
│   │   │   ├── game
│   │   │   │   └── GameIndex.js
│   │   │   ├── index.js
│   │   │   ├── member
│   │   │   │   └── MemberIndex.js
│   │   │   ├── message
│   │   │   │   └── MessageIndex.js
│   │   │   ├── products
│   │   │   │   └── ProductsIndex.js
│   │   │   └── reservation
│   │   │       └── ReservationIndex.js
│   │   └── styles
│   │       └── global.scss
│   └── yarn.lock
└── mysql

```
<br/>
<br/>

# 後端路由REST API

```
-------------------------------------------------------------------------
Normal Routes
-------------------------------------------------------------------------
[Method]  [Route]                       [Notes]
GET       /                             首頁
GET       /About                        關於我們
GET       /login                        Request user login page
POST      /login                        login user
GET       /register                     Request register form
POST      /register                     註冊 user

-------------------------------------------------------------------------
Users Route
-------------------------------------------------------------------------
[Method]  [Route]                       [Notes]
GET       /users/:id                    會員資料頁面
PATCH     /users/:id                    更改會員資料
GET       /users/:id/edit               Request the user edit page
GET       /users/:id/like               秀會員的最愛清單
POST      /users/:id/like               加到最愛清單

#購物車相關
GET	      /users/:id/orders	            會員訂單紀錄一覽
GET	      /users/:id/orders/:orderid	單筆訂單查詢

#預約相關
GET	      /users/:id/booking	        會員預約紀錄一覽
GET	      /users/:id/booking/:id	    查詢單筆預約詳情
DELETE	  /users/:id/booking/:id	    取消預約

-------------------------------------------------------------------------
Products Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /products                     取得所有商品
GET       /products/:id                 單一商品細節頁面(或query string)
GET       /products?id=	
GET		  /product?cat=	                類別&頁數用query string
GET		  /product?page=	

-------------------------------------------------------------------------
Cart Route                        購物車我不太確定ＱＱ!
-------------------------------------------------------------------------
[Method]  [Route]
GET	      /orders	              購物車內容 
POST      /orders	              加到購物車
GET	      /checkout	              request下訂單表單
POST	  /checkout	              送出訂單資料

-------------------------------------------------------------------------
Reservation Route
-------------------------------------------------------------------------
[Method]  [Route]
GET       /booking-steps          預約流程介紹
GET       /booking                預約介面
POST	  /booking	              送出預約資料
GET	      /booking/success	      預約成功頁面


-------------------------------------------------------------------------
chatboard Route
-------------------------------------------------------------------------
[Method]  [Route]




```


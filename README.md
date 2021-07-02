# 資料夾Tree


```
├── README.md                           #列架構、路由
├── backend                             #後端資料夾
├── frontend                            #前端資料夾
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── components                  #所有共用元件
│   │   │   ├── Buttons.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js               #目前少列麵包屑！
│   │   ├── index.js
│   │   └── pages
│   │       ├── about.js                #關於我們（負責：小野）
│   │       ├── cart                    #購物車（負責：sophia）
│   │       ├── game                    #遊戲頁 (負責：昶佑)
│   │       ├── images                  #共用圖片（場地圖etc）
│   │       ├── index.js                #首頁（負責：小野）
│   │       ├── member                  #會員（負責：hannah）
│   │       ├── message                 #揪團留言板 (負責：昶佑)
│   │       ├── products                #商品（負責：馬）
│   │       ├── reservation             #預約（負責：邱淳）
│   │       └── styles
│   │           └── global.scss         #全域style
│   └── yarn.lock
└── mysql                               #資料庫sql檔案彙整後放這裡

```
# 更新版 20210702
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


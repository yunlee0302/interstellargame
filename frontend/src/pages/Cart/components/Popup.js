import React from 'react'
import './Popup.css'
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className=" popup-inner">
        <h1></h1><br></br>
        <p>信用卡號</p>
        <input></input>
      
        <p>有效年月</p>
    
        <input></input>
        <br></br>
        <p>檢核碼</p>
       
        <input></input>
        <br></br>
      

        <div className="close-btn" onClick={() => props.setTrigger()}>
          <i class="far fa-times-circle"></i>
        </div>

        <button className="btn homeP-btn items" onClick={() => props.setTrigger()}>確認送出</button>

        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup

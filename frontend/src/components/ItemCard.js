import React, { useState } from 'react'
import './itemCard.css'
import heart1 from '../pages/image/png/heart.png'
import cart from '../pages/image/png/cart.png'

const ItemCard = (props) => {
  //props: step (str), stepIcon(img, src), Hover(component), stepImage(img,src), stepHeader(str), stepDetail(str)
  const {
    itemName,
    heart1Icon,
    heartIcon,
    Hover,
    link,
    buttonText,
    itemImage,
    OriginalPrice,
    SpecialOffer,
    stepGroup,
    cartIcon,
  } = props.step

  //for components' hover state
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className="step-card"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="img-wrapper">
        <img src={itemImage} alt="pricing-table" />
        {/* hover than show the button */}
        {Hover && (
          <Hover
            link={link}
            buttonText={buttonText}
            className={'card-button ' + (hover ? 'button-show' : '')}
          />
        )}
      </div>
      <div className="step">
        <span>{itemName}</span>
      </div>
      <div className="item-group">
        <div>
          <span className="item-header">{OriginalPrice}</span>
        </div>
        <div>
          <span className="item-detail">{SpecialOffer}</span>
        </div>
        <div className="heart1-icon ">
          <img src={heart1} alt="step" />
        </div>
        <div className="cart-icon">
          <img src={cart} alt="step" />
        </div>
      </div>
    </div>
  )
}

export default ItemCard

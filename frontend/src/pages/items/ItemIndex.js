import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ItemList from './pages/ItemList'
import ItemList2 from './pages/ItemList2'
import ItemList3 from './pages/ItemList3'
import ItemDetail from './pages/itemDetail'
import ItemDetail2 from './pages/itemDetail2'
import ItemDetail3 from './pages/itemDetail3'
import ItemDetail4 from './pages/itemDetail4'
import ItemDetail5 from './pages/itemDetail5'
import ItemDetail6 from './pages/itemDetail6'
import ItemDetail7 from './pages/itemDetail7'
import ItemDetail8 from './pages/itemDetail8'

const ItemIndex = () => {
  return (
    <>
      <Route path="/item-list" exact component={ItemList} />
      <Route path="/item-list2" exact component={ItemList2} />
      <Route path="/item-list3" exact component={ItemList3} />
      <Route path="/item-detail" exact component={ItemDetail} />
      <Route path="/item-detail2" exact component={ItemDetail2} />
      <Route path="/item-detail3" exact component={ItemDetail3} />
      <Route path="/item-detail4" exact component={ItemDetail4} />
      <Route path="/item-detail5" exact component={ItemDetail5} />
      <Route path="/item-detail6" exact component={ItemDetail6} />
      <Route path="/item-detail7" exact component={ItemDetail7} />
      <Route path="/item-detail8" exact component={ItemDetail8} />
    </>
  )
}

export default ItemIndex

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BookingStep from './pages/reservations/pages/BookingStep'
import BookingProcess from './pages/reservations/pages/BookingProcess'
import BookingConfirm from './pages/reservations/pages/BookingConfirm'
import BookingSuccess from './pages/reservations/pages/BookingSuccess'

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path="/booking/steps" exact component={BookingStep} />
        <Route path="/booking" exact component={BookingProcess} />
        <Route path="/booking/confirm" exact component={BookingConfirm} />
        <Route path="/booking/success/:id" component={BookingSuccess} />
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}

export default App


import 'flatpickr/dist/themes/material_green.css'

import React, { Component } from 'react'
import { render } from 'react-dom'

import Flatpickr from '../'

class App extends Component {
  state = {
    v: '2016-01-01 01:01'
  }

  componentDidMount() {
    setTimeout(() => {
      const { v } = this.state
      this.setState({
        v: v.replace('2016', '2017')
      })
    }, 2000)
  }

  render() {
    const { v } = this.state

    return (
      <main>
        <Flatpickr data-enable-time className='test'
          onChange={(_, str) => console.info(str)} />
        <Flatpickr data-enable-time defaultValue='2016-11-11 11:11'
          onChange={(_, str) => console.info(str)} />
        <Flatpickr data-enable-time options={{value: v}}
          onChange={(_, str) => console.info(str)} />
        <Flatpickr options={{value: v, minDate: "2016-11-01"}}
          onChange={(_, str) => console.info(str)} />
      </main>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

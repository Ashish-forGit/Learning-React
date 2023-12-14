import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const anotherElement = (

  <a href="https://www.google.com" target='_blank'> visit google </a>
)

const anotherUser = 'Chai or react'
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherElement

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <App></App>
  // anotherElement
  // reactElement
)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const element = document.getElementById('root')

ReactDOM.render(<React.StrictMode>
    <App {...element?.dataset}  />
</React.StrictMode>, document.getElementById('root'))

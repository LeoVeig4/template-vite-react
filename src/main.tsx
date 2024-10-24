import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from '@chakra-ui/react'
import App from "./App.tsx"
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
)

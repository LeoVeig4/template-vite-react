import { useRoutes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import { routes } from "./routes/routes"
import Footer from "./layout/footer"
function App() {
  const children = useRoutes(routes)

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
      <TailwindIndicator />
      
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routesConfig";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element, end }) => (
            <Route key={path} index={end} path={end ? undefined : path} element={element} />
          ))}
          {/* <Route index element={<Home />} />
          <Route path='/about' element={<About />} /> */}
        </Route>
      </Routes>
  )
}

export default App

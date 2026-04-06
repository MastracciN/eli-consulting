import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import routes from "./routesConfig";

function App() {

  return (
    <>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element, end }) => (
            <Route key={path} index={end} path={end ? undefined : path} element={element} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App

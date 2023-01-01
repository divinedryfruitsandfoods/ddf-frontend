import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
          <Route activeClassName="active_class" exact path="/products" element={<Products />}></Route>
          <Route activeClassName="active_class" exact path="/about" element={<About />}></Route>
          <Route activeClassName="active_class" exact path="/contact" element={<Contact />}></Route>
          <Route activeClassName="active_class" exact path="/register" element={<Registration />}></Route>
          <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

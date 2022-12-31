import Nav from "./components/Nav";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/allproducts" element={<AllProducts />}></Route>
          <Route exact path="/contactus" element={<Contact />}></Route>
          <Route exact path="/register" element={<Registration />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

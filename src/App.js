import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/UpdateCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route activeClassName="active_class" exact path="/" element={<Home />}></Route>
          <Route activeClassName="active_class" exact path="/products" element={<Products />}>
            <Route activeClassName="active_class" path="addcategory" element={<AddCategory />}> </Route>
            <Route activeClassName="active_class" path="updatecategory" element={<EditCategory />}> </Route>
          </Route>
          <Route activeClassName="active_class" exact path="/about" element={<About />}></Route>
          <Route activeClassName="active_class" exact path="/contact" element={<Contact />}></Route>
          <Route activeClassName="active_class" exact path="/register" element={<Registration />}></Route>
          <Route activeClassName="active_class" exact path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

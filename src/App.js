import HomePage from "./Pages/HomePage/homePage";
import NavbarComponent from "./Components/Navbar/navbarComponent";
import FooterComponent from "./Components/Footer/footerComponent";
import SingleProductComponent from "./Components/Single Product/singleProductComponent";
import CheckoutPage from "./Pages/CheckoutPage/checkoutPage";
import CartPage from "./Pages/CartPage/cartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from "./Redux/store";
import { Provider } from "react-redux";
import './App.scss';
import SignupPage from "./Pages/signupPage/signupPage";
import LoginPage from "./Pages/loginPage/loginPage";
import PrivateRoute from "./Route/privateRoute";
import PublicRoute from "./Route/publicRoute";

const Categories = [
  {
    id: 1,
    name: "Clothes",
    img: "https://api.lorem.space/image/fashion?w=640&h=480&r=3094",
  },
  {
    id: 2,
    name: "Electronics",
    img: "https://api.lorem.space/image/watch?w=640&h=480&r=3094",
  },
  {
    id: 3,
    name: "Furniture",
    img: "https://api.lorem.space/image/furniture?w=640&h=480&r=3094",
  },
  {
    id: 4,
    name: "Shoes",
    img: "https://api.lorem.space/image/shoes?w=640&h=480&r=2301",
  },
  {
    id: 5,
    name: "Others",
    img: "https://api.lorem.space/image?w=640&h=480&r=2672",
  },
]


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage categories={Categories} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={<PublicRoute Component={SignupPage}/>} />
            <Route path="/login" element={<PublicRoute Component={LoginPage}/>} />
            <Route path="/checkout" element={<PrivateRoute Component={CheckoutPage}/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import Cart from "./components/cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Main/>
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
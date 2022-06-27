import "./App.css";
import ProductContextProvider from "./components/context/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;

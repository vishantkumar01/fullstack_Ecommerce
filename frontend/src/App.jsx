import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

// const App = () => {
//   return (
//     <div>
//       <ComponentRouters />
//     </div>
//   )
// }

export default App;

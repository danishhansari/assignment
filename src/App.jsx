import { lazy, Suspense } from "react";
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

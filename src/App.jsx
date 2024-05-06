import { lazy, Suspense } from "react";
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <Router>
        <RecoilRoot>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </RecoilRoot>
      </Router>
    </>
  );
}

export default App;

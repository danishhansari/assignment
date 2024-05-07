import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const Success = lazy(() => import("./pages/Success"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

function App() {
  return (
    <>
      <Router>
        <RecoilRoot>
          <Toaster />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/success"
                element={<PrivateRoute component={<Success />} />}
              />
            </Routes>
          </Suspense>
        </RecoilRoot>
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import NewReviewPage from "../NewReviewPage/NewReviewPage";
import ReviewPage from "../ReviewPage/ReviewPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
// {/* Broke Up AuthPage into LoginPage and SignUpPage */}
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import Footer from "../../components/Footer/Footer";
// import AuthPage from '../AuthPage/AuthPage'

export default function App() {
  const [user, setUser] = useState(getUser());
  const location = useLocation();
  const showHomePage = location.pathname === "/";

  return (
    <main className="App">
      {/* Changing Nav Bar based on User Login */}
      <NavBar user={user} setUser={setUser} />

      {/* Shows Homepage Upon boot */}
      {showHomePage}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews/new" element={<NewReviewPage />} />
        <Route path="/reviews" element={<ReviewPage />} />

        {/* Broke Up AuthPage into LoginPage and SignUpPage */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
      </Routes>
      <Footer />
    </main>
  );
}

// export default function App() {
//   const [user, setUser] = useState(getUser())

//   return (
//     <main className="App">
//       { user ?
//         <>
//           <NavBar user={user} setUser={setUser} />

//         </>
//         :
//         <>
//           <NavBar user={user} setUser={setUser} />

//           {/* <HomePage /> */}
//         </>
//       }
//         <Routes>

//           <Route path="/orders/new" element={<NewOrderPage />} />
//           <Route path="/orders" element={<OrderHistoryPage />} />
//           <Route path="/login" element={<LoginPage setUser={setUser} />} />
//           <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
//         </Routes>
//     </main>
//   );
// }

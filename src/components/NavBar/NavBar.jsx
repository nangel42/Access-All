import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {user ? (
        <>
          {/* Logged In users see this in Nav Bar */}
          <Link to="/">*Insert Icon* Welcome {user.name}</Link>
          &nbsp; | &nbsp;
          <Link to="/reviews">Reviews</Link>
          &nbsp; | &nbsp;
          <Link to="/reviews/new">Post Review</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          {/* Logged Out users see this in Nav Bar */}
          <Link to="/">Home</Link>
          &nbsp; | &nbsp;
          <Link to="/orders">Order History</Link>
          &nbsp; | &nbsp;
          <Link to="/orders/new">New Order</Link>
          &nbsp; | &nbsp;
          <Link to="/login">Log In</Link>
          &nbsp; | &nbsp;
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}

import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {

  const dispatch = useDispatch();



  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In Case
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })); //Added all the data into the store

        //Redirect user to browse page



      } else {
        //signed out case
        dispatch(removeUser());
        //if user sign out navigate him to main page

      }
    });
  }, []);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

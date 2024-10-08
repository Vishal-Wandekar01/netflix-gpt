
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants"

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {

      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In Case
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })); //Added all the data into the store

        //Redirect user to browse page

        navigate("/browse");

      } else {
        //signed out case
        dispatch(removeUser());
        //if user sign out navigate him to main page
        navigate("/");

      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();  //this will unmount(clean) onAuthStateChanged

  }, []);


  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className=" w-48"
        src={NETFLIX_LOGO}
        alt="netflix-logo"
      />
      {user && (<div className="flex p-3">
        <img className="w-12 h-12 " src={user?.photoURL}
          alt="user-icon" />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
      )}
    </div>
  );
};

export default Header;

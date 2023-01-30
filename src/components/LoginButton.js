import React from 'react'
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginButton() {

    const [user] = useAuthState(auth);
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };
    const signOut = () => {
      auth.signOut();
    };

  return (
    <div className="[&>button]:mt-auto [&>button]:mb-auto  [&>button]:h-11 [&>button]:border-blue-800 [&>button]:border [&>button]:bg-blue-600 [&>button]:p-3 [&>button]:rounded-lg [&>button]:font-medium [&>button]:text-white [&>button]:transition-all [&>button]:duration-100">
      {user ? (
        <button
          onClick={signOut}
          id="sign-out"
          className="hover:bg-blue-500"
          type="button"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={googleSignIn}
          className="hover:bg-blue-500"
          id="sign-in"
          type="button"
        >
          Google Sign-in
        </button>
      )}
    </div>
  );
}

export default LoginButton
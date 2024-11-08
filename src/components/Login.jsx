import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };
  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with google</button>
      <button onClick={handleGoogleSignOut}>Sign out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with Github</button>
        </>
      )}

      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;

//----------------------------------------------------------------
// done it in first time

// import { GoogleAuthProvider } from "firebase/auth";
// import auth from "../firebase/firebase.init";
// import { signInWithPopup } from "firebase/auth";

// const Login = () => {
//   const provider = new GoogleAuthProvider();
//   const handleGoogleSignIn = () => {
//     // console.log("google sign in coming soon");
//     console.log(auth, provider);
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log("Error: ", error);
//       });
//   };
//   return (
//     <div>
//       <button onClick={handleGoogleSignIn}>Login with google</button>
//     </div>
//   );
// };

// export default Login;

import { useFirebaseApp, useUser } from "reactfire";
import "firebase/auth";

const Logout = () => {
  // Import firebase

  const user = useUser();
  const firebase = useFirebaseApp();

  // Log out
  const handleClick = () => {
    console.log("cliack");

    firebase.auth().signOut();

    console.log(user);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
};

export default Logout;

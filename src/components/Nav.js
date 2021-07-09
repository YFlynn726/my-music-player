import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Chill Vibes</h1>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

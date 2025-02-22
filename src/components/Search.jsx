import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Search({
  isSearchVisible,
  handleSearchSubmit,
  handleSearchCancel,
  handleSearchReset,
  inputValue,
  handleInputChange,
}) {

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
    if (e.key === "Escape") {
      handleSearchCancel();
    }
  };

  return (
    <>
      {createPortal(
        <>
          <div
            className={`overlay ${isSearchVisible ? "visible" : ""}`}
            onClick={handleSearchCancel}
          ></div>
          <div className={`search-container ${isSearchVisible ? "open" : ""}`}>
            <input
              type="text"
              placeholder="Search wines..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              autoFocus
            />
            <button onClick={handleSearchReset}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button onClick={handleSearchSubmit}>Search</button>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

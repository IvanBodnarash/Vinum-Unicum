import { useEffect, useRef } from "react";

export const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedIgnoredElement = event.target.closest(
        "[data-ignore-outside-click='true']",
      );

      if (clickedIgnoredElement) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.addEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

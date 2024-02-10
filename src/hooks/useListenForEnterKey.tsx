import { useEffect } from "react";

const useListenForEnterKey = (callback: Function) => {
  useEffect(
    () => {
      const keyDownHandler = (event: any) => {
        if (event.key === "Enter") {
          event.preventDefault();
          callback();
        }
      };
      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    },
    [callback]
  );
};

export default useListenForEnterKey;

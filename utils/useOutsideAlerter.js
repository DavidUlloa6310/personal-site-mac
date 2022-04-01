import { useEffect } from "react";
import { useActiveContext } from "./ActiveContext";

function useOutsideAlerter(ref, onOutsideClick, checkParent) {
  const { activeItem, setActiveItem } = useActiveContext();

  useEffect(() => {
    function doesParentHaveId(node) {
      if (node.id == activeItem) return true;

      let currentNode = node;

      do {
        currentNode = currentNode.parentNode;
        if (currentNode && currentNode.id == activeItem) {
          return true;
        }
      } while (currentNode != undefined);

      return false;
    }

    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !doesParentHaveId(event.target)
      ) {
        onOutsideClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, activeItem, setActiveItem, onOutsideClick, checkParent]);
}

export default useOutsideAlerter;

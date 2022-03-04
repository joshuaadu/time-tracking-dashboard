import { useState } from "react";

const useIcon = (iconName) => {
  const [icon, setIcon] = useState(null);
  ((name) => {
    import(`../images/icon-${name}.svg`).then((icon) => setIcon(icon.default));
  })(iconName);

  if (icon) {
    return icon;
  } else {
    return "Icon not found";
  }
};
export default useIcon;

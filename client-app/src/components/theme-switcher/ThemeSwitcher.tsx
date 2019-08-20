import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const ThemeSwitcher: React.FC = () => {
  const [isSelectedThemeLight, setIsSelectedThemeLight] = useState(true);
  const [cookies, setCookie] = useCookies(["selectedTheme"]);

  useEffect(() => {
    if (cookies !== undefined) {
      setIsSelectedThemeLight(cookies.isSelectedThemeLight);

      console.log(cookies.isSelectedThemeLight);

      document.documentElement.setAttribute(
        "data-theme",
        cookies.isSelectedThemeLight ? "light" : "dark"
      );
    }
  }, []);

  const changeTheme = () => {
    if (isSelectedThemeLight) {
      setIsSelectedThemeLight(false);
    } else {
      setIsSelectedThemeLight(true);
    }

    setCookie("isSelectedThemeLight", isSelectedThemeLight, {
      path: "/",
      expires: new Date("2099-01-31")
    });

    document.documentElement.setAttribute(
      "data-theme",
      isSelectedThemeLight ? "light" : "dark"
    );
  };

  const getFontAwesomeIcon = () =>
    isSelectedThemeLight ? "fas fa-moon" : "fas fa-sun";

  return <i className={getFontAwesomeIcon()} onClick={changeTheme} />;
};

export default ThemeSwitcher;

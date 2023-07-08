import { React, useState } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../Utilities/commonUtils";

import ScrollService from "../../../Utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);

    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    // console.log(TOTAL_SCREENS);
    return TOTAL_SCREENS.map((Screen, i) => {
      if(Screen.screen_name === "Footer")
        return;
      return (
        <div
          key={Screen.screen_name}
          className={getHeaderOptionsClass(i)}
          onClick={() => switchScreen(i, Screen)}
        >
          <span>{Screen.screen_name}</span>
        </div>
      );
    });
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += " header-option-seperator";

    if (selectedScreen === index) classes += " selected-header-option";
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponet = document.getElementById(screen.screen_name);
    console.log(screenComponet);
    if (!screenComponet) return;

    screenComponet.scrollIntoView({ behavior: "smooth" });
    console.log(index);
    console.log(screen);
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hmburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>SANKET</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}

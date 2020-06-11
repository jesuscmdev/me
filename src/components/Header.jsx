import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";

import FullMenu from "./FullHeightMenu";

function Header({ history }) {
  let logo = useRef(null);
  let menu = useRef(null);

  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (state.clicked === false) {
      logo.style.color = "#000000";
      menu.style.color = "#000000";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      logo.style.color = "#ffffff";
      menu.style.color = "#ffffff";
      menu.style.content = "close";
    }
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link ref={(el) => (logo = el)} to="/">
                jesuscm.dev
              </Link>
            </div>
            <div className="menu">
              <button
                ref={(el) => (menu = el)}
                disabled={disabled}
                onClick={handleMenu}
              >
                menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <FullMenu state={state} />
    </header>
  );
}

export default withRouter(Header);

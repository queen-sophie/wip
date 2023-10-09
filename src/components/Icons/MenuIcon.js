import PropTypes from "prop-types";
import React from "react";
import Svg, { Path } from "react-native-svg";

function MenuIcon({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 70 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.6453 8.82272C17.6453 3.95072 13.6947 5.34058e-05 8.82267 5.34058e-05C3.95067 5.34058e-05 0 3.95072 0 8.82272C0 13.6961 3.95067 17.6454 8.82267 17.6454C13.6947 17.6454 17.6453 13.6961 17.6453 8.82272Z"
        fill="white"
      />
      <Path
        d="M43.3287 8.82272C43.3287 3.95072 39.378 5.34058e-05 34.506 5.34058e-05C29.634 5.34058e-05 25.6833 3.95072 25.6833 8.82272C25.6833 13.6961 29.634 17.6454 34.506 17.6454C39.378 17.6454 43.3287 13.6961 43.3287 8.82272Z"
        fill="white"
      />
      <Path
        d="M69.0122 8.82272C69.0122 3.95072 65.0615 5.34058e-05 60.1895 5.34058e-05C55.3175 5.34058e-05 51.3668 3.95072 51.3668 8.82272C51.3668 13.6961 55.3175 17.6454 60.1895 17.6454C65.0615 17.6454 69.0122 13.6961 69.0122 8.82272Z"
        fill="white"
      />
    </Svg>
  );
}

MenuIcon.propTypes = {
  width: PropTypes.string, // You can adjust the prop type based on your requirements
  height: PropTypes.string, // You can adjust the prop type based on your requirements
};

MenuIcon.defaultProps = {
  width: "24px",
  height: "24px",
};
export default MenuIcon;

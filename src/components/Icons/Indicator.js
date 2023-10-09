import PropTypes from "prop-types";
import React from "react";
import Svg, { Path } from "react-native-svg";

function Indicator({ width, height }) {
  return (
    <Svg
      stroke="#0000"
      fill="#fff"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
    </Svg>
  );
}

Indicator.propTypes = {
  width: PropTypes.number, // You can adjust the prop type based on your requirements
  height: PropTypes.number, // You can adjust the prop type based on your requirements
};

Indicator.defaultProps = {
  width: 24,
  height: 24,
};
export default Indicator;

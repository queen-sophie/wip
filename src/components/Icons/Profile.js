import PropTypes from "prop-types";
import React from "react";
import Svg, { Path } from "react-native-svg";

function Profile({ width, height }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.78611 11.4987C3.39277 11.5121 2.20344 11.3414 1.05411 10.9201C0.82344 10.8347 0.600773 10.7361 0.370106 10.6507C0.0874397 10.5454 -0.0165603 10.3561 0.00210639 10.0601C0.0554397 9.14005 0.344773 8.30539 0.896773 7.56939C1.69144 6.51205 2.75544 5.91339 4.07677 5.76939C4.56877 5.71606 5.05544 5.76939 5.54211 5.87472C7.06611 6.20939 8.10477 7.12272 8.72877 8.52939C8.95144 9.02806 9.05677 9.55339 9.07011 10.0987C9.07011 10.3361 8.99144 10.5067 8.76744 10.5987C8.41277 10.7427 8.07144 10.9067 7.71011 11.0254C6.71144 11.3481 5.67944 11.5254 4.79277 11.4987H4.78611Z"
        fill="#B3B3B3"
      />
      <Path
        d="M4.58904 4.92803C3.08371 4.96136 2.06638 3.78536 2.05971 2.54936C2.04638 1.09736 3.11704 0.0133639 4.54238 3.05835e-05C5.85038 -0.00663608 7.03304 1.07736 7.01971 2.50936C7.00771 3.8827 5.78504 4.9867 4.58904 4.92803Z"
        fill="#B3B3B3"
      />
    </Svg>
  );
}

Profile.propTypes = {
  width: PropTypes.string, // You can adjust the prop type based on your requirements
  height: PropTypes.string, // You can adjust the prop type based on your requirements
};

Profile.defaultProps = {
  width: "24px",
  height: "24px",
};
export default Profile;

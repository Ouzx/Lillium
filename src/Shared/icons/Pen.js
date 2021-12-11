import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPen(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.437 0c.655 0 1.283.261 1.741.723l3.101 3.101a2.462 2.462 0 010 3.482L7.958 18.624c-.699.806-1.69 1.3-2.823 1.378H0v-1l.003-4.215c.085-1.054.576-2.035 1.323-2.694L12.696.725A2.456 2.456 0 0114.436 0zM5.064 18.005c.534-.038 1.031-.287 1.43-.743L14.058 9.7l-3.755-3.755-7.606 7.605c-.405.358-.656.86-.696 1.318v3.135l3.064.002zM11.717 4.53l3.754 3.755 2.394-2.394a.462.462 0 000-.653L14.76 2.135a.456.456 0 00-.647 0L11.717 4.53z"
        fill="#E2E2E2"
      />
    </Svg>
  );
}

export default SvgPen;

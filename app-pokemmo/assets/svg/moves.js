import Svg, { Path } from 'react-native-svg';

const MovesIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      fillRule="evenodd"
      d="M10 4 H18 V6 H22 V10 H24 V18 H22 V22 H18 V24 H10 V22 H6 V18 H4 V10 H6 V6 H10 V4 Z M12 12 H16 V16 H12 V12 Z"
      fill={color}
    />
  </Svg>
);

export default MovesIcon;

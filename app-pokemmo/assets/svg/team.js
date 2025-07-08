import Svg, { Path } from 'react-native-svg';

const TeamIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      fillRule="evenodd"
      d="M10 4 H18 V6 H20 V10 H18 V12 H10 V10 H8 V6 H10 V4 Z M4 14 H12 V16 H14 V20 H12 V22 H4 V20 H2 V16 H4 V14 Z M16 14 H24 V16 H26 V20 H24 V22 H16 V20 H14 V16 H16 V14 Z M10 8 H18 V9 H10 V8 Z M13 7 H15 V10 H13 V7 Z M4 18 H12 V19 H4 V18 Z M7 17 H9 V20 H7 V17 Z M16 18 H24 V19 H16 V18 Z M19 17 H21 V20 H19 V17 Z"
      fill={color}
    />
  </Svg>
);

export default TeamIcon;
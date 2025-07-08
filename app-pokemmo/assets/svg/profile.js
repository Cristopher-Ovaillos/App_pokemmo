import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M10 4 H18 V6 H22 V12 H20 V18 H18 V24 H10 V18 H8 V12 H6 V6 H10 V4 Z"
      fill={color}
    />
  </Svg>
);

export default ProfileIcon;
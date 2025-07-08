import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M14 4H16V8H20V12H24V14H26V26H18V18H10V26H2V14H4V12H8V8H12V4Z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
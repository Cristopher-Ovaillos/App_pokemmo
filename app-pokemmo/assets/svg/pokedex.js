import Svg, { Path } from 'react-native-svg';

const PokedexIcon = ({ color, size = 28 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      fillRule="evenodd"
      d="M6 2 H22 V4 H24 V24 H22 V26 H6 V24 H4 V4 H6 V2 Z M4 13 H24 V15 H4 V13 Z M11 6 H17 V7 H18 V9 H17 V11 H11 V9 H10 V7 H11 V6 Z M8 18 H10 V20 H8 V18 Z M12 18 H14 V20 H12 V18 Z M16 18 H18 V20 H16 V18 Z"
      fill={color}
    />
  </Svg>
);

export default PokedexIcon;
import Svg, { Defs, Pattern, Path, Rect } from 'react-native-svg';
import { useTheme } from '../../src/theme/themecontext';

const BackgroundPattern = () => {
  const { theme } = useTheme();
  const patternColor = theme.mode === 'light' ? theme.border : theme.surface;

  return (
    <Svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Defs>
        <Pattern
          id="pokeballPattern"
          patternUnits="userSpaceOnUse"
          width="16"
          height="16"
        >
        
          <Path
            d="M7 4 H9 V5 H10 V7 H9 V8 H7 V7 H6 V5 H7 V4 Z"
            fill={patternColor}
            fillOpacity="0.2"
          />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#pokeballPattern)" />
    </Svg>
  );
};

export default BackgroundPattern;
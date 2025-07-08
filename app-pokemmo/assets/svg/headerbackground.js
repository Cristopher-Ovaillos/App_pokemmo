import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../src/theme/themecontext';

const HeaderBackground = () => {
  const { theme } = useTheme();
  const isDarkMode = theme.mode === 'dark';

  const silhouetteColor = theme.surface + '66'; // ~40% opacidad
  const celestialBodyColor = theme.surface + '99'; // ~60% opacidad

  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 250 80"
      preserveAspectRatio="xMidYMid slice"
    >
      {isDarkMode ? (
        
        <Path
          d="M202 18 h10 v2 h2 v10 h-2 v2 h-10 v-2 h-2 v-10 h2 z M206 18 h10 v2 h2 v10 h-2 v2 h-10 v-2 h-2 v-10 h2 z M206 24 h2 v2 h-2 z"
          fillRule="evenodd"
          fill={celestialBodyColor}
        />
      ) : (
     
        <Path
          d="M210 18 h4 v4 h4 v4 h-4 v4 h-4 v-4 h-4 v-4 h4 z M204 20 h2 v2 h-2 z M204 32 h2 v2 h-2 z M218 20 h2 v2 h-2 z M218 32 h2 v2 h-2 z M208 16 h2 v2 h-2 z M208 36 h2 v2 h-2 z M200 24 h2 v2 h-2 z M222 24 h2 v2 h-2 z"
          fill={celestialBodyColor}
        />
      )}
      <Path
        d="M0 80 V60 H10 V50 H20 V60 H40 V40 H50 V30 H60 V40 H70 V60 H90 V55 H100 V60 H120 V45 H130 V60 H150 V50 H160 V60 H250 V80 Z"
        fill={silhouetteColor}
      />
    </Svg>
  );
};

export default HeaderBackground;
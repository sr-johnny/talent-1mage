import React from 'react'

import {
  Box
} from 'native-base'

import { theme } from '../../global/theme'

export function TitleHomeScreen(){
  return (
    <Box
        marginBottom={5}
      >
        <Box
          _text={{
            fontSize: 24,
            fontFamily: theme.fonts.poppins_Regular,
            color: theme.colors.green
          }}
        >
          Hello, Maria 👋🏼
        </Box>
        <Box
          _text={{
            fontSize: 16,
            fontFamily: theme.fonts.poppins_Regular,
            color: theme.colors.black_label
          }}
        >
          What do you wanna donate today?
        </Box>
      </Box>
  );
}
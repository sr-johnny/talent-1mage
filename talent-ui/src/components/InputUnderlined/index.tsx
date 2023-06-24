import React from 'react'

import { Box, Input, Stack } from 'native-base'
import { theme } from '../../global/theme'

type Props = {
  title: string;
  value?: string;
}

export function InputUnderlined({value, title}: Props) {
  return (
    <Stack w="80%">
      <Box
        _text={{
          fontSize: 12,
          fontFamily: theme.fonts.poppins_Regular,
          color: theme.colors.balck_label
        }}
      >
        {title}
      </Box>
      <Input 
        color={theme.colors.black_button} 
        fontFamily={theme.fonts.roboto_Regular}
        fontSize={14}
        maxH="9" 
        variant="underlined" 
        value={value}
      />
    </Stack>
  );
}
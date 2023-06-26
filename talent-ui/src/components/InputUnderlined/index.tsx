import React from 'react'

import { Box, IInputProps, Input, KeyboardAvoidingView } from 'native-base'
import { theme } from '../../global/theme'

type Props = IInputProps & {
  title: string;
  value?: string;
}

export function InputUnderlined({value, title, ...rest}: Props) {
  return (
    <KeyboardAvoidingView w="80%">
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
        {...rest}
      />
    </KeyboardAvoidingView>
  );
}
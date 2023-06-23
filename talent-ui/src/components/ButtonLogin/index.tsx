import React from 'react'

import { Button, IButtonProps } from 'native-base'
import { theme } from '../../global/theme';

type Props = IButtonProps & {
  title: string;
}

export function ButtonLogin({ title, ...rest }: Props) {
  return (
    <Button
      w="80%"
      marginTop={7}
      borderRadius={4}
      backgroundColor={theme.colors.black_button}
      _text={{
        fontFamily: theme.fonts.poppins_Medium,
        fontSize: 14,
        color: theme.colors.white_button
      }}
      {...rest}
    >
      {title}
    </Button>
  );
}
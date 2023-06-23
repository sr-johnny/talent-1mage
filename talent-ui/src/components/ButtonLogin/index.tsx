import React from 'react'

import { Button, IButtonProps } from 'native-base'

type Props = IButtonProps & {
  title: string;
}

export function ButtonLogin({ title, ...rest }: Props) {
  return (
    <Button
      w="80%"
      marginTop={7}
      //size="md"
      borderRadius={4}
      color="#ffffff"
      backgroundColor="#000000"
      {...rest}
    >
      {title}
    </Button>
  );
}
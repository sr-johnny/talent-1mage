import React from 'react'

import { Button } from 'native-base'

type Props = {
  title: string;
  value?: string;
}

export function ButtonLogin({ value, title }: Props) {
  return (
    <Button
      w="80%"
      marginTop={7}
      //size="md"
      borderRadius={4}
      color="#ffffff"
      backgroundColor="#000000"
    >
      {title}
    </Button>
  );
}
import React from 'react'

import { Box, Input, Stack } from 'native-base'

type Props = {
  title: string;
  value?: string;
}

export function InputUnderlined({value, title}: Props) {
  return (
    <Stack w="80%">
      <Box>
        {title}
      </Box>
      <Input maxH="9" variant="underlined" value={value}/>
    </Stack>
  );
}
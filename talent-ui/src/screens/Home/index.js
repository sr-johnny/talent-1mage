import React from 'react'

import { Box } from 'native-base'

export function Home() {
  return (
    <Box
      safeArea
      flex={1}
      backgroundColor="#ffffff"
      justifyContent="center"
      alignItems="center"
    >
      Hello!
    </Box>
  );
}
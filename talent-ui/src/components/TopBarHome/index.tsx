import React from 'react'

import { HStack, Box, Button, IButtonProps } from 'native-base'

import { IconButton } from '../IconButton'
import { AvatarSVG } from '../AvatarSVG'

type Props = IButtonProps & {
  handleScreen: () => void;
}

export function TopBarHome({handleScreen, ...rest}:Props) {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      marginY={4}
    >
      <IconButton
        title="menu"
        colorIcon="icon"
        size="xl"
      />

      <Box
        flexDir="row"
        rounded="md"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          title="bell"
          colorIcon="icon"
          marginRight={4}
          size="xl"
        />

        <Button size={35} borderRadius={18} onPress={handleScreen} {...rest}>
          <AvatarSVG size={35} />
        </Button>
      </Box>
    </HStack>
  );
}
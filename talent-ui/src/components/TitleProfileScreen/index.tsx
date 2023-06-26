import React from 'react'
import { Stack, Box, Text } from 'native-base'

import { theme } from '../../global/theme'

import { IconButton } from '../IconButton'

type Props = {
  name: string;
  email: string;
}

export function TitleProfileScreen({ name, email}: Props){
  return (
    <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text
              fontSize="3xl"
              fontFamily={theme.fonts.poppins_ExtraBold}
              color={theme.colors.black}
            >
              {name}
            </Text>
            <Text
              fontSize={14}
              fontFamily={theme.fonts.poppins_Regular}
              color={theme.colors.grey_border}
            >
              {email}
            </Text>
          </Box>
          <Box top={2}>
            <IconButton title="edit" colorIcon="green" size="2xl" />
          </Box>
        </Stack>
  );
}
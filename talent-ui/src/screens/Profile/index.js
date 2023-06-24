import React from 'react'
import { Box, Text, Stack } from 'native-base'

import { theme } from '../../global/theme'

import { AvatarSVG } from '../../components/AvatarSVG'
import { IconButton } from '../../components/IconButton'
import { TitleProfileScreen } from '../../components/TitleProfileScreen'
import { ButtonProfileScreen } from '../../components/ButtonProfileScreen'

export function Profile() {
  return (
    <Stack
      safeArea
      flex={1}
      alignItems="center"
      backgroundColor={theme.colors.green}
      _text={{
        fontSize: 24,
        fontFamily: theme.fonts.poppins_Regular,
        color: theme.colors.black
      }}
    >
      <Box
        w={690}
        h={690}
        alignContent="flex-start"
        bottom="25%"
        zIndex={0}
        position="absolute"
        overflow="hidden"
      >
        <AvatarSVG />
      </Box>
      <Box
        w="100%"
        h="100%"
        zIndex={2}
        top="42%"
        position="absolute"
        borderTopRadius={50}
        paddingTop={10}
        paddingX={5}
        backgroundColor={theme.colors.white_button}
      >
        <TitleProfileScreen
          name="Maria Isadora"
          email="mariaissa@gmail.com"
        />

        <ButtonProfileScreen title="Settings"/>
        <ButtonProfileScreen title="Pending reviews"/>
        <ButtonProfileScreen title="Faq"/>
        <ButtonProfileScreen title="Help"/>

      </Box>
      <Box
        w="25%"
        h="12.5%"
        top="31%"
        rounded={100}
        zIndex={3}
        alignItems="center"
        justifyContent="center"
        backgroundColor={theme.colors.white_button}
      >
        <IconButton title="camera" colorIcon="icon" size="4xl" />
      </Box>
    </Stack>
  );
}
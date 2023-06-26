import React from 'react'
import { Box, Stack, Button } from 'native-base'

import { theme } from '../../global/theme'

import { AvatarSVG } from '../../components/AvatarSVG'
import { IconButton } from '../../components/IconButton'
import { TitleProfileScreen } from '../../components/TitleProfileScreen'
import { ButtonProfileScreen } from '../../components/ButtonProfileScreen'

export function Profile() {

  function handleChangeImage() {
    //console.log('Tela Profile | Alteração de foto');
  }

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

        <ButtonProfileScreen title="Settings" />
        <ButtonProfileScreen title="Pending reviews" />
        <ButtonProfileScreen title="Faq" />
        <ButtonProfileScreen title="Help" />

      </Box>
      <Button
        //onPress={handleChangeImage}  //Função de mudança de imagem
        variant="unstyled"
        w={75}
        h={75}
        top="55%"
        borderRadius={38}
        zIndex={2}
        alignItems="center"
        justifyContent="center"
        backgroundColor={theme.colors.white_button}
      >
        <IconButton title="camera" colorIcon="icon" size="4xl" />
      </Button>
    </Stack>
  );
}
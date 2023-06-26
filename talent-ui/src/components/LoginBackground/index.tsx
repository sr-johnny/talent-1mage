import React, { ReactNode } from 'react'

import { Box, VStack } from 'native-base'
import { ViewProps } from 'react-native'

import BrandSVG from '../../assets/brand.svg'
import { theme } from '../../global/theme'

type Props = ViewProps & {
  title: String;
  content: ReactNode;
}

export function LoginBackground({title, content, ...rest}:Props){
  return (
    <VStack
      safeArea
      flex={1}
      backgroundColor={theme.colors.blue}
      justifyContent="space-between"
    >
      <Box
        h="20%"
        alignItems="center"
        justifyContent="center"
      >
        <BrandSVG/>
      </Box>

      <Box
        h="75%"
      >
        <Box
          w={304} //Descartado "77%", pois quando o teclado é aberto, muda as porcentagens
          h={305} //Descartado "53%", pois quando o teclado é aberto, muda as porcentagens
          alignSelf="center"
          marginTop={5}
          backgroundColor={theme.colors.white}
          style={{
            transform: [{ rotate: '45deg' }]
          }}
          borderRadius={40}
        >
        </Box>

        <Box
          w="100%"
          h="100%"
          zIndex={1}
          position="absolute"
          borderTopRadius={65}
          marginTop="30%"
          backgroundColor={theme.colors.white}
          alignItems="center"
          {...rest}
        >
          <Box
            marginBottom={10}
            _text={{
              fontSize: '3xl',
              fontFamily: theme.fonts.poppins_ExtraBold,
              color: theme.colors.black
            }}
          > 
          {title}
          </Box>
          {content}
        </Box>
      </Box>
    </VStack>
  );
}
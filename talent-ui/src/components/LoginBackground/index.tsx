import React, { ReactNode } from 'react'

import { Box, VStack } from 'native-base'
import { ViewProps } from 'react-native'

import BrandSVG from '../../assets/brand.svg'

type Props = ViewProps & {
  title: String;
  content: ReactNode;
}

export function LoginBackground({title, content, ...rest}:Props){
  return (
    <VStack
      safeArea
      flex={1}
      backgroundColor="#bfdbfe"
      justifyContent="space-between"
    >
      <Box
        h="20%"
        backgroundColor="#bfdbfe"
        alignItems="center"
        justifyContent="center"
      >
        <BrandSVG/>
      </Box>

      <Box
        h="75%"
      >
        <Box
          w={304}//"77%"
          h={305}//"53%"
          alignSelf="center"
          marginTop={5}
          //position="relative"//"absolute"
          backgroundColor="#ffffff"
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
          backgroundColor="#ffffff"
          alignItems="center"
          {...rest}
        >
          <Box
            marginBottom={10}
            _text={{
              fontSize: "3xl",
              fontWeight: "bold",
              color: "#000000"
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
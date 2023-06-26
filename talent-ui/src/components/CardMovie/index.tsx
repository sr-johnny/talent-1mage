import React from 'react'

import { Box, Text, Button, Stack, Image } from 'native-base'

import { theme } from '../../global/theme'

type Props = {
  title: string;
  source: any;
  size: string;
}

export function CardMovie({ title, source, size }: Props) {
  return (
    <Stack
      h={110}
      w={90}
      alignItems="center"
      borderRadius={16}
      //backgroundColor={theme.colors.black}
    >
      <Stack
        h={74}
        w={74}
        alignItems="center"
        justifyContent="center"
        borderRadius={16}
        opacity={0.1}
        zIndex={1}
      >
      </Stack>
      <Box
        h={37}
        w={37}
        zIndex={2}
        position="absolute"
        top={5}
        alignSelf="center"
        alignItems="center"
        justifyContent="center"
      >
        <Image source={source}/>
      </Box>
      <Box
        w="100%"
        h={36}
        alignItems="center"
        justifyContent="flex-end"
        //backgroundColor={getColorIcon(colorIcon)}
      >
        <Text
          h={18}
          style={{
            fontSize: 12,
            textAlign: "auto",
            fontFamily: theme.fonts.poppins_Regular,
            color: theme.colors.balck_label
          }}
        >
          {title}
        </Text>
      </Box>
    </Stack >
  );
}
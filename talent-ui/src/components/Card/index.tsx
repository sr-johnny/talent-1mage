import React from 'react'

import { Box, Text, Button, Stack } from 'native-base'

import { theme } from '../../global/theme'
import { IconCard } from '../IconCard';

type Props = {
  title: string;
  iconName: string;
  colorIcon: string;
}

export function Card({ title, iconName, colorIcon }: Props) {
  function getColorIcon(colorIcon) {
    switch (colorIcon) {
      case 'purple':
        return theme.colors.purple;
        break;
      case 'water':
        return (theme.colors.water);
        break;
      case 'sky':
        return (theme.colors.sky);
        break;
      case 'orange':
        return (theme.colors.orange);
        break;
      case 'pink':
        return (theme.colors.pink);
        break;
      case 'aqua':
        return (theme.colors.aqua);
        break;
      default:
        console.log("Erro ao selecionar a cor");
    }
  }
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
        backgroundColor={getColorIcon(colorIcon)}
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
        <IconCard title={iconName} colorIcon={colorIcon} />
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
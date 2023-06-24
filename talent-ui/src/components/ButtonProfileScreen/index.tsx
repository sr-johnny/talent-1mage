import React from 'react'
import { Box, IBoxProps, Text } from 'native-base'

import { theme } from '../../global/theme'

import { IconButton } from '../IconButton'

type Props = IBoxProps & {
  title: string;
}

export function ButtonProfileScreen({ title, ...rest }: Props){
  return (
    <Box
          w="100%"
          h={60}
          marginTop={4}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          borderRadius={20}
          paddingX={6}
          backgroundColor={theme.colors.white_button}
          style={{
            shadowColor: theme.colors.balck_label,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 20,
            elevation: 7,
          }}
          {...rest}
        >
          <Text
            fontSize={18}
            color={theme.colors.balck_label}
            fontFamily={theme.fonts.poppins_SemiBold}
          >
            {title}
          </Text>
          <IconButton title="chevron-right" colorIcon="black" size="lg" />
        </Box>
  );
}
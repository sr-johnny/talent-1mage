import React from 'react'

import { Box, Input, Stack } from 'native-base'
import { theme } from '../../global/theme'
import { IconButton } from '../IconButton';

type Props = {
  value?: string;
}

export function SearchBar({ value }: Props) {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      h={60}
      paddingX={4}
      borderWidth={1}
      borderColor={theme.colors.grey_border}
      borderRadius={10}
    >
      <IconButton title="search" colorIcon="icon" size="lg" w="10%"/>

      <Input
        color={theme.colors.black_button}
        fontFamily={theme.fonts.poppins_Regular}
        fontSize={16}
        paddingTop={3}
        w="65%"
        type="text"
        variant="unstyled"
        placeholder="Search here"
        placeholderTextColor={theme.colors.grey_placeholder}
        value={value}

      />

      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        w="22%"
      >
        <IconButton title="mic" colorIcon="icon" size="lg"/>

        <Box
          h={10}
          borderWidth={0.7}
          marginX={2}
          borderColor={theme.colors.grey_border}
        />

        <IconButton title="sliders" colorIcon="green" size="lg"/>
      </Box>
    </Stack>
  );
}
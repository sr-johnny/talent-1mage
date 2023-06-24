import React from 'react'

import { Stack, Text, Button, IStackProps, Box } from 'native-base'

import { theme } from '../../global/theme'
import { IconButton } from '../IconButton';

type Props = IStackProps & {
  title: string;
}

export function BarTopFundraisers({ title, ...rest }: Props) {
  return (
    <Stack
      w="100%"
      marginTop={5}
      marginBottom={4}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        style={{
          fontSize: 16,
          fontFamily: theme.fonts.metropolis_Medium,
          color: theme.colors.black_label
        }}
      >
        {title}
      </Text>
      <Button
        w="25%"
        h="60%"
        variant="link"
      >
        <Box
          w="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            marginX={2}
            style={{
              fontSize: 14,
              fontFamily: theme.fonts.metropolis_Regular,
              color: theme.colors.green
            }}
          >
            See All
          </Text>
          <IconButton
            title="arrow-right"
            colorIcon="green"
            size="lg"

          />
        </Box>
      </Button>
    </Stack>
  );
}
import React from 'react'

import { Stack, Text, Box } from 'native-base'

import { theme } from '../../global/theme'

export function TextStartCampaign(){
  return (
    <Stack paddingLeft={1.5}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: theme.fonts.poppins_SemiBold,
            color: theme.colors.black_label
          }}
        >
          Do you really have
        </Text>
        <Box flexDirection="row" textAlign="auto" paddingTop={2}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: theme.fonts.poppins_SemiBold,
              color: theme.colors.black_label
            }}
          >
            a creative
          </Text>
          <Text> </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: theme.fonts.poppins_SemiBold,
              color: theme.colors.green
            }}
          >
            idea?
          </Text>
        </Box>
      </Stack>
  );
}
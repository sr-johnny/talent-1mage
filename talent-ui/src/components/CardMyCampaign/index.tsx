import React from 'react'

import { Box, Text, Button, Stack } from 'native-base'

import CardSVG from '../../assets/card_campaign_sarah.svg'
import { theme } from '../../global/theme'
import { IconButton } from '../IconButton';

export function CardMyCampaign() {
  return (
    <Stack
      paddingTop={5}
      h={275}
      w={280}
      alignItems="center"
      paddingX={5}
      borderRadius={16}
      backgroundColor={theme.colors.white_button}
      borderColor={theme.colors.grey_border_card}
      borderWidth={1}
    >
      <Box>
        <CardSVG />
        <Box
          w="9%"
          h="20%"
          top="10%"
          left="85%"
          position="absolute"
          borderRadius={12}
          alignItems="center"
          justifyContent="center"
          paddingTop={0.5}
          backgroundColor={theme.colors.white_button}
        >
          <IconButton title="heart" colorIcon="green" />
        </Box>
      </Box>
      <Stack
        h="10%"
        marginTop={2}
      >
        <Box
          w="100%"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            w="72%"
            style={{
              fontSize: 14,
              fontFamily: theme.fonts.metropolis_Medium,
              color: theme.colors.balck_label
            }}
          >
            Help sarah to defet ...
          </Text>
          <Box
            h="90%"
            w="28%"
            alignItems="center"
            justifyContent="center"
            borderWidth={1}
            borderRadius={5}
            borderColor={theme.colors.green}
          >
            <Text
              style={{
                fontSize: 12,
                bottom: 1,
                fontFamily: theme.fonts.metropolis_Regular,
                color: theme.colors.green
              }}
            >
              Medical
            </Text>
          </Box>
        </Box>
        <Box
          w="100%"
          h={46}
          marginTop={2}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: theme.fonts.metropolis_Regular,
              color: theme.colors.grey_placeholder
            }}
          >
            Lorem ipsum dolor sit amet, adipici consectetur adipsci ipsum dolor ...
          </Text>

          <Box
            marginTop={3}
            marginBottom={1}
            opacity={0.2}
            borderWidth={2}
            borderRadius={1}
            borderColor={theme.colors.green}
          />
          <Box
            w="45%"
            marginTop={2}
            marginBottom={1}
            position="absolute"
            borderWidth={2}
            borderRadius={1}
            borderColor={theme.colors.green}
            top="100%"
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingRight={1}
            marginTop={1}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: theme.fonts.metropolis_Regular,
                color: theme.colors.green
              }}
            >
              Raised: $6000
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: theme.fonts.metropolis_Regular,
                color: theme.colors.green
              }}
            >
              45%
            </Text>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
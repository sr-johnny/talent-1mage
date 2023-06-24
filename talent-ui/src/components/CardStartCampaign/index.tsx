import React from 'react'

import { Box, Button } from 'native-base'
import { theme } from '../../global/theme'

import CardSVG from '../../assets/card_campaign.svg'
import { TextStartCampaign } from '../TextStartCampaign';

export function CardStartCampaign() {
  return (
    <Box
      zIndex={0}
      borderRadius={16}
      marginTop={5}
      h={176}
      w="100%"
    >
      <CardSVG
        width="100%"
        height="176"
        style={{ zIndex: 1 }}
      />

      <Box
        paddingTop={10}
        paddingLeft={4}
        position="absolute"
        zIndex={1}

      >
        <TextStartCampaign />

        <Button
          backgroundColor={theme.colors.green}
          w="73%"
          h={50}
          marginTop={4}
          borderRadius={10}
          _text={{
            fontSize: 14,
            fontFamily: theme.fonts.poppins_Regular,
            color: theme.colors.white_button
          }}
        >
          Start Campaign
        </Button>
      </Box>

    </Box>
  );
}
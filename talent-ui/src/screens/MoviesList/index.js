import React from 'react'
import { Box } from 'native-base'

import { theme } from '../../global/theme'
import { CardMovie } from '../../components/Card';
import { CardSection } from '../../components/CardSection';
import { LabelHomeScreen } from '../../components/LabelHomeScreen';

export function MoviesList() {
  return (
    <Box
      safeArea
      flex={1}
      backgroundColor={theme.colors.green}
      paddingX={5}
      justifyContent="center"
    >
      <Box backgroundColor={theme.colors.orange}>
        <LabelHomeScreen title="Filmes" />
        <CardSection>
          <CardMovie />
        </CardSection>
      </Box>
    </Box>
  );
}
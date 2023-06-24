import React from 'react'

import { Box, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../global/theme'

import { SearchBar } from '../SearchBar'
import { TitleHomeScreen } from '../TitleHomeScreen'
import { TopBarHome } from '../TopBarHome'
import { CardStartCampaign } from '../CardStartCampaign'
import { LabelHomeScreen } from '../LabelHomeScreen'
import { CardSection } from '../CardSection'
import { Card } from '../Card'
import { IconButton } from '../IconButton'
import { BarTopFundraisers } from '../BarTopFundraisers'
import { CardMyCampaign } from '../CardMyCampaign'

export function HomeScreen() {
  const navigation = useNavigation();

  function getProfileScreen() {
    navigation.navigate('Profile');
  }

  return (
    <Box
      safeArea
      flex={1}
      paddingX={4}
      backgroundColor={theme.colors.white}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      >

        <TopBarHome onPress={getProfileScreen} />

        <TitleHomeScreen />

        <SearchBar />

        <CardStartCampaign />

        <LabelHomeScreen title="Categories" />
        <CardSection>
          <Card title="All" iconName="grid" colorIcon="purple"/>
          <Card title="Campaigns" iconName="volume-2" colorIcon="water"/>
          <Card title="Donate Goods" iconName="briefcase" colorIcon="sky"/>
          <Card title="Charity" iconName="dollar-sign" colorIcon="orange"/>
          <Card title="Events" iconName="calendar" colorIcon="pink"/>
          <Card title="Volunteers" iconName="users" colorIcon="aqua"/>
        </CardSection>

        <LabelHomeScreen title="My Campaign" />
        <CardSection>
          <CardMyCampaign />
        </CardSection>

        <BarTopFundraisers title="Top Fundraisers" />
      </ScrollView>
    </Box>
  );
}
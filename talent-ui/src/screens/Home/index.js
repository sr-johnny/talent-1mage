import React from 'react'

import { Box, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { theme } from '../../global/theme'

import { Card } from '../../components/Card'
import { SearchBar } from '../../components/SearchBar'
import { TopBarHome } from '../../components/TopBarHome'
import { CardSection } from '../../components/CardSection'
import { CardMyCampaign } from '../../components/CardMyCampaign'
import { LabelHomeScreen } from '../../components/LabelHomeScreen'
import { TitleHomeScreen } from '../../components/TitleHomeScreen'
import { CardStartCampaign } from '../../components/CardStartCampaign'
import { BarTopFundraisers } from '../../components/BarTopFundraisers'

export function Home() {
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

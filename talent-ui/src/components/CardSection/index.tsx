import React from 'react'

import { IScrollViewProps, ScrollView } from 'native-base'

type Props = IScrollViewProps;

export function CardSection({...rest}:Props){
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      style={{
        flexDirection: 'row',
        borderRadius: 18,
        paddingEnd: 30,
      }}
      {...rest}
    >

    </ScrollView>
  );
}
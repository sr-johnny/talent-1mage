import React from 'react'

import { Stack, Text, IStackProps } from 'native-base'

import { theme } from '../../global/theme'

type Props = IStackProps & {
  title: string;
}

export function LabelHomeScreen({ title, ...rest}:Props){
  return (
    <Stack marginTop={5} marginBottom={4}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: theme.fonts.poppins_SemiBold,
            color: theme.colors.black_label
          }}
        >
        {title}
        </Text>
      </Stack>
  );
}
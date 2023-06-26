import React from 'react'

import { Box, IBoxProps } from 'native-base'
import SVG from '../../assets/avatar.svg'

type Props = IBoxProps & {
  size: number;
}

export function AvatarSVG({size, ...rest}: Props){
  return (
    <Box
    {...rest}
    >
      <SVG 
        width={size} 
        height={size}
      />
    </Box>
  );
}
import React from 'react'
import { Pressable, Icon, IIconProps } from 'native-base'

import { theme } from '../../global/theme'
import { Feather } from '@expo/vector-icons'

type Props = IIconProps & {
  title: string;
  colorIcon: 'icon' | 'green' | 'grey' | 'black';
}

export function IconButton({ title, colorIcon, ...rest }: Props) {
  function getColorIcon(colorIcon) {
    switch (colorIcon) {
      case 'icon':
        return (theme.colors.icon);
        break;
      case 'green':
        return (theme.colors.green);
        break;
      case 'grey':
        return (theme.colors.grey_icon);
        break;
      case 'black':
        return (theme.colors.balck_label);
        break;
      default:
        console.log("Erro ao selecionar a cor");
    }
  }
  return (
        <Icon
          as={Feather}
          name={title}
          color={getColorIcon(colorIcon)}
          {...rest}
        />
  );
}
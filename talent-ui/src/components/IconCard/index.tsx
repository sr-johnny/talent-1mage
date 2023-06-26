import React from 'react'
import { Pressable, Icon, IIconProps } from 'native-base'

import { theme } from '../../global/theme'
import { Feather } from '@expo/vector-icons'

type Props = IIconProps & {
  title: string;
  colorIcon: string;
}

export function IconCard({ title, colorIcon, ...rest }: Props) {
  function getColorIcon(colorIcon) {
    switch (colorIcon) {
      case 'purple':
        return theme.colors.purple;
        break;
      case 'water':
        return (theme.colors.water);
        break;
      case 'sky':
        return (theme.colors.sky);
        break;
      case 'orange':
        return (theme.colors.orange);
        break;
      case 'pink':
        return (theme.colors.pink);
        break;
      case 'aqua':
        return (theme.colors.aqua);
        break;
      default:
        console.log("Erro ao selecionar a cor");
    }
  }
  return (
    <Pressable>
      <Icon
        as={Feather}
        name={title}
        size={37}
        color={getColorIcon(colorIcon)}
        {...rest}
      />
    </Pressable>
  );
}
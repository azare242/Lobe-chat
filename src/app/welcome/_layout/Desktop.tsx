'use client';

import { Logo } from '@lobehub/ui';
import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import ClientResponsiveLayout from '@/components/client/ClientResponsiveLayout';

import { useStyles } from '../features/Banner/style';
import Image from 'next/image';
const Desktop = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();
  return (
    <Center
      className={styles.layout}
      flex={1}
      height={'100%'}
      horizontal
      style={{ position: 'relative' }}
    >
      {/* <Logo className={styles.logo} size={36} type={'text'} /> */}
      <Image src="/aihub.jpg" alt="aihub" width={100} height={50} className={styles.logo}/>


      <Flexbox className={styles.view} flex={1}>
        {children}
      </Flexbox>
    </Center>
  );
});

export default ClientResponsiveLayout({ Desktop, Mobile: () => import('./Mobile') });

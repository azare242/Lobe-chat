'use client';


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
      <Image  alt="aihub" className={styles.logo} height={50} src="/aihub.jpg" width={100}  />


      <Flexbox className={styles.view} flex={1}>
        {children}
      </Flexbox>
    </Center>
  );
});

export default ClientResponsiveLayout({ Desktop, Mobile: () => import('./Mobile') });

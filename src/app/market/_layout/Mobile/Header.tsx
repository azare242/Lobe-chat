'use client';

import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

import ShareAgentButton from '../../features/ShareAgentButton';
import Image from 'next/image';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={<Image  alt="aihub" height={50} src="/aihub.jpg" width={100}  />}
      right={<ShareAgentButton mobile />}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;

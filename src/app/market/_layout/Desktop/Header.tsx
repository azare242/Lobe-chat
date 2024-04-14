import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import Image from 'next/image';
import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
                      <Image  alt="aihub" className={styles.logo} height={50} src="/aihub.jpg" width={100}  />



          {/* <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} /> */}
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;

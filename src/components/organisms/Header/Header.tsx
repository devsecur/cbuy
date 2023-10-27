import React from 'react';
import styles from './Header.module.scss';
import Typography from '@/components/atoms/typography/Typography';
import { IconRepository } from '@/lib/repository/icon.repository';
import Image from 'next/image';
interface HeaderProps {
  logoSrc?: string;
  onLoginClick?: () => void;
  btnValue: string;
  btnIcon: keyof typeof IconRepository;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc = '/images/Link.png',
  btnIcon,
  btnValue,
  onLoginClick,
}) => {
  const headerClassName = `${styles.container_header}`;
  return (
    <header className={headerClassName}>
      <div className={styles.header_content}>
        <div className={styles.header_image}>
          {/* Image */}
          <Image src={logoSrc} alt='Logo' width={175} height={24} />
        </div>

        <div className={styles.header_login_btn} onClick={onLoginClick}>
          <Typography
            value={btnValue}
            type='h1'
            style={{ fontSize: '14px' }}
            icon={btnIcon}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

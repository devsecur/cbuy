import React from 'react';
import styles from './styles.module.css';
import Header from '@/components/organisms/Header/Header';
import Cta from '@/components/organisms/Cta';
import Video from '@/components/organisms/Video';
import TopOffers from '@/components/organisms/TopOffers';
import Footer from '@/components/organisms/Footer';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Header btnValue={'Login'} btnIcon={'PersonIcon'} />
      <Cta />
      <Video
        videoUrl={
          'https://directus.new.cbuy.expert/assets/825a348a-449e-4a0c-8352-e2251ad32540'
        }
      />
      <TopOffers />
      <Video
        videoUrl={
          'https://directus.new.cbuy.expert/assets/8026ea05-3d15-43dc-b7bb-40db4f63a968'
        }
      />
      <Footer />
    </div>
  );
};

export default LandingPage;

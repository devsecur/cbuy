import React from 'react';
import styles from './styles.module.css';
import Header from '@/components/organisms/Header/Header';
import Cta from '@/components/organisms/Cta';
import Video from '@/components/organisms/Video';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Header btnValue={'bla'} btnIcon={'HeartIcon'} />
            <Cta />
            <Video videoUrl={'https://directus.new.cbuy.expert/assets/825a348a-449e-4a0c-8352-e2251ad32540'} />
        </div>
    );
};

export default LandingPage;

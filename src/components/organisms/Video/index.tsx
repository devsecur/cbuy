import React from 'react';
import styles from './styles.module.css';

interface VideoProps {
    videoUrl: string;
}

const Video: React.FC<VideoProps> = ({ videoUrl }) => {
    return (
        <div className={styles.videoWrapper}>
            <video src={videoUrl} className={styles.video} controls />
        </div>
    );
};

export default Video;

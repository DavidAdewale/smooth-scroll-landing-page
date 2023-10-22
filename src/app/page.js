'use client';
import Intro from '@/components/Intro';
import { useLocomotiveScroll } from '../../hooks/useLocomotiveScroll';

import styles from './page.module.css';
import Description from '@/components/Description';
import Projects from '@/components/Projects';

export default function Home() {
  useLocomotiveScroll();
  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}

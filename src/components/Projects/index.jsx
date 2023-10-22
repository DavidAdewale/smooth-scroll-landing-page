import React, { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './style.module.css';

const projects = [
  {
    title: 'Salar de Atacama',
    src: 'salar_de_atacama.jpg',
  },
  {
    title: 'Valle de la luna',
    src: 'valle_de_la_muerte.jpeg',
  },
  {
    title: 'Miscanti Lake',
    src: 'miscani_lake.jpeg',
  },
  {
    title: 'Miniques Lagoons',
    src: 'miniques_lagoon.jpg',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: '-=100px',
      end: document.body.offsetWeight,
      pin: true,
    });
  }, []);
  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects.at(selectedProject).src}`}
            fill={true}
            alt="image"
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, brown sedge, tota de agua and tola
            amaia
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscada, vicoha and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamout and the three flamingo
            species inabiting in Chile (Andrean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable
          </p>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            onMouseOver={() => setSelectedProject(index)}
            key={`p_${index}`}
            className={styles.projectEl}
          >
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

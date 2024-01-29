import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ArrowDownIcon } from '@radix-ui/react-icons'
import ProjectCard from "@/components/ProjectCard";


const projects = [
  {
    title: 'OURSOS',
    subtitle: 'Combining Community and Techonology',
    description: 'A fully functional app designed to create a safer world that brings people closer together',
    slug: "/OURSOS",
  },
  {
    title: 'Green Generation',
    subtitle: 'Creating a Green World',
    description: 'An experimental web-app designed for youth to promote a more sustainable and proactive future',
    slug: "/resume",
  },
  {
    title: 'Project 3',
    subtitle: 'Subtitle for Project 3',
    description: 'Description for Project 3.',
    slug: "/about",
  },
];


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.landing}>
          <span>
            <Image
              src="/images/Vector.png"
              width={200}
              height={200}
              alt="placegolder"
            />
          </span>
          <div className={styles.center}>
            <h1 className={styles.center}><span>Meelaud Totonchi</span></h1>
            <p className={styles.sub_Header}><span>UI / UX Designer</span></p>
          </div>
        </div>

        <div>
          <p>
            <span>
              Projects
            </span>
            <ArrowDownIcon />
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}

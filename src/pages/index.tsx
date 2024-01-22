import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <div className={styles.projectOne}>
            <span>
              <Image
                src="/images/Vector.png"
                width={100}
                height={100}
                alt="placegolder"
              />
            </span>
            <div className={styles.description}>
              <h4>
                OurSOS (Case study)
              </h4>
              <p>
              Together, we're breaking barriers, connecting communities, and creating a safer world. Whether it's bridging language gaps, obtaining critical information, or staying connected with global news, OurSOS is here to empower you and ensure that safety and connection transcend borders.


              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

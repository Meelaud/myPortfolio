import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, description, slug }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            <Link href={`/projects/${slug}`}>Read more</Link>
        </div>
    );
};

export default ProjectCard;

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Documentation Next.js"
      description="Apprendre Next.js étape par étape 🚀"
    >
      <main className={styles.hero}>
        <div className="container text--center">
          <h1 className="hero__title">Documentation Next.js</h1>
          <p className="hero__subtitle">
            Apprendre Next.js étape par étape 🚀
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/introduction"
            >
              🚀 Commencer la doc
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

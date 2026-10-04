import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Mordheim"
      description="Site des règles de Mordheim - M25">
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100vh - 60px)', // 60px = hauteur approximative de la navbar
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <img
          src="/img/accueil.png"
          alt="Mordheim"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <Link
          to="/mordheim/bienvenue"
          className="button button--primary button--lg"
          style={{
            position: 'relative',
            zIndex: 1,
            marginBottom: '4rem',
          }}>
          Entrer dans Mordheim
        </Link>
      </div>
    </Layout>
  );
}
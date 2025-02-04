import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react';

import nolark from "../public/assets/images/heroNolark.jpg"
import nolarkTop from "../public/assets/images/portfolio-nolark.jpg"

import Image from 'next/image';
export default function Home() {

    return (
        <>
            <Head>
                <title>Accueil</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/engine.ico" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
            </Head>
            <div className='bg-white py-4'>
        <div className='flex justify-between max-w-7xl mx-auto'>
        <Link href="/" className='text-2xl'>FB</Link>

          <ul className='flex items-center space-x-6'>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">A propos</Link></li>
            <li><Link href="/realisations">Mes réalisation</Link></li>
          </ul>
        </div>
      </div>
            <h1 className='text-center'>Nolark</h1>
            <div className='flex items-center justify-center'>
                <Image src={nolarkTop} width={200} height={100} />

            </div>
            <div className='max-w-7xl mx-auto text-white'>
                <span className='my-4 block text-xl'>Le projet : </span>
                <p>
Un site internet présentant les produits de la société Nolark, spécialisée dans la vente de casques de moto variés, et offrant également des simulateurs pour aider les employés à estimer leur rémunération, a été développé dans le cadre d'un projet pratique durant des sessions de formation en développement web.

Ce projet a impliqué l'utilisation des langages HTML, CSS et JavaScript. Une autre version utilisant PHP, le modèle de template TWIG et SQL (avec MySQL) a également été développée.</p>
                <Image src={nolark} width={400} height={600} />

            </div>

        </>
    )
}

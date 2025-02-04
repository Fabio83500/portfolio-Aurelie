import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ginvitation from "../public/assets/images/Ginvitation.jpg";
import gStage from "../public/assets/images/GStage.jpg";
import gPub from "../public/assets/images/GPub.jpg";
import gNoel from "../public/assets/images/GNoel.jpg";
import gHaloween from "../public/assets/images/GHaloween.jpeg";
import gAnnee from "../public/assets/images/GAnnee.jpeg";





export default function Home() {

 

  return (
    <>
      <div className='bg-white py-4'>
        <div className='flex justify-between max-w-7xl mx-auto'>
        <Link href="/" className='text-2xl'>AE</Link>
          <ul className='flex items-center space-x-6'>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">A propos</Link></li>
            <li><Link href="/realisations">Mes réalisation</Link></li>
          </ul>
        </div>
      </div>

      <section className='bg-gradient-to-r from-pink-500 to-pink-900 pb-10' >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <h1 className='text-center'>PROJETS</h1>
          <div className='grid gap-x-10 gap-y-10 text-textBlack sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-8 lg:my-10'>
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={gStage} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                Réalisation de cartons d’invitations pour les anniversaires se déroulant dans l’enceinte de l’entreprise Garden Soccer  
                  
                  </p>
              </div>
            </div>
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={gPub} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                Réalisation d’une publication sur les réseaux sociaux pour des locations de terrains ainsi que pour des réservations d’anniversaire et de diffusion de match de football  pour l’entreprise Garden Soccer  
                   </p>
              </div>
            </div>
           
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={gAnnee} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                Réalisation d’une publicité d’ouverture pour la nouvelle année 2025 pour l’entreprise Garden pizz  
                   </p>
              </div>
            </div>
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={gHaloween} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
Publicité réalisée pour la société Garden pizz également pour le 31 Octobre pour booster les ventes en ce jour d’Halloween  
                   </p>
              </div>
            </div>
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={gNoel} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                Publicité réalisée pour la société Garden Pizz au mois de Décembre pour booster les ventes en période de fêtes
                   </p>
              </div>
            </div>
           
            <div className='bg-blue-300 h-fit shadow-custom-md hover:shadow-custom-lg rounded-2xl transition-custom  '>
              <div className=' object-cover'>
                <Image src={ginvitation} className='rounded-t-2xl object-cover' width={900} height={900} /> 
                </div>
              <div className='px-6 py-4'>
                <p className='text-gray-600'>
                Réalisation de cartons d’invitations pour les anniversaires se déroulant dans l’enceinte de l’entreprise Garden Soccer  
                   </p>
              </div>
            </div>
         
          </div>
     
        </div>

      </section>
    </>
  )
}
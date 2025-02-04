import Link from 'next/link'
import React, { useEffect } from 'react';


export default function Home() {

  return (
    //   <section id="CV">
    //   <div class="container">
    //     <div class="left-side">
    //       <div class="profileText">
    //         <div class="imgBx">
    //           <Image src="image" src={imgCV} width="500" height="500" />
    //         </div>
    //         <h2>Fabio Borner </h2>
    //       </div>
    //       <div class="contactInfo">
    //         <h3 class="title">Informations personelles</h3>
    //         <ul>
    //           <li>

    //             <span class="text"> 06 30 19 46 63</span>
    //           </li>
    //           <li>

    //             <span class="text"> fabio83500@live.fr</span>
    //           </li>
    //           <li>

    //             <span class="text"> La seyne sur mer, France</span>
    //           </li>
    //           <li>

    //             <span class="text"> www.linkedin.com</span>
    //           </li>

    //           <li>

    //             <span class="text"> www.github.com</span>
    //           </li>


    //         </ul>
    //       </div>
    //       <div class="contactInfo centreInteret">
    //         <h3 class="title">Centre d'interet</h3>
    //         <ul>
    //           <li>Le football</li>
    //           <li>Sport de combat</li>
    //           <li>Automobile</li>

    //         </ul>
    //       </div>
    //     </div>




    //     <div class="right-side"></div>

    //   </div>
    // </section>
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

      <section className='bg-gradient-to-r from-pink-500 to-pink-900' >
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-0 pb-10'>
          <h1 className='text-center mb-4 text-lg pt-8 lg:pt-4 lg:text-6xl'>Informations personelles</h1>
          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 justify-between items-center'>
            <div className='md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-custom-lg'>
              <h1 className='text-black text-base font-medium mb-8 text-center'>Experiences professionelles</h1>
              <div className='flex flex-col space-y-6'>
                <div>
                  <span className='block text-gray-700'>2021 - Actuellement : Vendeuse</span>
                  <span className='text-sm text-gray-700 block'>Garden Soccer </span>
                </div>

                <div>
                  <span className='block text-gray-700'>2024 - Actuellement: Présidente de SAS CLA</span>
                  <span className='text-sm text-gray-700 block'>Garden Pizz</span>
                </div>
              </div>

            </div>
           
            <div className='md:w-1/3 bg-gray-100 rounded-lg p-4 custom-lg'>
              <h1 className='text-black text-base font-medium mb-8 text-center'>Parcours scolaire</h1>
              <div className='flex flex-col space-y-6'>
                <div>
                  <span className='block text-gray-700'>2018: CAP petite enfance </span>
                  <span className='text-sm text-gray-700 block'>Lycée Parc Saint Jean </span>
                </div>

                <div>
                  <span className='block text-gray-700'>2013: Baccalauréat ST2S </span>
                  <span className='text-sm text-gray-700 block'>Lycée Bonaparte </span>
                </div>

                <div>
                  <span className='block text-gray-700'>2010: Brevet des collèges </span>
                  <span className='text-sm text-gray-700 block'>collège Pierre Puget</span>
                </div>
              </div>

            </div>

          </div>

          <div className='bg-gray-100 p-20 shadow-custom-lg w-full p-3 rounded-lg flex flex-col items-center mt-10'>
            
            <span className='text-2xl '>Aurelie Egea</span>
            <p className='pt-8'>
            J'aimerai suivre cette formation pour acquérir certaines compétences pour les mettre aux profits de mon entreprise sur la communication et le développement qui est à mes yeux très important de nos jours.
            <br /> <br />
            Mon côté créatif correspond aux valeurs de la formation Graphiste c’est pourquoi pour le bien de mon entreprise je souhaiterai adhérer à celle ci  
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
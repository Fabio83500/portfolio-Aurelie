import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import imgCV from "../public/assets/images/imgCv.jpg";
import Image from 'next/image';
export default function Home() {
  useEffect(() => {
    const titreSpans = document.querySelectorAll("h1 span");
    const btns = document.querySelectorAll(".btn-first");
    const logo = document.querySelector(".logo");
    const medias = document.querySelectorAll(".bulle");
    const l1 = document.querySelector(".l1");
    const l2 = document.querySelector(".l2");
    const textAnim = document.querySelector("p");
    var app = document.getElementById("textAnim");

    console.log(textAnim);

    // NavBar
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", this.window.scrollY > 0);
    });

    // Animation texte
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 40,
    });

    typewriter
      .typeString("Apprenti, développeur")
      .pauseFor(200)
      .typeString(
        '<strong> <span style="color: #27ae60;">  web</span>!</strong>'
      )
      .pauseFor(300)
      .deleteChars(4)
      .typeString(
        '<strong><span style="color: #ff6910;"> Javascript </span>!</strong>'
      )
      .pauseFor(300)
      .deleteChars(12)
      .typeString('<strong><span style="color: #27ae60;"> CSS </span>!</strong>')
      .pauseFor(300)
      .deleteChars(5)
      .typeString(
        '<strong><span style="color: midnightblue;"> SQL </span>!</strong>'
      )
      .pauseFor(2000)
      .start();
  }, []);
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/engine.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
      </Head>
      <section id="Accueil">
        <header>
          <a href="/" class="nom">AE</a>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">A propos</a></li>
            <li><a href="/realisations">Mes réalisations</a></li>
          </ul>
        </header>
        <section class="banner"></section>
        <div class="header cible-du-filtre-css   d">


          <div class="container-first ">
            <div>
              <h1 className=''>
                Aurelie Egea
              </h1>
              <div className='flex justify-center items-center '>

              </div>
              
              <div className='flex items-center justify-center space-x-4'>
                <a href='/about' className=' bg-white w-fit p-4 rounded-lg font-medium'>A Propos</a>
                <a href='/realisations' className=' bg-white w-fit p-4 rounded-lg font-medium'>Mes réalisations</a>
              </div>
            </div>


          </div>
        </div>
      </section>


    </>
  )
}

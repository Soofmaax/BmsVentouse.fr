/*
==========================================================================
  FICHIER : main.js
  PROJET : BMS Ventouse
  VERSION : 2.0 (Version Robuste & Accessible)
  DESCRIPTION : Gère toutes les animations et interactions du site.
                Ce script est conçu pour être performant, accessible et
                facile à maintenir.
  DÉPENDANCES : Anime.js (chargé via CDN avant ce script)
==========================================================================
*/

// On utilise le mode strict pour un code plus propre et moins sujet aux erreurs.
'use strict';

// --- POINT D'ENTRÉE PRINCIPAL ---
// On attend que le DOM soit entièrement chargé et parsé avant d'exécuter nos scripts.
// C'est une sécurité pour s'assurer que tous les éléments HTML existent.
document.addEventListener('DOMContentLoaded', function() {

    // ==========================================================================
    // 1. GESTION DE L'ACCESSIBILITÉ : PREFERS-REDUCED-MOTION
    // --------------------------------------------------------------------------
    // On vérifie si l'utilisateur a demandé de réduire les animations dans
    // les préférences de son système d'exploitation. Si c'est le cas,
    // on désactive toutes les animations JavaScript et on arrête le script.
    // C'est une pratique essentielle pour un web inclusif.
    // ==========================================================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log("Animations réduites : L'utilisateur a désactivé les animations.");
        // On pourrait aussi forcer l'affichage des éléments cachés par data-aos, etc.
        return; // On arrête l'exécution du reste du script.
    }


    // ==========================================================================
    // 2. GESTION DES ERREURS ET DE LA PERFORMANCE
    // --------------------------------------------------------------------------
    // On enveloppe notre logique d'animation dans un bloc try...catch.
    // Si une erreur se produit (ex: Anime.js ne se charge pas), le site ne
    // plantera pas et on pourra afficher un message d'erreur en console.
    // ==========================================================================
    try {
        // --- Attente du chargement des ressources critiques (polices) ---
        // Pour éviter un "flash" de texte avec la mauvaise police (FOUT),
        // on attend que les polices CSS soient prêtes avant de lancer les animations.
        document.fonts.ready.then(function () {
            console.log("Polices chargées, lancement des animations.");
            initializeAnimations();
        });

    } catch (error) {
        console.error("Erreur lors de l'initialisation des animations :", error);
        // En cas d'erreur, on pourrait prévoir un "plan B", par exemple,
        // forcer l'affichage des éléments qui devaient être animés.
    }

});


// ==========================================================================
// FONCTION D'INITIALISATION DES ANIMATIONS
// --------------------------------------------------------------------------
// On centralise l'appel de toutes nos animations dans une seule fonction
// pour une meilleure organisation.
// ==========================================================================
function initializeAnimations() {

    // --- Animation de la séquence d'accueil (Hero) ---
    // Crée une chorégraphie pour l'arrivée des éléments de la section Hero.
    const heroTimeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1200 // Une durée légèrement plus longue pour un effet plus doux.
    });

    heroTimeline
        .add({
            targets: '.hero h1',
            opacity: [0, 1],
            translateY: [40, 0],
            // On ajoute une légère rotation pour un effet plus dynamique
            rotate: ['-3deg', '0deg'],
            duration: 1000,
            delay: 200
        })
        .add({
            targets: '.hero p',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800
        }, '-=700') // Chevauchement pour une transition fluide
        .add({
            targets: '.hero-buttons .btn',
            opacity: [0, 1],
            scale: [0.7, 1],
            duration: 600,
            delay: anime.stagger(100) // Apparition décalée des boutons
        }, '-=500');


    // --- FUTURES ANIMATIONS (Exemple : au défilement) ---
    // C'est ici que l'on ajoutera le code pour les animations qui se
    // déclenchent au scroll, en utilisant un Intersection Observer
    // pour la performance.
    // initializeScrollAnimations();
}


/*
// --- EXEMPLE DE STRUCTURE POUR LES ANIMATIONS AU SCROLL (À ACTIVER PLUS TARD) ---

function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Lancer une animation Anime.js sur entry.target
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                observer.unobserve(entry.target); // Animer une seule fois
            }
        });
    }, {
        threshold: 0.1 // Déclencher quand 10% de l'élément est visible
    });

    animatedElements.forEach(el => {
        el.style.opacity = 0; // Cacher l'élément initialement
        observer.observe(el);
    });
}
*/

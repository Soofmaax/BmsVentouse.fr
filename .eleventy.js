/**
 * ==========================================================================
 * FICHIER DE CONFIGURATION POUR ELEVENTY
 * ==========================================================================
 * Ce fichier contrôle la manière dont Eleventy construit le site.
 * Il définit les dossiers à copier, les bibliothèques à utiliser, etc.
 */

// Importation du plugin sitemap pour la génération automatique du plan du site.
const sitemap = require("@11ty/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {

  // --------------------------------------------------------------------------
  // PLUGINS
  // --------------------------------------------------------------------------
  // On active ici les plugins qui ajoutent des fonctionnalités à Eleventy.

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.bmsventouse.fr",
    },
  });


  // --------------------------------------------------------------------------
  // PASSTHROUGH FILE COPY
  // --------------------------------------------------------------------------
  // Indique à Eleventy de copier ces fichiers/dossiers directement dans le
  // site final, sans essayer de les transformer.

  // Dossiers d'assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  // Fichiers de la racine (favicons, PWA, SEO)
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Fichiers de configuration pour l'hébergement (au cas où)
  // Bien que nous utilisions netlify.toml, les garder ici ne coûte rien.
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");


  // --------------------------------------------------------------------------
  // CONFIGURATION DES DOSSIERS
  // --------------------------------------------------------------------------
  // Définit la structure de notre projet.

  return {
    dir: {
      input: ".",             // Les fichiers sources sont à la racine.
      includes: "_includes",    // Les composants sont dans _includes.
      output: "_site"           // Le site final sera généré dans _site.
    },

    // Permet d'utiliser des fonctionnalités avancées (variables, includes)
    // directement dans les fichiers .html.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

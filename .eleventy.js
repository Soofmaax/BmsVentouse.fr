/**
 * ==========================================================================
 * FICHIER DE CONFIGURATION POUR ELEVENTY
 * ==========================================================================
 * Ce fichier contrôle la manière dont Eleventy construit le site.
 */

module.exports = function(eleventyConfig) {

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

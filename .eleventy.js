/**
 * ==========================================================================
 * FICHIER DE CONFIGURATION POUR ELEVENTY
 * ==========================================================================
 * Ce fichier contrôle la manière dont Eleventy construit le site.
 * Il définit les dossiers à copier, les bibliothèques à utiliser, etc.
 *
 * Documentation officielle : https://www.11ty.dev/docs/config/
 */

module.exports = function(eleventyConfig) {

  // --------------------------------------------------------------------------
  // PASSTHROUGH FILE COPY
  // --------------------------------------------------------------------------
  // Par défaut, Eleventy ne traite que les fichiers de contenu (html, md).
  // Cette section lui indique de copier certains dossiers et fichiers
  // directement dans le site final, sans les modifier.

  // Copie les dossiers contenant les assets statiques.
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");

  // Copie les fichiers importants de la racine (favicons, etc.).
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png");

  // Copie les fichiers de configuration spécifiques à Netlify.
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");


  // --------------------------------------------------------------------------
  // CONFIGURATION DES DOSSIERS
  // --------------------------------------------------------------------------
  // Cette section indique à Eleventy où trouver les fichiers sources
  // et où placer le site généré.

  return {
    // Le dossier `_site` sera le résultat final à déployer.
    // C'est ce dossier que Netlify devra publier.
    dir: {
      input: ".",         // Les fichiers d'entrée sont à la racine du projet.
      includes: "_includes", // Le dossier pour les composants réutilisables (layouts, etc.).
      output: "_site"       // Le dossier où le site final sera généré.
    },

    // Permet d'utiliser le moteur de template Nunjucks dans les fichiers HTML,
    // ce qui nous autorise à utiliser des variables `{{ }}` et des logiques `{% %}`.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
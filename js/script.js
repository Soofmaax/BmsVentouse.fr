/**
 * ==========================================================================
 * Script principal pour BMS Ventouse
 * Version: 1.0
 * Description: Gère les interactions sur le site, comme l'accordéon de la FAQ.
 * ==========================================================================
 */

// 'DOMContentLoaded' s'assure que le script ne s'exécute que lorsque
// la totalité de la page HTML est chargée et prête. C'est une bonne pratique
// pour éviter les erreurs.
document.addEventListener('DOMContentLoaded', () => {

  /**
   * --------------------------------------------------------------------------
   * MODULE: ACCORDÉON POUR LA FAQ
   * --------------------------------------------------------------------------
   * Rend les questions de la FAQ cliquables pour afficher/masquer les réponses.
   * Un seul élément peut être ouvert à la fois.
   */
  
  // 1. On sélectionne tous les éléments qui servent de "bouton" pour les questions.
  const faqQuestions = document.querySelectorAll('.faq-question');

  // 2. On vérifie s'il y a bien des questions sur la page avant de continuer.
  if (faqQuestions.length > 0) {
    
    // 3. On ajoute un "écouteur d'événement" (un mouchard) sur chaque question.
    //    Ce mouchard attend un clic de l'utilisateur.
    faqQuestions.forEach(questionButton => {
      questionButton.addEventListener('click', () => {
        
        // 4. Quand un clic est détecté, on récupère l'élément parent '.faq-item'
        //    qui contient à la fois la question et la réponse.
        const currentFaqItem = questionButton.parentElement;
        
        // 5. On vérifie si la question cliquée est déjà ouverte.
        //    On utilise une classe 'is-open' pour savoir l'état.
        const isAlreadyOpen = currentFaqItem.classList.contains('is-open');

        // 6. AVANT D'OUVRIR, on ferme toutes les autres réponses qui pourraient être ouvertes.
        //    C'est ce qui garantit qu'une seule réponse est visible à la fois.
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('is-open'); // On retire la classe 'is-open'
          // On cache aussi la réponse directement pour plus de robustesse
          item.querySelector('.faq-answer').style.maxHeight = null; 
        });

        // 7. Si la question cliquée n'était PAS déjà ouverte, on l'ouvre.
        if (!isAlreadyOpen) {
          currentFaqItem.classList.add('is-open'); // On ajoute la classe
          const answer = currentFaqItem.querySelector('.faq-answer');
          // On définit la hauteur maximale pour créer une animation de déploiement CSS
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        // Si elle était déjà ouverte, le code ci-dessus l'aura fermée, donc on ne fait rien de plus.
      });
    });
  }
  
  // Vous pourrez ajouter d'autres modules ici (ex: menu mobile, animations...)

});

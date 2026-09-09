const MILISSEGUNDOS_FEEDBACK = 2000;

function copyFeedbackMessage(success) {
  return success
    ? { rotulo: '✅', mensagem: 'Link copiado!' }
    : { rotulo: '⚠️', mensagem: 'Não foi possível copiar o link' };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { copyFeedbackMessage };
} else {
  (function () {
    const button = document.getElementById('copy-link');
    if (!button) return;

    const originalLabel = button.textContent;
    const originalAriaLabel = button.getAttribute('aria-label');
    let feedbackTimer = null;

    async function handleClick() {
      let success = true;
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch (err) {
        success = false;
        console.error('Falha ao copiar o link para a área de transferência', err);
      }

      const feedback = copyFeedbackMessage(success);
      button.textContent = feedback.rotulo;
      button.setAttribute('aria-label', feedback.mensagem);
      button.title = feedback.mensagem;

      clearTimeout(feedbackTimer);
      feedbackTimer = setTimeout(() => {
        button.textContent = originalLabel;
        button.setAttribute('aria-label', originalAriaLabel);
        button.removeAttribute('title');
      }, MILISSEGUNDOS_FEEDBACK);
    }

    button.addEventListener('click', handleClick);
  })();
}

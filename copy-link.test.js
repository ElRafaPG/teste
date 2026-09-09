const test = require('node:test');
const assert = require('node:assert/strict');
const { copyFeedbackMessage } = require('./copy-link.js');

test('feedback de sucesso ao copiar', () => {
  assert.deepEqual(copyFeedbackMessage(true), { rotulo: '✅', mensagem: 'Link copiado!' });
});

test('feedback de erro quando a cópia falha', () => {
  assert.deepEqual(copyFeedbackMessage(false), {
    rotulo: '⚠️',
    mensagem: 'Não foi possível copiar o link',
  });
});

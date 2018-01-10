import 'babel-polyfill';

const $button = document.getElementById('btn-load-module');

$button.addEventListener('click', async () => {
    const { default: alerta } = await import('./alerta.js');
    alerta();
});
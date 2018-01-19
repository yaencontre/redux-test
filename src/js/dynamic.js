import 'babel-polyfill';

const $button1 = document.getElementById('btn-load-module');
const $button2 = document.getElementById('btn-render');

$button1.addEventListener('click', async () => {
    const { default: alerta } = await import('./alerta.js');
    alerta();
});

$button2.addEventListener('click', async () => {
    const { default: template } = await import('./test_twig.js');
    const $container = document.getElementById('render-box');
    $container.innerHTML = template.render();
});
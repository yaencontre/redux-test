import store from './store';

function render() {
    const $container = document.getElementById('playlist');
    const playlist = store.getState();
    $container.innerHTML = '';

    playlist.forEach((item) => {
        const template = document.createElement('p');
        template.textContent = item.title;
        $container.appendChild(template);
    });
}
render();


const  $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    //console.log(title);
    store.dispatch({
        type: 'ADD_SONG',
        payload: {title}
    });
}


function handleChange() {
    render();
}


store.subscribe(handleChange);
console.log(store.getState());

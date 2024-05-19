let addCard = document.getElementById('addCard');

document.querySelector('#taskAdd').classList.add('scroll');

addCard.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener el valor del campo de entrada de texto, evalua el texto del input
    const task = document.getElementById('task').value.toUpperCase();

    // Crear un nuevo elemento de tarjeta
    let newCard = document.createElement('article');
    newCard.classList.add('container', 'my-2');
    document.querySelector('#taskAdd').appendChild(newCard);

    // Encabezado de la tarjeta
    let headerCard = document.createElement('header');
    headerCard.classList.add('rounded-top','my-1');
    newCard.appendChild(headerCard);

    // Crear un párrafo para mostrar el nombre de la tarea
    let taskName = document.createElement('h5');
    taskName.classList.add('marginSpace-y')
    taskName.textContent = task; // Asignar el nombre de la tarea
    headerCard.appendChild(taskName);

    let bodyCard = document.createElement('div');
    newCard.appendChild(bodyCard);

    let bodyText = document.createElement('textarea');
    bodyCard.appendChild(bodyText);
    bodyText.style.resize = 'none';
    bodyText.style.width = '100%';
    bodyText.classList.add('rounded', 'mb-3','font')
    bodyText.setAttribute('rows','4');

    let hr = document.createElement('hr')
    bodyCard.appendChild(hr)

});

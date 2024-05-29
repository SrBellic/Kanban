let addCard = document.getElementById("addCard");
document.querySelector("#taskAdd").classList.add("scroll");
let idCard = 0;

let nextButton = document.getElementById("nextButton");
document.querySelector("#taskDoing").classList.add("scroll");

addCard.addEventListener("click", (e) => {
  //función para prevenir comportamientos por defectos
  e.preventDefault();
  //Contador para aumentar los IDs de las tarjetas
  idCard++;

  // Obtener el valor del campo de entrada de texto, evalua el texto del input
  const task = document.getElementById("task").value.toUpperCase();

  // Crear un nuevo elemento de tarjeta
  let newCard = document.createElement("article");
  newCard.classList.add("container", "my-2");
  document.querySelector("#taskAdd").appendChild(newCard);
  newCard.setAttribute("id", `card${idCard}`);

  // Encabezado de la tarjeta
  let headerCard = document.createElement("header");
  headerCard.classList.add("rounded-top", "my-1");
  newCard.appendChild(headerCard);

  // Crear un párrafo para mostrar el nombre de la tarea
  let taskName = document.createElement("h5");
  taskName.classList.add("marginSpace-y");
  taskName.textContent = task; // Asignar el nombre de la tarea
  headerCard.appendChild(taskName);

  //Cuerpo de la tarjeta
  let bodyCard = document.createElement("div");
  newCard.appendChild(bodyCard);

  //Textarea donde se escribirá la descripción de la tarea
  let bodyText = document.createElement("textarea");
  bodyCard.appendChild(bodyText);
  bodyText.style.resize = "none";
  bodyText.style.width = "100%";
  bodyText.style.border = "none";
  bodyText.classList.add("rounded", "mb-3", "font");
  bodyText.setAttribute("rows", "4");
  bodyText.setAttribute("id", `textarea${idCard}`);

  let hr = document.createElement("hr");
  bodyCard.appendChild(hr);
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  const next = document.getElementById(`card${idCard}`);

  const nextText = document.getElementById(`textarea${idCard}`).value;

  let nextCard = document.createElement("article");
  nextCard.classList.add("container", "my-2");
  nextCard.setAttribute("id", `card${idCard}`);
  document.querySelector("#taskDoing").appendChild(nextCard);

  nextCard.innerHTML = next.innerHTML;

  nextCard.querySelector("textarea").value = nextText;
  //Borra las tarjetas viejas
  next.remove();

  console.log(nextCard);
});

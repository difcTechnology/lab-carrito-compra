let botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach((boton, index) => {
  boton.addEventListener('click',function(){
  console.log(boton.dataset.nombre);
  console.log(boton.dataset.precio);  
  });
});
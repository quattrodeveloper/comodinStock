/*
let nombrelista = 'altaprod4'
let estado_lista = nombrelista + '_estadolista'

let buscador = nombrelista + '_buscador'

estado_lista
0 = vacio
1 = en uso
*/

let estado_lista = nombrelista + '_estadolista'
let buscador = nombrelista + '_buscador'

function pin() {
  if (!$("#buscador").prop("disabled")) {
    bloquearpin()
  } else
    if ($("#buscador").prop("disabled")) {
      desbloquearpin()
    }


}


function bloquearpin() {
  var altaprod1 = localStorage.getItem(nombrelista)
  var buscador = $("#buscador").val()

  localStorage.setItem(nombrelista, buscador); //guardar el input en la base de datos
  $("#buscador").prop("disabled", true); //bloquear input
  $('#pin').removeClass("mdi-pin-outline"); //remover pin inactivo
  $("#pin").addClass("mdi-pin"); //agregar pin activo
  lista(buscador)
}
function desbloquearpin() {
  localStorage.setItem(nombrelista, '');
  $("#buscador").prop("disabled", false)
  $("#buscador").val('')
  $('#labelbuscador').show()
  $("#pin").removeClass("mdi-pin")
  $('#pin').addClass("mdi-pin-outline")

  let filtro = ''
  lista(filtro)
}

function seleccionarItem(idItem) {


  if (idItem == localStorage.getItem(nombrelista)) {
    console.log('localstorage es igual a parametro se vacio localstorage')
    localStorage.setItem(nombrelista, "0");
    localStorage.setItem(estado_lista, "0");

    $("a[id^='link-']").show();
    $('#check-' + idItem).removeClass("mdi-pin colorgris");
    $('#check-' + idItem).addClass("mdi-pin-outline colorgris");



  } else {
    console.log('se cargo la nombrelista con valor en localstorage y se cargo otro parametro')
    localStorage.setItem(nombrelista, idItem);
    localStorage.setItem(estado_lista, "1");
    $("a[id^='link-']").hide();
    $("#link-" + idItem).show();
    $('#check-' + idItem).removeClass("mdi-pin-outline"); //remover pin inactivo
    $('#check-' + idItem).addClass("mdi-pin"); //agregar pin activo  
  }
}

function cargarLista() {
  if (localStorage.getItem(estado_lista) == '1') {
    let idItem = localStorage.getItem(nombrelista)
    $("a[id^='link-']").hide();
    $("#link-" + idItem).show();
    $('#check-' + idItem).removeClass("mdi-pin-outline colorgris"); //remover pin inactivo
    $('#check-' + idItem).addClass("mdi-pin colorgris"); //agregar pin activo  
  } else {
    $("a[id^='link-']").show();
  }

  if (localStorage.getItem(nombrelista)) {
    var filtro = localStorage.getItem(nombrelista);
    lista(filtro)
    $("#buscador").val(filtro);
    $("#buscador").prop("disabled", true); //bloquear input
    $('#labelbuscador').hide(); //borrar el label
    $('#pin').removeClass("mdi-pin-outline"); //remover pin inactivo
    $("#pin").addClass("mdi-pin"); //agregar pin activo




  }


}

function lista() {
  let filtro = $("#buscador").val();
  let cant = 0;
  $("ul li").each(function () {
    if ($(this).text().search(new RegExp(filtro, "i")) < 0) {
      $(this).hide();
    } else {
      $(this).show()
      cant++;
    }
  });
  if (filtro == '') { cant = cant - 2; }
  $('#cant').html('(' + cant + ')')
}

$(document).ready(function () {
  lista();
  $("#buscador").keyup(lista);
})
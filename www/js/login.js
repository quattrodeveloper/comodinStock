document.addEventListener("DOMContentLoaded", function () {
	$('.preloader-background').delay(10).fadeOut('slow');
});

$("#submit").click(function (event) {
	event.preventDefault();
	var formData = {};
	var invalido = 0;
	removeClass()
	// $(".modal").modal();
	$('.validate').each(function () {
		console.log($(this).val())
		if ($(this).val() == "") {
			invalido = 1;
			$(this).parent().addClass("has-error");
		} else {
			$(this).parent().removeClass("has-error");
			value = $(this).val();
			$nombre = $(this).attr('name');
			formData[$nombre] = value;
		}
	});

	formData['rememberme'] = 0;
	if ($('#remember_me_checkbox').is(':checked')) {
		formData['rememberme'] = 1;
	}

	if (invalido == 1) {
		$("#msg_alert").addClass("new badge red lighten-2");
		$("#msg_title").html("Atenci&oacute;n!");
		$("#msg_text").html("Complete los campos");
		return false;
	}

	if (navigator.onLine) {
		// before Send
		$("#msg_alert").addClass("new badge blue lighten-2");
		$("#msg_title").html("Aguarde!");
		$("#msg_text").html("Autenticando...");
		const version  = '1528'
		const loginurl = config.urlServer + 'login/' + formData['username'] + '&' + formData['password'] + '&' + version
		console.log(loginurl)
		$.ajax({
			type: 'GET',
			url: loginurl,
			dataType: 'json',
			// encode      : true
			success: function (data) {
				removeClass()
				// return false;
				console.log(data)
				if (data.status != "success") {
					if (data.error == 'version') {
						swal(data.msg, '', "error")
							.then((value) => {
							});
						return false;
					}
					if (data.error == 'servidor') {
						swal(data.msg, '', "error")
							.then((value) => {
							});
						return false;
					}
					$("#msg_alert").addClass("new badge amber lighten-2");
					$("#msg_title").html("Atenci&oacute;n!");
					$("#msg_text").html(data.message);
					return false;
				}

				localStorage.login = data.data.token;
				localStorage.img = data.data.img;
				localStorage.user = data.data.user;
				localStorage.rol = data.data.rol;
				localStorage.idusu = data.data.id_usu;
				localStorage.permisos = JSON.stringify(data.data.permisos);
				let today = new Date().toISOString().slice(0, 10)
				localStorage.hoy = today
				$("#msg_alert").addClass("new badge teal lighten-2");
				$("#msg_title").html("Correcto!");
				$("#msg_text").html("Ingresando al Sistema...");
				// console.log(data)
				window.location.href = "./index.html";
			},
			error: function (xhr, textStatus, errorThrown) {
				console.log(xhr)
				console.log(textStatus)
				console.log(errorThrown)
				swal("No se pudo completar la operaci??n: ", xhr.status + " " + xhr.statusText, "error")
					.then((value) => {
					});
			}
		});
	} else {
		swal("No tiene conexion a internet!", 'Intentelo de nuevo!', "error");
	}
});

function removeClass() {
	$("#msg_alert").removeClass("show");
	$("#msg_alert").removeClass("new badge teal amber red blue  lighten-2");
	$("#msg_title").html("");
	$("#msg_text").html("");
}
setTimeout(function(){
	$("#cadastro_modal").modal("show");
}, 100)

// setTimeout(function(){
// 	$("#cadastro_modal").modal("hide");
// }, 5000)

$('#vendas_collapse').on('show.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver menos");
})

$('#vendas_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver mais");
})

$(window).on("scroll", function(){
	var distanciaDoTopo = $(window).scrollTop();

	if (distanciaDoTopo > 300) {
		distanciaDoTopo = 300;
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 10) + "px");
})

var opcoesSR = {
	delay: 300,
	duration: 1000,
	origin: 'bottom',
	distance: '50px',
	viewOffset: {
        bottom: 300
    }
}
ScrollReveal().reveal('#clientes-box', opcoesSR)
ScrollReveal().reveal('.feature', opcoesSR)


$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})


$("#salvar_cadastro").on("click", function(){
	var valorNome = $("#input_nome").val()

	if (valorNome.length > 0) {
		$(".alert.alert-success").show()
	} else {
		$(".alert.alert-warning").show()
	}
})
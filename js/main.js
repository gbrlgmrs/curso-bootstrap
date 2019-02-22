// setTimeout(function(){
// 	$("#cadastro_modal").modal("show");
// }, 100)

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

	if (distanciaDoTopo > 400) {
		distanciaDoTopo = 400;
	}

	$("#header_shadow").css("top", (distanciaDoTopo / 15) + "px");
})
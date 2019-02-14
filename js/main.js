// setTimeout(function(){
// 	$("#cadastro_modal").modal("show");
// }, 100)

// setTimeout(function(){
// 	$("#cadastro_modal").modal("hide");
// }, 5000)

$('#vendas_collapse').on('show.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver menos")
})

$('#vendas_collapse').on('hidden.bs.collapse', function () {
  $('a[href="#vendas_collapse"]').text("Ver mais")
})
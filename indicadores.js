(function () {
  var hoy = new Date();
  var dd = String(hoy.getDate()).padStart(2, '0');
  var mm = String(hoy.getMonth() + 1).padStart(2, '0');
  var yyyy = hoy.getFullYear();
  var fechaTexto = dd + '/' + mm + '/' + yyyy;
  ['nav-date', 'nav-date-2'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = fechaTexto;
  });
})();

fetch('https://mindicador.cl/api')
  .then(function (r) { return r.json(); })
  .then(function (data) {
    var ufText = data.uf ? data.uf.valor.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : null;
    var usdText = data.dolar ? data.dolar.valor.toLocaleString('es-CL', { maximumFractionDigits: 0 }) : null;
    ['uf-value', 'uf-value-2'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && ufText) el.textContent = ufText;
    });
    ['usd-value', 'usd-value-2'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && usdText) el.textContent = usdText;
    });
  })
  .catch(function () {});

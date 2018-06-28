if(!InSalesVueComponents) var InSalesVueComponents = {};

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Vue == 'undefined') {
    console.warn('Vue не подключен!');
    return;
  }

  for (var name in InSalesVueComponents) {
    if (InSalesVueComponents.hasOwnProperty(name)) {
      Vue.component(name, InSalesVueComponents[name])
    }
  }

  var $wraper = document.getElementById('insales-theme');
  if (!$wraper) {
    console.warn('На странице нет #insales-theme!');
    return false;
  }

  if ($wraper && !$wraper.__vue__) {
    var InsalesTheme = new Vue({
      el: '#insales-theme',
      template: ""
    })
    return InsalesTheme;
  }
});

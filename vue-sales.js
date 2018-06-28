/**
 * InSalesVueComponents - Объект для добавления компонетов
 InSalesVueComponents['logo'] = {
   props: {
     image: String,
     title: String
   },
   template: '<img v-if="image" :src="image" /><span v-else>{{ title }}</span>'
 }

 liquid
 <logo image="{{ 'logo.svg' | asset_url_if_exists }}" title="{{ account.title }}"></logo>
*/

if(!InSalesVueComponents) var InSalesVueComponents = {};

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Vue == 'undefined') {
    console.warn('Vue не подключен!');
    return;
  }

  // Добавление компонентов
  for (var name in InSalesVueComponents) {
    if (InSalesVueComponents.hasOwnProperty(name)) {
      Vue.component(name, InSalesVueComponents[name])
    }
  }

  // Проверка родительского контейнера
  var $wraper = document.getElementById('insales-theme');
  if (!$wraper) {
    console.warn('На странице нет #insales-theme!');
    return false;
  }

  // Инициализация Vue
  if ($wraper && !$wraper.__vue__) {
    var InsalesTheme = new Vue({
      el: '#insales-theme',
      template: ""
    });
  }
});

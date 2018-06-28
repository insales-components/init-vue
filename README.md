# VueSales

Инициализация Vue.js и компонентов магазина.

Контейнер приложения *#insales-theme*

## Пример компонента

```js
InSalesVueComponents['logo'] = {
  props: {
    image: String,
    title: String
  },
  template: '<img v-if="image" :src="image" /><span v-else>{{ title }}</span>'
}
```

```twig
<logo image="{{ 'logo.svg' | asset_url_if_exists }}" title="{{ account.title }}"></logo>
```

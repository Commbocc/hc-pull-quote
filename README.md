# hc-pull-quote

> A Vue.js project

## Basic Use

Include the "Pull Quote" script in the __FINAL__ presentation details of the Sitecore page you'd like the Pull Quote to be placed.

* Placeholder `script-content`
* Data Source `/sitecore/cotnent/Global/Scripts/Pull Quote`

Place the following code in the body of the article, replacing the `href`, `img-src` and `img-alt` attributes as well as the text within the `<a>` element:

```html
<div class="hc-pull-quote">
  <a href="#" is="PullQuote" img-src="#" img-alt="">
    Your Text Here
  </a>
</div>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

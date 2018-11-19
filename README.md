# hc-pull-quote

> A Vue.js project

## Basic Use

Include the "Pull Quote" script in the __FINAL__ presentation details of the Sitecore page you'd like the Pull Quote to be placed.

* Placeholder `script-content`
* Data Source `/sitecore/cotnent/Global/Scripts/Pull Quote`

Place the following code in the body of the article:

```html
<div class="hc-pull-quote">
  <a href="#" is="PullQuote">
    Your Text Here
    <img src="library/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.ashx" alt="Alt Text">
  </a>
</div>
```

Replace the `href` attribute and the text within the `<a>` element of the `PullQuote` component. Replace the `<img>` code by inserting or pasting a Sitecore image.

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

<template>
  <a href="#">
    <div class="row no-margin no-gutters align-items-center">
      <div class="col-xs-12 col-sm-4 col-sm-push-8">
        <img :src="imgSrc" :alt="imgAlt" class="img-responsive img-fluid img-circle img-thumbnail center-block">
      </div>

      <div class="col-xs-12 col-sm-8 col-sm-pull-4">
        <blockquote class="h2 font-italic text-muted">
          <slot></slot>
        </blockquote>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>

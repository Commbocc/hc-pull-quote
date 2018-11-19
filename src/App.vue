<template>
  <a v-if="formattedSlotContent" href="#">
    <div class="row no-margin no-gutters align-items-center">
      <div class="col-xs-12 col-sm-4 col-sm-push-8">
        <img is="SlotImg" :img="imgInSlot" class="img-responsive img-fluid img-circle img-thumbnail center-block">
        <!-- <img :src="imgSrc" :alt="imgAlt" class="img-responsive img-fluid img-circle img-thumbnail center-block"> -->
      </div>

      <div class="col-xs-12 col-sm-8 col-sm-pull-4">
        <blockquote is="SlotBlock" :slot-content="formattedSlotContent" class="h2 font-italic text-muted">
          <!-- <slot></slot> -->

        </blockquote>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  components: {
    SlotImg: {
      functional: true,
      props: ['img'],
      render: function (createElement, context) {
        return (context.props.img) ? createElement('img', Object.assign(context.data, context.props.img.data)) : null
      }
    },
    SlotBlock: {
      functional: true,
      props: ['slotContent'],
      render: function (createElement, context) {
        return (context.props.slotContent) ? createElement('blockquote', Object.assign(context.data, context.props.slotContent.data), context.props.slotContent) : null
      }
    }
  },
  computed: {
    imgInSlot () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag === 'img')[0] : null
    },
    formattedSlotContent () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag !== 'img') : null
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>

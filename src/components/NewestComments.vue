<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <router-link
      :to="{ name: 'restaurantsingle', params: {id: comment.Restaurant.id}}"
    >
      {{ comment.Restaurant.name }}
    </router-link>
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable*/
import { fromNowFilter } from './../utils/mixins'
export default {
 mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

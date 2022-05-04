<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
           :to="{ name: 'restaurantsingle',   params: { id: restaurant.id }}"
            >
              {{ restaurant.name }}
           </router-link>
           &nbsp;
           <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
//先將moment載入
import { fromNowFilter } from './../utils/mixins'
export default {
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
small {
  font-size: 10px;
}
</style>

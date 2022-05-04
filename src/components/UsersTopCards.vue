<template>
      <div class="col-3">
       <a href="#">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="deleteFollowing(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.stop.prevent="addFollowing(user.id)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
</template>
<script>
/* eslint-disable */
export default {
  props: {
    initialUsers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUsers
    }
  },
  methods: {
    deleteFollowing() {
      this.user = {
        ...this.user,
        isFollowed: false
      }
    },
    addFollowing() {
      this.user = {
        ...this.user,
        isFollowed: true
    }
    }
  }
}

</script>

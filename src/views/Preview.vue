<template>
  <div>
    <div class="container">
       <div class="user__text">Персональные данные</div>
        <div class="user__data">{{this.user[0].name}}, {{this.user[0].age}}</div>
        
       <div class="user__text">Дети</div>
       <div class="user__items" v-for="kid in kids[0]" :key="kid.id">
        <div class="user__item">{{kid.name}}, {{kid.age}}</div>
       </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      kids: []
    }
  },
  created() {
    this.setData()
    console.log('preview data', this.kids[0]);
  },
  methods: {
    setData() {
      this.$set(this, 'user', this.$store.state.user)
      this.$set(this, 'kids', this.$store.state.kids)
    }
  }
}
</script>

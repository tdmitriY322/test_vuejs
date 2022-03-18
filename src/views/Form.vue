<template>
  <div>
    <div class="form">
      <div class="container">
        <div class="form__data">
          <div class="form__text">Персональные данные</div>
          <div class="form__items">
            <div class="form__item">
              <input
                class="input input_name"
                type="text"
                name="name"
                v-model="user.name"
              />
              <label class="input_label" for="name">Имя</label>
            </div>
            <div class="form__item">
              <input
                class="input input_age"
                type="text"
                name="age"
                v-model="user.age"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" 
              />
              <label class="input_label" for="age">Возраст</label>
            </div>
          </div>
        </div>
        <div class="form__kids">
          <div class="form__add">
            <div class="form__text">Дети (макс. 5)</div>
            <button
              class="button button_kids"
              :disabled="isDiasbled"
              @click="addKid"
              v-bind:class="{ disabled: isDiasbled }"
            >
              Добавить ребенка
            </button>
          </div>

          <div v-for="user in kids" :key="user.id">
            <template>
              <div class="form__wrapper">
                <div class="form__item">
                  <input
                    class="input input_kid"
                    type="text"
                    name="kid_name"
                    v-model="user.name"
                  />
                  <label class="input_label" for="kid_name">Имя ребенка</label>
                </div>
                <div class="form__item">
                  <input
                    class="input input_kid"
                    type="text"
                    name="kid_age"
                    v-model="user.age"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                  />
                  <label class="input_label" for="kid_age"
                    >Возраст ребенка</label
                  >
                </div>
                <div>
                  <button
                    class="button button_delete"
                    @click="deleteKid(user.id)"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </template>
          </div>

          <button class="button button_save" @click="saveData"  >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDiasbled: null,
      user: {
        name: "",
        age: "",
      },
      kids: [],
    };
  },
  methods: {
    ...mapActions({
      user_data: "GET_USER_DATA",
      user_kids: "GET_USER_KIDS",
    }),
    addKid() {
      if (this.kids.length == 4) {
        console.log(this.kids.length);
        let newUser = {
          id: Date.now(),
          name: "",
          age: "", // можно по другому, но я пока не понимаю как
        };
        this.kids.push(newUser);
        this.isDiasbled = true;
        console.log(this.isDiasbled);
      } else {
        let newUser = {
          id: Date.now(),
          name: "",
          age: "",
        };
        this.kids.push(newUser);
        console.log(this.kids);
      }
      console.log("addKid click work");
    },
    deleteKid(id) {
      this.isDiasbled = false;
      this.kids = this.kids.filter((user) => user.id !== id);
    },
    saveData() {
      console.log(this.user_data(1));
      this.user_data(this.user);
      this.user_kids(this.kids);
      this.$router.push({ path: '/preview' })
    },
  },
};
</script>


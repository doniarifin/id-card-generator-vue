import { defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
  state: () => ({
    userData: {}
  }),
  actions: {
    setUserData(data) {
      this.userData = data;
    },
    clearUserData() {
      this.userData = {};
    }
  }
});

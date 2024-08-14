<template>
  <div>
    <Loading :isLoading="data.isLoading" />
  </div>
  <div class="user-input w-full">
    <div class="mb-2">
      <h1 class="font-medium">ID Card Generator</h1>
    </div>
    <div class="p-3 bg-gray-100 rounded-lg">
      <form @submit.prevent="handleSubmit">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              First name
            </label>
            <input v-model="formData.first_name" type="text" id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              Last name
            </label>
            <input v-model="formData.last_name" type="text" id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              Company
            </label>
            <input v-model="formData.company" type="text" id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite" required />
          </div>
          <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              Phone number
            </label>
            <input v-model="formData.phone" type="number" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              Website URL
            </label>
            <input v-model="formData.website" type="text" id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="flowbite.com" required />
          </div>
          <div>
            <label for="City" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
              City
            </label>
            <input v-model="formData.city" type="text" id="City"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="New York" required />
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">
            Email address
          </label>
          <input v-model="formData.email" type="text" id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com" required />
        </div>
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserDataStore } from '@/stores/userData';
import Loading  from '@/components/Loading.vue';

const formData = ref({
  first_name: '',
  last_name: '',
  company: '',
  phone: '',
  website: '',
  city: '',
  email: ''
});

const data = ref({
  isLoading: false,
})

const router = useRouter();
const userDataStore = useUserDataStore();

const handleSubmit = () => {
  data.value.isLoading = true;
  userDataStore.setUserData(formData.value);

  setTimeout(() => {
    data.value.isLoading = false;
    router.push({ name: 'GeneratedCard' });
  }, 1000);
};

</script>

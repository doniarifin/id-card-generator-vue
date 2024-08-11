<template>
  <div class="max-w-md mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <div ref="contentToPrint">
      <div class="bg-blue-500 text-white p-6">
        <h1 class="text-2xl font-semibold">ID Card</h1>
      </div>
      <div class="p-6">
        <ul class="space-y-4">
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">First Name:</strong>
            <span class="text-gray-900">{{ userData.first_name }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">Last Name:</strong>
            <span class="text-gray-900">{{ userData.last_name }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">Company:</strong>
            <span class="text-gray-900">{{ userData.company }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">Phone:</strong>
            <span class="text-gray-900">{{ userData.phone }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">Website:</strong>
            <span class="text-gray-900">{{ userData.website }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">City:</strong>
            <span class="text-gray-900">{{ userData.city }}</span>
          </li>
          <li class="flex justify-between text-lg">
            <strong class="font-medium text-gray-700">Email:</strong>
            <span class="text-gray-900">{{ userData.email }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-6 bg-gray-100 flex justify-between items-center">
      <button @click="goHome" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Back to Home
      </button>
      <button @click="printCard" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Print as PDF
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add any additional custom styles here */
</style>


<script setup>
import { computed, ref } from "vue";
import { useUserDataStore } from '@/stores/userData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRouter } from 'vue-router';

const router = useRouter();
const userDataStore = useUserDataStore();
const userData = computed(() => userDataStore.userData);

function goHome() {
  router.push('/');
}

const contentToPrint = ref(null);

function printCard() {
  html2canvas(contentToPrint.value, { useCORS: true }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('id-card.pdf');
  });
}
</script>

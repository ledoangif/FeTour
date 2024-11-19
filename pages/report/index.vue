<template>
    <div>
      <h2>Generate Booking Report</h2>
      <div>
        <label for="startDate">Start Date:</label>
        <input type="date" v-model="startDate" id="startDate" required />
      </div>
      <div>
        <label for="endDate">End Date:</label>
        <input type="date" v-model="endDate" id="endDate" required />
      </div>
      <button @click="generateReport">Generate Report</button>
  
      <!-- Modal for displaying the report -->
      <ReportDisplay 
        :report="reportData" 
        v-if="showModal" 
        @close="closeModal" 
      />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import ReportDisplay from '~/components/form/ReportDisplay.vue'; // Đường dẫn đúng
  
  export default {
    components: {
      ReportDisplay
    },
    setup() {
      const startDate = ref('');
      const endDate = ref('');
      const showModal = ref(false);
      const reportData = ref(null);
  
      const generateReport = async () => {
        if (!startDate.value || !endDate.value) {
          alert('Please select both start and end dates.');
          return;
        }
        
        try {
          const response = await axios.get('https://localhost:44308/api/BookingReport/booking-report', {
            startDate: startDate.value,
            endDate: endDate.value
          });
          reportData.value = response.data; // Dữ liệu báo cáo từ API
          showModal.value = true; // Hiển thị modal với báo cáo
        } catch (error) {
          console.error("Error fetching report:", error);
        }
      };
  
      const closeModal = () => {
        showModal.value = false; // Đóng modal khi click close
      };
  
      return {
        startDate,
        endDate,
        showModal,
        reportData,
        generateReport,
        closeModal
      };
    }
  };
  </script>
  
  <style scoped>
  /* CSS cho trang BookingReport */
  div {
    margin: 20px;
  }
  
  input {
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
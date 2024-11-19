<template>
    <div class="modal-overlay">
      <div class="modal-content">
        <button @click="closeModal">Close</button>
        <h2>Booking Report</h2>
  
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Tour Name</th>
              <th>Booking Date</th>
              <th>Status</th>
              <th>Total Bill</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in report.bookings" :key="booking.bookingDate">
              <td>{{ booking.nameCustomer }}</td>
              <td>{{ booking.phoneNumber }}</td>
              <td>{{ booking.nameTour }}</td>
              <!-- <td>{{ formatDate(booking.bookingDate) }}</td> -->
              <td>{{ booking.statusBill }}</td>
              <td>{{ booking.totalBill | currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      report: Object // Nhận dữ liệu báo cáo từ BookingReport
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Định dạng ngày theo múi giờ người dùng
      },
      closeModal() {
        this.$emit('close'); // Đóng modal khi click close
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    overflow-y: auto;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: darkred;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  </style>
  
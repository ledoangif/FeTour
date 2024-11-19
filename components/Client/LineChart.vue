<template>
  <h3 class ="text-danger text-center my-3">THỐNG KÊ SỐ LIỆU </h3>
    <div class="d-flex flex-row text-center">
         <div class="col-12 "> 
             <div class=" d-flex flex-row justify-content-between ms-5 mb-3" >
              <div class=" fs-4 " ><span class="text-primary fw-bold">Tổng số tour:</span> {{ props.totalTour }}</div>
              <div class="fs-4"><span class="text-primary fw-bold">Tổng số khách sạn:</span> {{ props.totalHotel }}</div>
              <div class=" fs-4"><span class="text-primary fw-bold">Tổng số nhân viên:</span> {{ props. account}}</div>
             </div>
          <table
                    class="table text-center  table-hover  "
                >
                    <thead class=" table-active table-primary">
                      <tr>
                        <th scope="col" v-for="month in 12" :key="month">Tháng {{ month }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td v-for="item in revenuesThisYear">{{ formatCurrency(item) }}</td>
                       </tr>
                     </tbody>
                  </table>
            </div>
    </div>
    <h4 class ="text-danger text-center  my-3">Doanh số đặt tour so với cung kì năm ngoái</h4>
    <div class="row ">
       <div class="d-flex flex-row">
        <div class="line-chart-container col-8">
          <Line :data="lineChartData" :options="chartOptions" />
       </div>
       <div class="pie-chart-container my-4 col-4 ">
          <Pie :data="pieChartData" :options="PiechartOptions" />
       </div>
       </div>
    </div>
     
  
 
  </template>
  
  <script setup>
  import API from '../../service/Base/api';
  import { ref } from 'vue';
  import { Line, Pie } from 'vue-chartjs';
  import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Thêm ArcElement
  PieController ,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement  // Thêm PieController
} from 'chart.js';
import Tour_constants from '~/assets/js/constants/constants';
import { formatCurrency } from '~/assets/js/validate';
import { useRouter } from 'vue-router';
const props = defineProps({
  totalBill: Number,
  totalTour: Number,
  totalHotel: Number,
  account: Number
})
// Đăng ký các thành phần với Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController,
  CategoryScale,
  LinearScale,
  PointElement ,
  LineElement 
);
const api = new API();
const router = useRouter();
const revenuesThisYear = ref([]);
const isLoading = ref(false);
definePageMeta({
    middleware: ['auth','admin','auth-admin'],
});
  const lineChartData = ref({
    labels:[],
    datasets: [
    {
      label: 'Năm nay',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: '#33691E',
      data: [] 
    },
    {
      label: 'Năm ngoái',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#D32F2F',
      data: [] 
    }
  ]
  });
  const pieChartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Doanh thu',
      backgroundColor: ['#33691E', '#D32F2F'], // Màu nhạt hơn với độ trong suốt là 0.2
      borderColor: 'transparent', // Xóa nền kẻ
      borderWidth: 0,
      data: []
    }
  ]
});
const out = () => {
  router.push('/login');}
  
  const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Doanh thu theo từng tháng',
    
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Tháng'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Doanh thu (VND)'
      },
      beginAtZero: true
    }
  },
  elements: {
    line: {
      tension: 0.4 // Điều chỉnh độ mềm mại của đường cong, giá trị từ 0 đến 1, mặc định là 0.2
    }
  },
  // Đặt kiểu đầu của đường cong
  interaction: {
    intersect: false,
  },
  plugins: {
    tooltip: {
      intersect: false,
    }
  },
});
const PiechartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Phân tích tỉ lệ đơn đặt',
      font: {
        size: '20px' // Đặt kích thước font dưới dạng chuỗi với đơn vị
      }
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          label += context.formattedValue + '%';
          return label;
        }
      }
    },
   
  }
});


  // Mocked data function (acts as an internal API)
  const fetchMockedRevenueData = async () => {
  try {
    isLoading.value = true;
    // Gọi API để lấy dữ liệu revenues từ phía backend cho năm nay
    const responseThisYear = await api.get(`/Booking/ToTalBillEachMonth?year=${new Date().getFullYear()}`, null);
    revenuesThisYear.value = responseThisYear.data.responseData;

    // Gọi API để lấy dữ liệu revenues từ phía backend cho năm trước
    const responseLastYear = await api.get(`/Booking/ToTalBillEachMonth?year=${new Date().getFullYear() - 1}`, null);
    const revenuesLastYear = responseLastYear.data.responseData;

    // Trả về dữ liệu có cấu trúc labels và revenues cho cả hai năm
    return {
      labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
      revenuesThisYear: revenuesThisYear,
      revenuesLastYear: revenuesLastYear
    };
  } catch (error) {
    console.error('Error fetching mocked revenue data:', error);
    throw error;
  }
};
const countBookingCanelorNot = async () => {
  try {
    // Gọi API để lấy số lượng đơn đặt hàng thành công và bị hủy
    const responseCancel = await api.get(`/Booking/CountBookingCancelorNotCancel?status=${Tour_constants.Cancel}`);
    const Cancel = responseCancel.data.responseData;

    const responseSuccess = await api.get(`/Booking/CountBookingCancelorNotCancel?status=${Tour_constants.Paid}`);
    const Success = responseSuccess.data.responseData;

    // Trả về dữ liệu
    return {
      Cancel: Cancel,
      Success: Success
    };
  } catch (error) {
    console.error('Error fetching booking count data:', error);
    throw error;
  }
};




  // Fetch data from the mocked API
  const fetchRevenueData = async () => {
    try {
      const data = await fetchMockedRevenueData();
      lineChartData.value.labels = data.labels;
    lineChartData.value.datasets[0].data = data.revenuesThisYear;
    lineChartData.value.datasets[1].data = data.revenuesLastYear;
    
      console.log(lineChartData.value)
      const dataCount = await countBookingCanelorNot();
    
    // Cập nhật dữ liệu cho biểu đồ hình tròn
    const totalOrders = dataCount.Success + dataCount.Cancel;
    const successPercentage = (dataCount.Success / totalOrders) * 100;
    const cancelPercentage = (dataCount.Cancel / totalOrders) * 100;

    // Cập nhật dữ liệu cho biểu đồ hình tròn
    pieChartData.value.labels = ['Đơn thành công', 'Đơn bị hủy'];
    pieChartData.value.datasets[0].data = [successPercentage, cancelPercentage];
    console.log(pieChartData.value)
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    }
    finally {
    isLoading.value = false; // Set loading state to false regardless of success or failure
  }
  } 
  ;
  

  await fetchRevenueData(); 
  </script>
  
  <style scoped>
  .line-chart-container
  {
    position: relative;
    height: 400px;
    width: 76%; /* Set the width to control the size of the pie chart */
  }
  .pie-chart-container
  {
    position: relative;
    height: 250px;
    width: 300px; 
  }
  </style>
  
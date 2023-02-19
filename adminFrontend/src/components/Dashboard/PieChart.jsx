// import React ,{useEffect,useState} from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { API_URL } from "../../constants/urls";
// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
  
// };

// export function PieChart() {
//     const [userList,setUserList] = useState([])
//     useEffect(() => {
//         const url = `${API_URL}/get-tess-users`;
    
//         const fetchData = async () => {
//           try {
//             const response = await fetch(url);
//             const json = await response.json();
//             await setUserList(json);
//           } catch (error) {
//             console.log("error", error);
//           }
//         };
    
//         fetchData();
//       }, []);


//   return <Pie data={{labels: ['Gathering', 'Gate', 'Garden'],
//   datasets: [
//     {
//       label: 'No. of Users',
//       data: userList,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
    
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
       
//       ],
//       borderWidth: 1,
//     },
//   ]}} />;
// }
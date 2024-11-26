// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ShippingLabel = () => {
//   const { orderId } = useParams(); // Capture orderId from the URL

//   useEffect(() => {
//     const downloadLabel = async () => {
//       try {
//         // Construct the API URL dynamically
//         const url = `http://localhost:3000/orderb2c/track/${orderId}`;
        
//         const response = await axios.get(url, {
//           responseType: "arraybuffer", // Receive binary data
//           headers: {
//             Accept: "application/pdf",
//           },
//         });

//         // Create a Blob for the PDF
//         const blob = new Blob([response.data], { type: "application/pdf" });
//         const fileURL = window.URL.createObjectURL(blob);
//         const fileLink = document.createElement("a");

//         // Trigger the file download
//         fileLink.href = fileURL;
//         fileLink.setAttribute("download", `Shipping_Label_${orderId}.pdf`);
//         document.body.appendChild(fileLink);
//         fileLink.click();
//         document.body.removeChild(fileLink);
//       } catch (error) {
//         console.error("Error downloading the shipping label:", error);
//       }
//     };

//     if (orderId) {
//       downloadLabel();
//     }
//   }, [orderId]);

//   return <div>Downloading shipping label for order #{orderId}...</div>;
// };

// export default ShippingLabel;

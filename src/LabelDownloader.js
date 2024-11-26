import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LabelDownloader = () => {
  const { trackingNo } = useParams(); // Capture the tracking number from the URL

  useEffect(() => {
    if (trackingNo) {
      fetchAndDownloadLabel(trackingNo);
    }
  }, [trackingNo]);

  const fetchAndDownloadLabel = async (trackingNo) => {
    try {
      // Call the backend API to fetch the label
      const response = await axios.get(`http://localhost:5000/api/generate-label/${trackingNo}`, {
        responseType: "blob", // Ensure we get a file response
      });

      // Create a temporary URL for the file and trigger download
      const labelUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = labelUrl;
      link.setAttribute("download", `label-${trackingNo}.pdf`); // Set the filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading label:", error);
      alert("Failed to download label. Please try again.");
    }
  };

  return (
    <div>
      <h1>Downloading Your Label...</h1>
      <p>Tracking Number: {trackingNo}</p>
    </div>
  );
};

export default LabelDownloader;

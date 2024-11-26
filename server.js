const express = require("express");
const PDFDocument = require("pdfkit");
const cors = require("cors");

const app = express();

// Enable CORS for development
app.use(cors());

// Route to generate the shipping label dynamically
app.get("/api/generate-label/:trackingNo", (req, res) => {
  const { trackingNo } = req.params;

  // Set the response headers for a PDF
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=label-${trackingNo}.pdf`);

  // Create a PDF document
  const doc = new PDFDocument();
  doc.pipe(res); // Pipe the PDF stream directly to the response

  // Add content to the label
  doc
    .fontSize(20)
    .text("Shipping Label", { align: "center" })
    .moveDown();

  doc
    .fontSize(16)
    .text(`Tracking Number: ${trackingNo}`, { align: "left" })
    .moveDown();

  doc
    .fontSize(12)
    .text("From:", { underline: true })
    .text("John Doe")
    .text("1234 Main St")
    .text("Cityville, ST 12345")
    .moveDown();

  doc
    .fontSize(12)
    .text("To:", { underline: true })
    .text("Jane Smith")
    .text("5678 Elm St")
    .text("Townsville, ST 67890")
    .moveDown();

  doc
    .fontSize(12)
    .text("Carrier: Example Courier")
    .text("Service: Standard Shipping")
    .moveDown();

  doc
    .rect(100, 300, 200, 100) // Create a placeholder for a barcode
    .stroke()
    doc.image()
    // .text("Barcode Placeholder", 120, 350);

  // Finalize the PDF and end the stream
  doc.end();
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));

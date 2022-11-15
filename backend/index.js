require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/admin", require("./routes/admin"));
app.use("/api/custcontact", require("./routes/custcontact"));
app.use("/api/customer", require("./routes/customer"));
app.use("/api/order", require("./routes/order"));
app.use("/api/orderline", require("./routes/orderline"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/product", require("./routes/product"));
app.use("/api/productcategory", require("./routes/productcategory"));
app.use("/api/shipment", require("./routes/shipment"));
app.use("/api/subscribed", require("./routes/subscribed"));
app.use("/api/suppcontact", require("./routes/suppcontact"));
app.use("/api/supplier", require("./routes/supplier"));
app.use("/api/trackingdetail", require("./routes/trackingdetail"));
app.use("/api/unsubscribed", require("./routes/unsubscribed"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

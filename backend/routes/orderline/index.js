const express = require("express");
const connection = require("../../db");
const orderlineRouter = express.Router();

orderlineRouter.post("/drop", async (req, res) => {
  connection.query("drop table if exists OrderLine", (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false });
    }
  });
  return res.status(200).json({ success: true });
});

orderlineRouter.post("/create", async (req, res) => {
  connection.query(
    "create table if not exists OrderLine(OrderNo int not null, ProductId int not null, Quantity int not null, FOREIGN KEY(OrderNo) REFERENCES Order(OrderNo) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(ProductId) REFERENCES Product(ProductId) ON DELETE CASCADE ON UPDATE CASCADE)",
    (err) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false });
      }
    }
  );
  return res.status(200).json({ success: true });
});

router.get("/scheme", async (req, res) => {
  connection.query("describe OrderLine", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    let columns = [];
    Object.keys(result).forEach(function (key) {
      let column = result[key];
      columns.push(column["Field"]);
    });
    return res.status(200).json({ success: true, result: columns });
  });
});

router.post("/allrows", async (req, res) => {
  connection.query("select * from OrderLine", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    let rows = [];
    Object.keys(result).forEach(function (key) {
      let row = result[key];
      rows.push(row);
    });
    return res.status(200).json({ success: true, result: rows });
  });
});

orderlineRouter.post("/selectedrows", async (req, res) => {
  connection.query(
    `select * from OrderLine where ${req.body["message"]}`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      let rows = [];
      Object.keys(result).forEach(function (key) {
        let row = result[key];
        rows.push(row);
      });
      return res.status(200).json({ success: true, result: rows });
    }
  );
});

orderlineRouter.post("/insert", async (req, res) => {
  connection.query(
    `insert into Orderline values (${req.body["message"]})`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result.message });
    }
  );
});

orderlineRouter.post("/update", async (req, res) => {
  connection.query(`update OrderLine ${req.body["message"]}`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, result: result.message });
  });
});

orderlineRouter.post("/delete", async (req, res) => {
  connection.query(
    `delete from OrderLine where ${req.body["message"]}`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result.message });
    }
  );
});

module.exports = orderlineRouter;

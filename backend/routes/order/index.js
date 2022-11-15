const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.post("/drop", async (req, res) => {
  connection.query("drop table if exists Order", (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false });
    }
  });
  return res.status(200).json({ success: true });
});

router.post("/create", async (req, res) => {
  connection.query(
    "create table if not exists Order(OrderNo int PRIMARY KEY, OrderDate date not null, OrderAmount int not null, CustId int not null, FOREIGN KEY(CustId) REFERENCES Customer(CustomerId) ON DELETE CASCADE ON UPDATE CASCADE)",
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
  connection.query("describe Order", (err, result) => {
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
  connection.query("select * from Order", (err, result) => {
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

router.post("/selectedrows", async (req, res) => {
  connection.query(
    `select * from Order where ${req.body["message"]}`,
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

router.post("/insert", async (req, res) => {
  connection.query(
    `insert into Order values (${req.body["message"]})`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result.message });
    }
  );
});

router.post("/update", async (req, res) => {
  connection.query(`update Order ${req.body["message"]}`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, result: result.message });
  });
});

router.post("/delete", async (req, res) => {
  connection.query(
    `delete from Order where ${req.body["message"]}`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result.message });
    }
  );
});

module.exports = router;

const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.post("/drop", async (req, res) => {
  connection.query("drop table if exists Payment", (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false });
    }
  });
});

router.post("/create", async (req, res) => {
  connection.query(
    "create table Payment(PaymentId number PRIMARY KEY, OrderNo number not null, PaymentDate date not null, PaymentAmount number not null, Type varchar(30) not null, FOREIGN KEY(OrderNo) REFERENCES Order(OrderNo) ON DELETE CASCADE ON UPDATE CASCADE)",
    (err) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false });
      }
    }
  );
  return res.status(200).json({ success: true });
});

router.post("/allrows", async (req, res) => {
  connection.query("select * from Payment", (err, result) => {
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
    `select * from Payment where ${req.body["message"]}`,
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
    "insert into Payment values ?",
    [req.body["message"]],
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
  connection.query(`update Payment ${req.body["message"]}`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, result: result.message });
  });
});

router.post("/delete", async (req, res) => {
  connection.query(
    `delete from Payment where ${req.body["message"]}`,
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

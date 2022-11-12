const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.post("/drop", async (req, res) => {
  connection.query("drop table if exists Unsubscribed", (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false });
    }
  });
});

router.post("/create", async (req, res) => {
  connection.query(
    "create table Unsubscribed(UCustId int not null, TimeSpent int not null, FOREIGN KEY(UCustId) REFERENCES Customer(CustomerId) ON DELETE CASCADE ON UPDATE CASCADE)",
    (err) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false });
      }
    }
  );
});

router.post("/allrows", async (req, res) => {
  connection.query("select * from Admin", (err, result) => {
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
    `select * from Admin where ${req.body["message"]}`,
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
    "insert into Admin values ?",
    [req.body["message"]],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result });
    }
  );
});

router.post("/update", async (req, res) => {
  connection.query(`update Admin ${req.body["message"]}`, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, result: result.message });
  });
});

router.post("/delete", async (req, res) => {
  connection.query(
    `delete from Unsubscribed where ${req.body["message"]}`,
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

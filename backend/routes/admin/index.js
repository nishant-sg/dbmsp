const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.post("/drop", async (req, res) => {
  try {
    connection.query("drop table if exists Admin", (err) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false });
      }
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
});

router.post("/create", async (req, res) => {
  connection.query(
    "create table if not exists Admin(AdminId int primary key, FN varchar(30) not null, LN varchar(30) not null, Password varchar(30) not null)",
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
  connection.query("describe Admin", (err, result) => {
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
    `INSERT INTO ADMIN VALUES ${req.body["message"]}`,
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
    `delete from Admin where ${req.body["message"]}`,
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

const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.post("/drop", async (req, res) => {
  connection.query("drop table if exists ProductCategory", (err) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ success: false });
    }
  });
});

router.post("/create", async (req, res) => {
  connection.query(
    "create table if not exists ProductCategory(CategoryId int primary key, ProductCategoryId int not null, CategoryName varchar(30) not null, TotalItems int not null, FOREIGN KEY (ProductCategoryId) REFERENCES ProductCategory(ProductCategoryId) ON UPDATE CASCADE ON DELETE CASCADE)",
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
  connection.query("describe ProductCategory", (err, result) => {
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
  connection.query("select * from ProductCategory", (err, result) => {
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
    `select * from ProductCategory where ${req.body["message"]}`,
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
    `insert into ProductCategory values (${req.body["message"]})`,
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
  connection.query(
    `update ProductCategory ${req.body["message"]}`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, result: result.message });
    }
  );
});

router.post("/delete", async (req, res) => {
  connection.query(
    `delete from ProductCategory where ${req.body["message"]}`,
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

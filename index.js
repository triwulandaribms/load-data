import express from "express";
import cors from "cors";
import multer from "multer";
import {
  getAllData,
  getDataId,
  addData,
  editData,
  deleteId,
  deleteAll,
} from "./routes/dataTransaksi.js";

const app = express();
const port = 3000;
const upload = multer();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// tabel transaksi
app.get("/api/tampil", getAllData);

app.get("/api/tampil/:id", getDataId);

app.post("/api/tambah", upload.none(), addData);

app.put("/api/edit/:id", editData);

app.delete("/api/hapus/:id", deleteId);

app.delete("/api/hapus", deleteAll);

app.listen(port, () => {
  console.log(`server sedang berjalan di port ${port}`);
});

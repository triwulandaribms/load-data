import client from "../database.js";

export async function getAllData(_req, res) {
  const data = await client.query(`SELECT * FROM transaksi ORDER BY id ASC`);
  res.json(data.rows);
}

export async function getDataId(req, res) {
  const data = await client.query(
    `SELECT * FROM transaksi WHERE id = '${req.params.id}'`
  );
  res.json(data);
}

export async function addData(req, res) {
  const data = await client.query(`SELECT COUNT(*) FROM transaksi`);
  if (data.rows[0].count >= 100) {
    res.send("data tidak boleh lebih dari 100");
  } else {
    await client.query(
      `INSERT INTO transaksi VALUES ('${req.body.id}','${req.body.deskripsi}','${req.body.type}', '${req.body.amount}','${req.body.tanggal}')`
    );
    res.send("berhasil menambah");
  }
}

export async function editData(req, res) {
  await client.query(`UPDATE transaksi SET id = '${req.body.id}', deskripsi = '${req.body.deskripsi}', type = '${req.body.type}', amount = '${req.body.amount}', tanggal = '${req.body.tanggal}' 
        WHERE id = '${req.params.id}'`);
  res.send("berhasil edit");
}

export async function deleteId(req, res) {
  await client.query(`DELETE FROM transaksi WHERE id = '${req.params.id}'`);
  res.send("berhasil menghapus");
}

export async function deleteAll(_req, res) {
  await client.query(`DELETE FROM transaksi`);
  res.send("berhasil");
}

create table transaksi (
  id char(5) primary key,
  deskripsi text,
  type text,
  amount text,
  tanggal date
);

insert into transaksi values 
('01','Pembelian barang','Expense', '500000', '2023-08-01'),
('02','Pendapatan penjualan','Income','750000', '2023-08-02'),
('03','Pembelian bahan baku','Expense','300000', '2023-08-03'),
('04','Peendapatan dari jasa','Income', '900000', '2023-08-04'),
('05','Pembayaran gaji karyawan','Expense', '1200000', '2023-08-05'),
('06','Pembayaran sewa kantor','Expense', '2000000', '2023-08-06'),
('07','Pengeluaran operasional','Expense', '750000', '2023-08-07'),
('08','Pendapatan investasi','Income', '300000', '2023-08-08'),
('09','Pembelian inventaris','Expense', '1200000', '2023-08-09'),
('10','Pembayaran hutang','Expense', '500000', '2023-08-10');

drop table transaksi; 
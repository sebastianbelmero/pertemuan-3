<?php
include '../../koneksi.php';

$nama = $_POST['nama'];
$nim = $_POST['nim'];

$koneksi->query("INSERT INTO mahasiswa(nama,nim) VALUES('$nama', '$nim')");
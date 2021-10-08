<?php
include '../../koneksi.php';

$id = $_POST['id'];
$nama = $_POST['nama'];
$nim = $_POST['nim'];

$koneksi->query("UPDATE mahasiswa SET nama = '$nama', nim = '$nim' WHERE id = $id");

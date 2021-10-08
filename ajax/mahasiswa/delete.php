<?php
include '../../koneksi.php';
$id = $_POST['id'];

$koneksi -> query("DELETE FROM mahasiswa WHERE id = $id");

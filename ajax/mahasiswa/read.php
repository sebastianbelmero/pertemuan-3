<?php
include '../../koneksi.php';
$no = 1;
$ambil = $koneksi->query("SELECT * FROM mahasiswa");
while ($pecah = $ambil->fetch_assoc()) {
?>
    <tr>
        <td><?= $no++; ?></td>
        <td><?= $pecah['nama']; ?></td>
        <td><?= $pecah['nim']; ?></td>
        <td>
            <button data-nama="<?= $pecah['nama']; ?>" data-nim="<?= $pecah['nim']; ?>" 
            data-id="<?= $pecah['id']; ?>" class="btn btn-warning btn-sm" 
            data-bs-toggle="modal" 
            data-bs-target="#ubahModal">Ubah</button>
            <button class="btn btn-danger btn-sm" onclick="hapusMahasiswa(<?= $pecah['id']; ?>)">Hapus</button>
        </td>
    </tr>
<?php } ?>
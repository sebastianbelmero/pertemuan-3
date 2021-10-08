const getMahasiswa = async () => {
    const listMahasiswa = document.getElementById('list-mahasiswa')
    const result = await fetch('ajax/mahasiswa/read.php')
    listMahasiswa.innerHTML = await result.text()
}

getMahasiswa()

const ubahModal = document.getElementById('ubahModal')
ubahModal.addEventListener('show.bs.modal', function (eventModal) {
    const button = eventModal.relatedTarget
    const editNama = button.getAttribute('data-nama')
    const editNim = button.getAttribute('data-NIM')
    const editId = button.getAttribute('data-id')
    const modalNama = ubahModal.querySelector('#editNama')
    const modalNIM = ubahModal.querySelector('#editNIM')
    const modalId = ubahModal.querySelector('#editId')
    modalNama.value = editNama
    modalNIM.value = editNim
    modalId.value = editId
    const editMahasiswa = document.getElementById('edit-mahasiswa')
    .addEventListener('submit', async (event) => {
        event.preventDefault()
        try {
            const data = new FormData()
            data.append('nama', modalNama.value)
            data.append('nim', modalNIM.value)
            data.append('id', modalId.value)
            const result = await fetch('ajax/mahasiswa/update.php', {
                method: 'post',
                body: data
            })
            getMahasiswa()
            Swal.fire(
                'Berhasil',
                'Data Berhasil Diubah',
                'success'
            )
        } catch (error) {
            console.log(error)
            Swal.fire(
                'Gagal',
                `error : ${error}`,
                'error'
            )
        }
    })
})

const tambahMahasiswa = document.getElementById('tambah-mahasiswa')
tambahMahasiswa.addEventListener('submit', async (event) => {
    event.preventDefault()
    let tambahNama = document.getElementById('tambahNama').value
    let tambahNim = document.getElementById('tambahNIM').value
    try {
        const data = new FormData()
        data.append('nama', tambahNama)
        data.append('nim', tambahNim)
        tambahNama = ''
        tambahNim = ''
        const result = await fetch('ajax/mahasiswa/create.php', {
            method: 'post',
            body: data
        })
        getMahasiswa()
        Swal.fire(
            'Berhasil',
            'Data Berhasil Ditambahkan',
            'success'
        )
    } catch (error) {
        console.log(error)
        Swal.fire(
            'Gagal',
            `error : ${error}`,
            'error'
        )
    }
})

const hapusMahasiswa = (id) => {
    Swal.fire({
        title: 'Hapus Mahasiswa',
        text: "Tindakan Tidak Dapat Dibatalkan",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus',
        cancelButtonText: 'Batal'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const data = new FormData()
            data.append('id', id)
            await fetch('ajax/mahasiswa/delete.php', {
                method: 'post',
                body: data
            })
            getMahasiswa()
            Swal.fire(
                'Berhasil',
                'Data Berhasil Dihapus',
                'success'
            )
        }
    })
}
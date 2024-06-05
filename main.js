window.addEventListener("DOMContentLoaded", (event) => {
  const tambah = document.getElementById("btn-pesan");
  tambah;
});

document
  .getElementById("btn-pesan")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const orderan = document.getElementById("orderan").value;
    const jumlahOrder = document.getElementById("jumlah-order").value;
    const noTelp = document.getElementById("no_telp").value;
    const tanggal = document.getElementById("tanggal").value;
    const address = document.getElementById("address").value;
    const message = document.getElementById("message").value;

    console.log("Nama: " + nama);
    console.log("Orderan: " + orderan);
    console.log("Jumlah Order: " + jumlahOrder);
    console.log("Nomor Telepon: " + noTelp);
    console.log("Tanggal & Waktu: " + tanggal);
    console.log("Alamat: " + address);
    console.log("Pesan: " + message);
  });

   

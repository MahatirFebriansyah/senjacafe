document.getElementById('booking').addEventListener('click', function() {
    var phoneNumber = '+6281381503039'; // Ganti dengan nomor WhatsApp Anda
    var message = 'Hallo aku ingin booking tempat'; // Ganti dengan pesan default jika diperlukan
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
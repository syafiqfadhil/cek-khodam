function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if(nama == ''){
        alert('Nama tidak boleh kosong!')
    }else{
        let status = [
            'isi',
            'kosong'
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if(randomStatus == 0){
            let khodam = [
                'Belut Sawah',
                'Mio Karbu',
                'Singa Paddlepop',
                'Tuyul Mullet',
                'Harimau Biskuat',
                'Sempak Semut',
                'Botol Yakult',
                'Pecel Lele',
                'Laba-Laba Jawa',
                'Roti Aoka',
                'Peyek Kacang',
                'Kecoa Glow Up',
                'Warung Madura',
                'Domba Garut',
                'Gardu PLN',
                'Kadal Second Choice',
                'Nastar',
                'Speaker JBL',
                'Agus Martabak',
                'Warteg Bahari',
                'Nasi padang paket 10k',
                'Kuda Insom',
                'Ayam Masako',
                'Biawak Alaska',
                'Cacing Kremi',
                'Gorila Dribble',
                'Seblak Mie',
                'Bakwan Jagung',
                'Zebra Egois',
                'Yana Batagor',
                'Paceng Bunda'

            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
    }
        
}

$(document).ready(function (){
    $('#btn-search').click(cekKhodam);
})
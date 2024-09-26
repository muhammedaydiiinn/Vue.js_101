const { createApp } = Vue

    createApp({
        data() {
            return {
                sayi1: 0,
                sayi2: 0,
                sonuc: 0
            }
        },
        methods: {
            topla(sayi1, sayi2) {
                return sayi1 + sayi2;
            }
        }
    }).mount('#hesapla')
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
            },
            carp(sayi1, sayi2) {
                return sayi1 * sayi2;
            },
            cıkar(sayi1, sayi2) {
                return sayi1 - sayi2;
            },
            bol(sayi1, sayi2) {
                return sayi1 / sayi2;
            }
        }
    }).mount('#hesapla')
const { createApp } = Vue

// Data binding  html attiribute ve parametlere veri göndermek için kullanılır.

createApp({
    data(){
        return{
           name: 'Muhammed',
           job: 'Yazılım Mühendisi',
           site: 'https://www.google.com',
           deger : 'merhaba',
           directHtml : '<p>Bu kısım html bind ile eklendi</p>',
        }
    }
}).mount('#app')
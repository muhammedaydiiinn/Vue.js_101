const { createApp } = Vue
  
createApp({
  data() {
    return {
      // message : 'Hello vue!'

      name: 'Muhammed', // String
      surname: 'Aydın', // String
      job: 'Software Engineer',
      age: 20,
      wear : {
        hat : true,
        clothes : false,
        t_shirt : true,
        shoes : true,
        pants : true
      },
      skills : ["Sürücü", "Yazılımcı"]
    }
  }
}).mount('#app')
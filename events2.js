 const EventEmitter=require('events');

 class SayHiToPeople extends EventEmitter{
   
     hello() {
       
        this.emit('sayHi',{
            text:'Sumaiya'
        })  
    }
 }
 module.exports=SayHiToPeople
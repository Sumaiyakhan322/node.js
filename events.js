const EventEmitter=require('events')

const emitter=new EventEmitter();

const SayHiToPeople=require('./events2')
const sayHi=new SayHiToPeople()

//register a listener
emitter.on('hungry',({item,time})=>{
    console.log(`Give me food after ${time} and give me a bowl of ${item}`);
})

//rise an event 
setTimeout(()=>{
    emitter.emit('hungry',{
        time:'20 min',
        item:'Rice'
    })
},1000)


//get the emitter from another file/modular



//listener
sayHi.on('sayHi',({text})=>{
  console.log(`Hello ${text}`);
})

//register

sayHi.hello()

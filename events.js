const EventEmitter=require('events')

const emitter=new EventEmitter();

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

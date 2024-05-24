// let time =10
// undefined
// setInterval(function(){
//     if(time>=10){
//     console.log(time)
//                       time=time-1}},1000)
// 2
// VM2282:3 10
// setInterval(function(){
//     if(time>=0){
//     console.log(time)
//                       time=time-1}},1000)
// 3
// VM2293:3 9
// VM2293:3 8
// VM2293:3 7
// VM2293:3 6
// VM2293:3 5
// VM2293:3 4
// VM2293:3 3
// VM2293:3 2
// VM2293:3 1
// // VM2293:3 

let time = 180
undefined
setInterval(function() {
    if(time>=0) {
        let min =Math.floor(time/60)
        let sec=String(time % 60).padStart(2,"0")
        console.log(min +":"+sec)
        time=time-1
    }
}
            ,1000)
2
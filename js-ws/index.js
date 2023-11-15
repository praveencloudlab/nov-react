let indianClock=document.getElementById("indianClock");
let americanClock=document.getElementById("americanClock");
let dubaiClock=document.getElementById("dubaiClock");

let indianClockV1=document.getElementById("indianClockV1");
let americanClockV1=document.getElementById("americanClockV1");
let dubaiClockV1=document.getElementById("dubaiClockV1");


function jsClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:`${props}`});
    let template=`
    <div class='card'>
        <div class='card-header'>${props}</div>
        <div class='card-body'>
            <p>${time}</p>
        </div>
    </div>
    `
    return template;
}

function reactClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let template=
    
    <div class='card'>
        <div class='card-header bg-info'>{props}</div>
        <div class='card-body'>
            <p>{time}</p>
        </div>
    </div>
    
    return template;
}






setInterval(()=>{

    indianClock.innerHTML=jsClock('asia/kolkata');
    dubaiClock.innerHTML=jsClock('asia/dubai');
    americanClock.innerHTML=jsClock('america/new_york');

    ReactDOM.render(reactClock('asia/kolkata'),indianClockV1);
    ReactDOM.render(reactClock('asia/dubai'),dubaiClockV1);
    ReactDOM.render(reactClock('america/new_york'),americanClockV1);




},1000)



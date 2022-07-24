// get elemen
const fiverr_form = document.getElementById('fiverr');
const alerm = document.getElementById('alerm');
const per = document.getElementById('per');
const pervel = document.getElementById('pervel');
const stop_alerm = document.getElementById('stop_alerm');
const counter = document.querySelector('.counter');
const bar = document.querySelector('.bar');


let count;

//submit fiverr
fiverr_form.onsubmit = (e) => {

    e.preventDefault();

    clearInterval(count);

    //get form val
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());

    //time val
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);

    

    

    count = setInterval( () => {
            futerTimeCoundown(date, time, counter, count, alerm)
            let per = counterPer(start_time, end_time);

            if (per > 0 && per < 30  ) {
                bar.style.background = `red`; 
            }else if (per >= 30 && per < 70  ) {
                bar.style.background = `blue`; 
            }else {
                bar.style.background = `green`; 
            }


             per && (bar.style.display = 'block');
            bar.style.width = `${100 - per}%`;

            pervel.innerHTML = `${100 - per}%` 

        }, 1000);
    

}



// stop_alerm
stop_alerm.onclick = (e) => {

    e.preventDefault();
    alerm.pause(); 

}

// let count;

// // submit fiverr rform
// fiverr_form.onsubmit = (e) => {
//     e.preventDefault();

//     clearInterval(count);

//     //get form val
//     const form_data = new FormData(e.target);
//     const {date, time } = Object.fromEntries(form_data.entries());



//     count = setInterval( () => {
//         futerTimeCoundown(date, time, counter)
//     })



// }
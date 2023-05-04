const scriptURL = 'https://script.google.com/macros/s/AKfycby2fjzjSXeHHXCpEBDmpe0Q-7A8DoGb-QkhIJBMS0nbRufYWtE9hvtqjinScP6NBg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
      msg.innerHTML = "Paldies par pierakstīšanos!"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})

const countDownDate = new Date("May 20, 2023 09:00 :00").getTime();

const timerFunction = setInterval(() => {
  const currentDate = new Date().getTime();
  const finalTime = countDownDate - currentDate;

  if ( finalTime >0) {

    const days = Math.floor( finalTime / (1000* 60* 60* 24));

    const hours = Math.floor((finalTime % (1000* 60* 60* 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((finalTime % (1000* 60* 60)) / (1000 * 60));

    const seconds = Math.floor((finalTime % (1000* 60)) / (1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

  } else {
  }
}, 1000);

console.log(countDownDate);



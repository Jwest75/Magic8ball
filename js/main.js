//create a div that holds a form with text box,a random answer generator and a submit buttion
//create varialbe to connect to the page elements
let answers21 = ["./img/magic8ball_1.png", "./img/magic8ball_2.png", "./img/magic8ball_3.png", "./img/magic8ball_4.png",
   "./img/magic8ball_5.png",
   "./img/magic8ball_6.png",
   "./img/magic8ball_7.png",
   "./img/magic8ball_8.png",
   "./img/magic8ball_9.png",
   "./img/magic8ball_10.png",
   "./img/magic8ball_11.png",
   "./img/magic8ball_12.png",
   "./img/magic8ball_13.png",
   "./img/magic8ball_14.png",
   "./img/magic8ball_15.png",
   "./img/magic8ball_16.png",
   "./img/magic8ball_17.png",
   "./img/magic8ball_18.png",
   "./img/magic8ball_19.png",
   "./img/magic8ball_20.png"
];
//get elements by Id
let answers = document.getElementById("anContainer")

let answers1 = answers21[Math.floor(Math.random() * answers21.length)];
console.log(answers1);

//askQuestion = document.getElementById("question")

//console.log(askQuestion)

//const block = document.getElementById(answers);


//display the a answer
function myAnswers() {
   let answered = document.getElementById('question')
   const image = document.getElementById("image");
   let qw = answered.value
   console.log(qw)
   console.log(answered)
   console.log('qw: =', qw)
   if (qw == "") {
      alert("ask");

   } else {
      image.src = answers1;
      answers.append(img);
      image.alt = answers1;
   }
};


//);

//add event listeners
//add if statements to see if the form has a question entered into it if not alert the user to enter a question
//optionally refresh the page after 10 second or display a continue buttion
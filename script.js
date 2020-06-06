const startButton = document.getElementById('start-btn')
const intropage = document.getElementById('intro-page')
const nextButton = document.getElementById('next-btn')
const submitbtn = document.getElementById('sub-btn')
const containers = document.getElementById('full-container');
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const matbtn = document.createElement('button');
matbtn.setAttribute('class', 'mat-btn');
matbtn.innerHTML='Mathematics';
var scibtn = document.createElement('button');
scibtn.setAttribute('class', 'sci-btn');
scibtn.innerHTML='Science';
var score = document.createElement('h1');
var message = document.createElement('h1');
let hor_brk = document.createElement('br');
var count=0;



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

matbtn.addEventListener('click', MathsQuiz)
scibtn.addEventListener('click', sciencequiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  //clearStatusClass(document.body)
  startButton.classList.add('hide')
  intropage.appendChild(matbtn);
  
  intropage.appendChild(scibtn);
}

function MathsQuiz(){
  intropage.classList.add('hide')
  startButton.classList.add('hide')
  countdown()
  shuffledQuestions = question1.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function sciencequiz(){
  intropage.classList.add('hide')
  startButton.classList.add('hide')
  countdown()
  shuffledQuestions = question2.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 if(correct)
    { 
      count++;
      }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    console.log(shuffledQuestions.length);
    console.log(currentQuestionIndex);
    nextButton.classList.remove('hide')
  } else {
    intropage.classList.add('hide');
    questionContainerElement.classList.add('hide');
   
    containers.classList.add('hide');
    score.innerHTML="your score is   "+ count +"  ";
    document.body.appendChild(score);
    document.body.appendChild(hor_brk);
    document.body.appendChild(hor_brk);

   
   
    if(count>6)
    {   
        document.body.appendChild(hor_brk);
        document.body.appendChild(hor_brk);
        message.innerHTML=   "...   CONGRAJULATIONS! YOU ARE PASSED";
        document.body.appendChild(message);
        intropage.classList.remove('hide');
        intropage.appendChild(matbtn);
        intropage.appendChild(scibtn);
    }
    else{
      document.body.appendChild(hor_brk);
      document.body.appendChild(hor_brk);
      message.innerHTML="...   SORRY! YOU ARE FAILED";
      document.body.appendChild(message);
      intropage.classList.remove('hide');
      intropage.appendChild(matbtn);
      intropage.appendChild(scibtn);
    }
  }
 
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
 
  if (correct) {
    
    element.classList.add('correct')
    
    
  } else {
    
    element.classList.add('wrong')
    }
  }

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const form = document.querySelector(".quiz-form")
const submitBtn = document.querySelector(".submit")
const questions = document.querySelectorAll(".question")
const addBtn = document.querySelector(".addQ")

const actualAnswers = ["A","A","A","A","A"]

submitBtn.addEventListener("click",(event) => {
    event.preventDefault();
    let score = 0
    // console.log(form)
    // console.log(form.q1)
    // console.log(form.q1.value)
    const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]

    answers.forEach((answer,index) => {
        if(answer===actualAnswers[index]){
            score++;
            questions[index].classList.add("correct")
        }else{
            questions[index].classList.add("wrong")
        }
    })

    scrollTo(0,0)
    const result = document.querySelector(".result")
    result.classList.remove("hide")
    result.querySelector("p").textContent = `Your Score is ${score}/5`
})




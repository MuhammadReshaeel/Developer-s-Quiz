const correctAnswers=['A','B','B','A']; 

const form=document.querySelector('.quiz-form')

const result=document.querySelector('.result')

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
    })

    result.classList.remove('d-none');   
    //result.querySelector('span').textContent=`${score}%`
    //console.log(score)

    let output=0;
    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`
        if(output==score){
            clearInterval(timer)
        }
        else{
            output++;
        }
    },10)

    scrollTo(0,0)
})

// let i =0;
// const timer=setInterval(()=>{
//     i++;
//     console.log(i);
//     if (i==5){
//     clearInterval(timer)
//     }
// },1000)


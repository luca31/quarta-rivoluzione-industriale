const marks = [
    ["Insufficiente","red"],
    ["Sufficiente","orange"],
    ["Discreto","yellow"],
    ["Buono","green"],
    ["Ottimo","blue"],
    ["Perfetto","purple"]
]

const getMark = (mark) => {
    if (mark.toFixed(0) <= 5 ){
        return [marks[0][0],marks[0][1]]
    } else {
        return [marks[mark.toFixed(0)-5][0],marks[mark.toFixed(0)-5][1]]
    }
}

function check() {
    const questions = [
      document.quiz.question1.value,
      document.quiz.question2.value,
      document.quiz.question3.value,
      document.quiz.question4.value,
      document.quiz.question5.value
    ]
    const answers = [
      "C",
      "B",
      "D",
      "B",
      "A"
    ]

    let mark = 0;

    questions.forEach((question, index) => {
      if(question == answers[index]) mark++
    })
  
    evaluation = getMark(mark*2)
    document.getElementById("result").innerHTML = "VOTO : <font color = "+evaluation[1]+"> "+evaluation[0]+"</font>"

}
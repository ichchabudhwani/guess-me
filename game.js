let words = [
    {
        "inputs": 6,
        "category":"sports",
       
        "word": "chess"
    },
    {
        "inputs": 5,
        "category":"asian country name",
       
        "word": "India"
    },
    {
        "inputs": 5,
        
        "category": "fruit name",
        "word": "mango"
    }
]
$(".fill_blanks").click(function() {
    $("#alphabets").keyup(function () {
        let id = $(this).attr("id");
        let input_number = id.split("_")[1]
        $("#input").eq(input_number).html($(this).val());
       
    })  

})
 var gameOver=false
 $(".clickable").click(function(){
    var correctGuess=false;
    let id =$(this).attr("id");
    var life=parseInt($("#life").text())
    for(var i=0;i<randomWord.words.lenght;i++){
        if (randomWord.charAt(i).toLowerCase()==id) {
            if(life>0 &&($(".fill_blanks").eq(i).html()=="_"||$(".fill_blanks").eq(i).html()==id)){
                $(".fill_blanks").eq(i).html(id);
                correctGuess=true;

            if($("#blanks").text()===randomWord.word.toLowerCase()){
                $("#result").text("you win!!")
                correctGuess=true
                gameOver=true
            }
            }
            
        }
        $(".fill_blanks").html(words.words)
    }
 })

<?php 
    session_start();
    $_SESSION;

    echo "
    <script>
    var submitAnswer = function(valore, rightanswer) {
        if (valore == rightanswer) {
            alert('Correct');
            score += 1000;
            scoreprinter.textContent = score;
        }
        else {
            alert('Inorrect');
        }
    };
</script>
    "
?>
<!DOCTYPE html>
<html>
<head>
    <title>MovieGuessr</title>
</head>
<body>
    <a href="index.php">Home</a> 
    <a href="logout.php">Logout</a>
    <h1>Guess Which Country!</h1>
    <br>
    <img src = "movies/USA_AvengersEndgame.png"> </img>
    <br>
    <br>
    <form class = "white addpadding" id="d1">
        <div class="form-group" > 
            <ol>
                <li>
                <input type="radio" name="choice" value="1" />United States
                </li>
                <li>
                <input type="radio" name="choice" value="2" />Canada
                </li>
                <li>
                <input type="radio" name="choice" value="3" />China
                </li>
            </ol>
        </div>
        <div class="form-group"> 
        <input type="submit" value="Submit" name="submit" class="btn btn-primary" onclick="submitAnswer(d1.choice.value, '1')"/>

        </div>
        <div class = "center">
        <h1 id = "scoreprinter">
            the value for number is:
            <script type="text/javascript">
                document.write(score)
            </script>
            </h1>
        </div>
    </form>
    
</body>
</html>


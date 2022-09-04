<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM CALC</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
</head>

<body>
    <div class="test">
        <div class="container">
            <div class="test__wrapper">
                <div class="test__left">
                    <label class="label__item" for="first-num">first num</label>
                    <input class="input__item" id="first-num" type="text">
                    <label class="label__item" for="second-num">second num</label>
                    <input class="input__item" id="second-num" type="text">
                    <label class="label__item" for="ratio">ratio</label>
                    <input class="input__item" id="ratio" type="text">
                </div>
                <div class="test__right">
                    <button class="test__btn active" id="btn1">Btn 1</button>
                    <button class="test__btn" id="btn2">Btn 2</button>
                    <button class="test__btn" id="btn3">Btn 3</button>
                    <button class="test__btn" id="btn4">Btn 4</button>
                </div>
                <div class="test__sum">
                    Итого: <span class="test__result">0</span>
                </div>
            </div>
        </div>
    </div>

    <div class="test2">
        <div class="container">

        </div>
    </div>

    <script src="./assets/js/jquery-3.6.0.min.js"></script>
    <script src="./assets/js/script.js"></script>
</body>

</html>
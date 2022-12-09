<?php
// Токен телеграм бота $tg_bot_token = "5659423059:AAGVX0-EdSZXaENnSKVi7cKdI1Hp-D55NFM";
// ID Чата $chat_id = "-891503715";

$token = "5659423059:AAGVX0-EdSZXaENnSKVi7cKdI1Hp-D55NFM";
$chat_id = "-891503715";


if(trim(!empty($_POST['tel']))){
    $tel = ($_POST['tel']);
}

if(trim(!empty($_POST['name']))){
    $name = ($_POST['name']);
}

$type = ($_POST['type']);

//Собираем в массив то, что будет передаваться боту
$arr = array(
    'Отправлено с формы:' => $type,
    'Телефон:' => $tel,
    'Имя:' => $name,
    
);

//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        $message = 'Данные отправлены PHP!';
    }

//А здесь сообщение об ошибке при отправке
    else {
        $message = 'Error form PHP';
    }

    $response = ['message' => $message];
    header('Content-type: application/json');
	echo json_encode($response);
?>
<?php


if(!empty($_POST['firstName']) || !empty($_POST['phone'])):

    /*
    $url = "http://cp.alterainvest.ru/crm/configs/import/lead.php"; // URL на которы посылаем запрос
    $login = base64_decode("aW5mb0BhbHRlcmFpbnZlc3QucnU=");
    $pass = base64_decode("ZGdzeUBkeXRmJXRkVFRUU0gxMDAw");
    $zagolovok = "Заявка---Лендинг---«Safesmoking»---Альтера";
    $phone_work = str_replace(" ", "", $_POST['phone']);
    $name_work = str_replace(" ", "_", $_POST['firstName']);
    $email_work = $_POST['email'];

    if (filter_var($email_work, FILTER_VALIDATE_EMAIL)) {
    $email = $email_work;
    }
    else
    {
    $email = "";
    }

     $request = array(
        'LOGIN' => $login,
        'PASSWORD' => $pass,
        'TITLE' => $name_work,
        'NAME' => $name_work,
        'UF_CRM_1422820300' => 149,
        'UF_CRM_1392294325' => 185,
        'UF_CRM_1422820217' => 143,
        'UF_CRM_1444899811' => 253,
        'ASSIGNED_BY_ID' => 422,
        'PHONE_WORK' => $phone_work,
        'EMAIL_WORK' => $email,
        'COMMENTS' => $zagolovok,
        'SOURCE_ID' => 38, //Источник франшиза Mellow’s
    );

    foreach ($request as $key => $value) {
         $MASS .= $key."=".$value."&";
     }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url); // Устанавливаем URL на который посылать запрос
    curl_setopt($ch, CURLOPT_HEADER, 1); //  Результат будет содержать заголовки
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); // Результат будет возвращём в переменную, а не выведен.
    curl_setopt($ch, CURLOPT_TIMEOUT, 3); // Таймаут после 4 секунд
    curl_setopt($ch, CURLOPT_POST, 1); // Устанавливаем метод POST
    curl_setopt($ch, CURLOPT_POSTFIELDS, $MASS); // посылаемые значения
    $result = curl_exec($ch);
    curl_close($ch);

    //if (strpos($result,'302 F')!== FALSE) echo "<b>Good!</b>";
    //else echo "<b>Bad</b>";


    */

    //print_r($_POST);
    $mailSubj = $_POST['zagolovok']." Заявка - Лендинг - Safesmoking - Альтера";
  //  $mailTo = 'draftprewiew@gmail.com, ksb.spb@alterainvest.ru, tv@alterainvest.ru, mak@alterainvest.ru, info@alterainvest.ru';
   // $mailTo = 'draftprewiew@gmail.com, ksb.spb@alterainvest.ru, tv@alterainvest.ru, mak@alterainvest.ru, info@alterainvest.ru, mh.fr@alterainvest.ru, mak@alterainvest.ru, esl@alterainvest.ru, fd.spb@alterainvest.ru, az.spb@alterainvest.ru,fraltera@yandex.ru, informer-landing@yandex.ru';
    $mailTo = 'gomelevskij@gmail.com';
    $mailContent = "Имя: {$_POST['firstName']}" . PHP_EOL
        . "Телефон: {$_POST['phone']}" . PHP_EOL
        . "email:  {$_POST['email']}" . PHP_EOL;        
        //. "Город:  {$_POST['city']}" . PHP_EOL;


    $headers = "From: informer@franshiza-mellows.ru" . PHP_EOL
        . "Reply-To: informer@franshiza-mellows.ru" . PHP_EOL
        . 'MIME-Version: 1.0' . PHP_EOL
        . 'Content-Type: text/plain; charset=utf-8' . PHP_EOL
        . 'Content-Transfer-Encoding: 8bit';

    @mail($mailTo, $mailSubj, $mailContent, $headers);

endif;

?>
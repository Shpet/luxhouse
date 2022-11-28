<?php


$data = explode(',',file_get_contents('php://input'));

$peremennaya = "<table>";
foreach ($data as $value) {
    $peremennaya .= '<tr><td>'.$value.'<td></tr>';
  };

  $peremennaya .="</table>";

    $to      = 'vadik.shpet01@gmail.com';
    $to2      = 'vadik.shpet01@gmail.com';
    $subject = 'the subject';
    $message =$peremennaya;
    $headers = 'From: webmaster@example.com'       . "\r\n" .
                 'Reply-To: webmaster@example.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();



    mail($to, $subject, $message, $headers);
    mail($to, $subject, $message, $headers);

    header("Location: /thanks.html");
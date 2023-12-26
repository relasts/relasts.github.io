<?php 
	require_once('phpmailer/PHPMailerAutoload.php');

	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';
	echo '1';
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$oznakomlen = $_POST['oznakomlen'];

	$mail->isSMTP();
	$mail->Host = 'smtp.mail.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'tsovyan@inbox.ru';
	$mail->Password = 'QY16Kc9ksTwazzQmagG5';
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;

	$mail->setFrom('tsovyan@inbox.ru');
	$mail->addAddress('tsovyan@inbox.ru');
	$mail->isHTML(true);
	$mail->Subject = 'Отправка формы Drupal';
	$mail->Body = '<table>
						<tr>
							<td style="padding-right: 20px">Имя:</td>
							<td>'.$name.'</td>
						</tr>
						<tr>
							<td style="padding-right: 20px">Телефон:</td>
							<td>'.$phone.'</td>
						</tr>
						<tr>
							<td style="padding-right: 20px">email:</td>
							<td>'.$email.'</td>
						</tr>
						<tr>
							<td style="padding-right: 20px">message:</td>
							<td>'.$message.'</td>
						</tr>
					</table>';
	$mail->AltBody = '';

	if(!$mail->send()) echo 'error';
?>					
let minLenghtEmail = 6;
let minLenghtPass = 5;
let email, password, newPassword,repeatNewPassword;
let emailUser='user@gmail.com';
let emailAdmin='admin@gmail.com';
let passUser='UserPass';
let passAdmin='AdminPass';
email=prompt('Enter your email, please', '');
if (email === null || email === '') {
    alert('Canceled.');
} else if (email.length < minLenghtEmail) {
	alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === emailUser || email === emailAdmin ) {
	password=prompt('Enter your password, please', '');
	if (password === null || password === ''){
		alert('Canceled.');
	} else if (email === emailUser && password===passUser || email === emailAdmin && password===passAdmin) {
		if (confirm('Do you want to change your password?')) {
			password = prompt('Enter your old password, please', '');
			if (password === null || password === '') {
				alert('Canceled');
			} else if (email === emailUser && password===passUser || email === emailAdmin && password===passAdmin) {
				newPassword = prompt('Enter your new password, please', '');
				if (newPassword.length > minLenghtPass) {
					repeatNewPassword = prompt('Enter your new password again, please', '');
					if (repeatNewPassword === newPassword) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password.');
					}
			} else {
				alert('It`s too short password. Sorry');
				}
			}
		} else {
			alert('You have failed the change.');
		}
	} else {
		alert('Wrong password'); 
}
	} else {
alert('I don’t know you');
}

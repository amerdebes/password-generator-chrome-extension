let generate = document.getElementById('generate'),
copy = document.getElementById('copy'),
input = document.querySelector('#box'),
count = document.querySelector('#counter')
upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
lower = 'abcdefghijklmnopqrstuvwxyz',
number = '1234567890',
symbol = '!@#$%^&*?<>',
all = upper + lower + number + symbol;
generate.onclick = function generate() {
        let password = '';
        password += all[Math.floor(Math.random() * all.length)];
        password += all[Math.floor(Math.random() * all.length)];
        password += all[Math.floor(Math.random() * all.length)];
        password += all[Math.floor(Math.random() * all.length)];
        password += all[Math.floor(Math.random() * all.length)];
        password += all[Math.floor(Math.random() * all.length)];
        while (password.length < parseInt(count.value)) {
            password += all[Math.floor(Math.random() * all.length)]
        }
        input.value = password;
}

copy.onclick = function copypass() {
    input.select();
    document.execCommand('copy')
}
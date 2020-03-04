/* let day = prompt ('Введите день недели, когда Вы хотите к нам придти? (на русском языке)', 'пример Среда');
if (day == 'Понедельник'
|| day == 'Вторник'
|| day == 'Среда'
|| day == 'Четверг'
|| day == 'Пятница') {
    alert( `Отлично! В ${day} мы работаем до 18:00! Ждем Вас!` )
}

else if (day == 'Суббота'
|| day == 'Воскресенье') {
    alert( `К сожалению в ${day} мы не работаем! Ждем Вас в понедельник!` )
}

else {
    alert( 'Вы ввели что-то не то, попробуйте еще раз!' )
} */

let day = prompt ('Enter the day of the week when you want to come to us?', 'ex.Wednesday');
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':        
    case 'Friday':
        alert( `Excellent! ${day} we work until 18:00! We are waiting for you!` );
        break;

    case 'Saturday':
    case 'Sunday':
        alert( `Unfortunately, we are not working on ${day}! See you on Monday!` );
        break;

    default:
        alert( 'You entered something wrong, try again!' );
}
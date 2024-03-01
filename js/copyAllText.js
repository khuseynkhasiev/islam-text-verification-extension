// copyAllText.js
console.log('подключен copyAllText');

function getAllText() {
    // Получаем все элементы, содержащие текст, на странице
    const allTextElements = document.querySelectorAll(
        'p, span, h1, h2, h3, h4, h5, h6'
    ); // Добавьте другие теги, если нужно

    // Создаем массив для хранения текста из каждого элемента
    const allTextArray = [];

    // Проходим по каждому элементу и добавляем текст в массив
    allTextElements.forEach((element) => {
        allTextArray.push(element.innerText);
    });

    // Объединяем текст из массива в одну строку, разделяя пробелами или новой строкой, в зависимости от ваших потребностей
    const allText = allTextArray.join(' '); // или join('\n') для новой строки

    // Копируем текст в буфер обмена
    // navigator.clipboard.writeText(allText);

    // console.log(allText);
    return allText;
}

window.addEventListener('keypress', (e) => {
    let letter = e.key;


    let result;

    if ((letter == 'a') ||
        (letter == 'e') ||
        (letter == 'i') ||
        (letter == 'o') ||
        (letter == 'u') ||
        (letter == 'y')) {

        result = 'Vowel!';
    }

    else {
        result = 'Consonant!';
    }

    

    document.getElementById('output').textContent = result;
});

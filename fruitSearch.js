const inputBox = document.querySelector('input');
const suggestions = document.querySelector('suggestions');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

inputBox.onkeyup = function(){
	let results = [];
    let input = input.value
    if(input.length){
        results = fruit.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(results);
    }
    showSuggestions(results);
    
    if (!results.length){
        suggestions.innerHTML = '';
    }
}

function showSuggestions (results) {
    const content = results.map((list) => {
        return "<li onclick=selectInput(results)>" + list + "</li>";
    });
    suggestions.innerHTML = "<ul>" + content.join ('') + "</ul>"
};

function selectInput(results){
    input.value = list.innerHTML;
        suggestions.innerHTML = '';
};


// input.addEventListener ('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);
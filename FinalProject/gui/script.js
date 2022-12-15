const table = document.querySelector('.table-main');

function addTemplate(flag) {
    console.log(flag);
    table.style.display = 'none';

    var tmpl = document.createElement('div');
    tmpl.className = 'template';
    var tmplContainer = document.createElement('div');
    tmplContainer.className = 'template-container';

    var tmplTitle = document.createElement('div');
    tmplTitle.className = 'template-title';
    tmplTitle.textContent = `Add new ${flag}`;

    var tmplInput = document.createElement('input');
    tmplInput.className = 'template-input';
    tmplInput.placeholder = `Type new ${flag.toLowerCase()} you want to add...`;

    var tmplButton = document.createElement('button');
    tmplButton.className = 'template-button';
    tmplButton.setAttribute('type', 'submit');
    tmplButton.setAttribute('id', 'button');
    tmplButton.textContent = 'Add item to database';

    document.querySelector('.container').appendChild(tmpl).appendChild(tmplContainer);
    tmplContainer.appendChild(tmplTitle);
    tmplContainer.appendChild(tmplInput);
    tmplContainer.appendChild(tmplButton);

    document.querySelector('.template-button').onclick = function() {
        var obj = {
            item: tmplInput.value,
        }

        console.log(obj);
    }
}

function selecters(label) {
    var tmplSubtitle = document.createElement('label');
    tmplSubtitle.className = 'template-country-name';
    tmplSubtitle.textContent = `${label}`;

    var array = ["Volvo","Saab","Mercades","Audi"];
    var selectList = document.createElement("select");
    selectList.className = 'template-select';

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

    var tmplItem = document.createElement('div');
    tmplItem.className = 'template-country-item';

    tmplItem.appendChild(tmplSubtitle);
    tmplItem.appendChild(selectList);
    return tmplItem;
}
function fillShit(flag) {
    var tmplSubtitle = document.createElement('label');
    tmplSubtitle.className = 'template-country-name';
    tmplSubtitle.textContent = `${flag} name`;

    var tmplInput = document.createElement('input');
    tmplInput.className = 'template-input';
    tmplInput.placeholder = `Type new ${flag.toLowerCase()} you want to add...`;

    var tmplItem = document.createElement('div');
    tmplItem.className = 'template-country-item';

    tmplItem.appendChild(tmplSubtitle);
    tmplItem.appendChild(tmplInput);

    console.log(tmplItem);

    return tmplItem;
}
function addNew(flag) {
    console.log(flag);
    table.style.display = 'none';

    var tmpl = document.createElement('div');
    tmpl.className = 'template';
    var tmplContainer = document.createElement('div');
    tmplContainer.className = 'template-container';

    var tmplTitle = document.createElement('div');
    tmplTitle.className = 'template-title';
    tmplTitle.textContent = `Add new ${flag}`;

    var tmplButton = document.createElement('button');
    tmplButton.className = 'template-button';
    tmplButton.setAttribute('type', 'submit');
    tmplButton.setAttribute('id', 'button');
    tmplButton.textContent = 'Add item to database';

    document.querySelector('.container').appendChild(tmpl).appendChild(tmplContainer);

    tmplContainer.appendChild(tmplTitle);

    var arrTmlp = [];

    const tmplItem1 = fillShit(flag);
    tmplContainer.appendChild(tmplItem1);
    arrTmlp.push(tmplItem1);

    var labels = ['Continent name', 'Religion name', 'Language'];

    for (let label of labels) {
        const tmplItem = selecters(label);
        tmplContainer.appendChild(tmplItem);
        arrTmlp.push(tmplItem);
    }

    const tmplItem2 = fillShit('Population');
    tmplContainer.appendChild(tmplItem2);
    arrTmlp.push(tmplItem2);

    tmplContainer.appendChild(tmplButton);

    var lel1 = document.querySelectorAll('input');
    var lel2 = document.querySelectorAll('select');

    document.querySelector('.template-button').onclick = function() {
        var obj = {
            country: lel1[0].value,
            continent: lel2[0].options[lel2[0].selectedIndex].text,
            religion: lel2[1].options[lel2[1].selectedIndex].text,
            language: lel2[2].options[lel2[2].selectedIndex].text,
            population: parseFloat(lel1[1].value.toString())
        }

        console.log(obj);
    }
}

const addItems = document.querySelectorAll('.table-options-item');

addItems.forEach(x => x.addEventListener('click', function() {
    const template = document.querySelector('.template');

    if (template !== null)
        template.remove();

    if (x.id === 'add-0') {
        table.style.display = 'inline-table';
    }

    if (x.id === 'add-1')
        addNew('Country');

    if (x.id === 'add-2')
        addTemplate('Continent');

    if (x.id === 'add-3')
        addTemplate('Religion');

    if (x.id === 'add-4')
        addTemplate('Language');
}));


const upload = () => {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "../interface/users.php", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send();

    console.log(ajax);

    return ajax.onreadystatechange = function() {
        if(ajax.readyState === 4 && ajax.status === 200) {
            //document.getElementById("table-main").innerHTML = this.responseText;
        }
    }
}

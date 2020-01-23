document.addEventListener("DOMContentLoaded", function () {
    // let headerContainer = document.createElement('div');
    // headerContainer.className = 'header-container';
    // ABOVE IS THE CORRECT WAY TO CREATE A DIV ELEMENT AND GIVE IT A CLASSNAME.

    let div = document.createElement('header-container');
    // (THIS IS THE WRONG WAY)

    let h1 = document.createElement('h1');
    let text = document.createTextNode('This is an h1');
    h1.className = 'h1';
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.className = 'h2';
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.className = 'h3';
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.className = 'h4';
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.className = 'h5';
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.className = 'h6';

    myColor = ['pink', 'orange', 'darkgrey', 'darksalmon', 'darkslategrey', 'orangered', 'palegreen', 'lightcoral']

    h1.appendChild(text);
    div.appendChild(h1);
    document.body.appendChild(div);

    h2.appendChild(h2Text);
    div.appendChild(h2);

    h3.appendChild(h3Text);
    div.appendChild(h3);

    h4.appendChild(h4Text);
    div.appendChild(h4);

    h5.appendChild(h5Text);
    div.appendChild(h5);

    h6.appendChild(h6Text);
    div.appendChild(h6);



    div.addEventListener('dblclick', function (e) {
        // let hit = document.createElement('hit');
        // let hitText = document.createTextNode('Color me bad!');
        // hit.appendChild(hitText);
        // document.body.appendChild(hit);
        // e.target.textContent = myColor;
        e.target.style.color = myColor[Math.floor(Math.random() * myColor.length)];
    });


    var i = 1;

    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let button1 = document.getElementsByClassName('list-button');
    button1[0].addEventListener('click', function () {
        btnClicked();
    });

    function btnClicked() {

        let li = document.createElement('li');
        li.innerText = ("This is the list item " + [i]);
        li.addEventListener('dblclick', function () {
            li.parentNode.removeChild(li);
        });
        ul.appendChild(li);
        i++;
    };

    ul.addEventListener('click', function (e) {
        e.target.style.color = myColor[Math.floor(Math.random() * myColor.length)];
    });
    
});
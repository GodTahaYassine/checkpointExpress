//the like react
const heart = document.querySelectorAll('.fa-heart');

function likeClicked(event) {
    if (!event.target.classList.contains('heart_clicked')) {
        event.target.setAttribute('class', 'fas fa-heart heart_clicked');
        console.log('heart_clicked');
    } else {
        event.target.setAttribute('class', 'far fa-heart');
    }
}

if (heart) {
    for (let i = 0; i < heart.length; i++) {
        heart[i].addEventListener('click', likeClicked);
    }
}

const counter = document.querySelectorAll('.counter-div');
const rawPrices = document.querySelectorAll('.item-price-raw');
//Add 
function counterIncrement(event) {
    console.log('counter increment');

    let value = ++event.target.parentNode.parentNode.children[1].innerHTML;
    let price =
        event.target.parentNode.parentNode.parentNode.children[0].children[0]
            .innerHTML;

    event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML =
        (price * (value / (value - 1))).toFixed(2);

    calcTotal();
}
// subtract
function counterDecrement(event) {
    console.log('counter decrement');

    if (event.target.parentNode.parentNode.children[1].innerHTML > 1) {
        let value = --event.target.parentNode.parentNode.children[1].innerHTML;
        let price =
            event.target.parentNode.parentNode.parentNode.children[0]
                .children[0].innerHTML;

        event.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML =
            (price * (value / (value + 1))).toFixed(2);

        calcTotal();
    }
}
// Total price
function calcTotal() {
    let sum = 0;

    for (let i = 0; i < rawPrices.length; i++) {
        sum += parseFloat(rawPrices[i].innerHTML);
    }

    document.querySelector('.total-price-raw').innerHTML = sum.toFixed(2);
}

if (counter) {
    for (let i = 0; i < counter.length; i++) {
        counter[i].children[0].addEventListener('click', counterIncrement);
        counter[i].children[2].addEventListener('click', counterDecrement);
    }
}
calcTotal();

//delete
/*function deleteItem (id) {
    var item = document.getElementById(id);
    item.parentNode.removeChild(item);
    rawPrices = document.querySelectorAll('.item-price-raw');
    calcTotal();
}*/
//

var item = document.getElementsByClassName('item');

if (item) {
    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function () {
            this.parentNode.parentNode.remove();
            rawPrices = document.querySelectorAll('.item-price-raw');
            calcTotal();
        });
    }
}


//alert
function alert_purchase (){
    var isok = confirm("Are sure ?");
    if (isok == true) {
        alert ("THANKS FOR PUSHASING!");
    }

}
//number of elements 

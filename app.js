"use strict"

let d = document;

function autoFill() {

    for (let i = 0; i < d.querySelectorAll('.grey1Color').length; i++)
        changeColor(0, d.querySelectorAll('.grey1Color')[i]);

    for (let i = 0; i < d.querySelectorAll('.blackColor').length; i++)
        changeColor(1, d.querySelectorAll('.blackColor')[i]);


    for (let i = 0; i < d.querySelectorAll('.ori_2').length; i++)
        changeOrient(d.querySelectorAll('.ori_2')[i], "personName-card");

    for (let i = 0; i < d.querySelectorAll('.ori_5').length; i++)
        changeOrient(d.querySelectorAll('.ori_5')[i], "occupation-card");


    for (let i = 0; i < d.querySelectorAll('.size_2').length; i++)
        changeSize(d.querySelectorAll('.size_2')[i], "personName-card");

    for (let i = 0; i < d.querySelectorAll('.size_5').length; i++)
        changeSize(d.querySelectorAll('.size_5')[i], "occupation-card");

}
autoFill();

function getCard(obj) {

    let curForm = obj.closest('.main-form');
    let curCard = obj.closest('.main-item').lastElementChild;

    curCard.querySelector('.companyName-card').innerHTML = curForm.querySelector('.companyName').value;
    curCard.querySelector('.personName-card').innerHTML = curForm.querySelector('.personName').value;
    curCard.querySelector('.occupation-card').innerHTML = curForm.querySelector('.occupation').value;

    transportColor(curForm, curCard);
    transportAlign(curForm, curCard);
    transportSize(curForm, curCard);

    transportPhone(curForm, curCard, ".firstNumber", ".Phone", ".secondNumber");

    curCard.querySelector('.email-card').innerHTML = curForm.querySelector('.email').value;
    curCard.querySelector('.adress-card').innerHTML = curForm.querySelector('.adress').value;

    showContent(curForm, curCard, ".email-chbox", ".email-card");
    showContent(curForm, curCard, ".adress-chbox", ".adress-card");
}

function changeSize(obj, prop) { //for buttons which rules align

    let Sizes1 = {
        size_1: '24px',
        size_2: '26px',
        size_3: '28px',
    }
    let Sizes2 = {
        size_4: '14px',
        size_5: '16px',
        size_6: '18px'
    };

    let panel = obj.closest('.size-panel');

    for (let i = 0; i < panel.children.length; i++) {

        if (prop == "personName-card") {
            for (let size in Sizes1) {

                if (panel.children[i].classList.contains(size))
                    obj.style.background = '#D9D9D9';
                else
                    panel.children[i].style.background = 'white';
            }
        }
        if (prop == "occupation-card") {
            for (let size in Sizes2) {

                if (panel.children[i].classList.contains(size))
                    obj.style.background = '#D9D9D9';
                else
                    panel.children[i].style.background = 'white';
            }
        }
    }
}

function transportSize(form, card) {

    let Sizes1 = {
        size_1: '24px',
        size_2: '26px',
        size_3: '28px',
    }
    let Sizes2 = {
        size_4: '14px',
        size_5: '16px',
        size_6: '18px'
    };

    let Name = '.personName-card';
    let Profession = '.occupation-card';
    let panels = form.querySelectorAll('.size-panel');

    for (let iter = 0; iter < panels.length; iter++) {

        for (var i = 0; i < panels[iter].children.length; i++) {

            for (let size in Sizes1) {

                if (panels[iter].children[i].classList.contains(size) && !isButtonEmpty(panels[iter].children[i]))
                    card.querySelector(Name).style.fontSize = Sizes1[size];
            }

            for (let size in Sizes2) {

                if (panels[iter].children[i].classList.contains(size) && !isButtonEmpty(panels[iter].children[i]))
                    card.querySelector(Profession).style.fontSize = Sizes2[size];
            }
        }
    }
}

function changeOrient(obj, prop) { //for buttons which rules align

    let Aligns1 = {
        ori_1: 'left',
        ori_2: 'center',
        ori_3: 'right'
    };
    let Aligns2 = {
        ori_4: 'left',
        ori_5: 'center',
        ori_6: 'right'
    };

    let panel = obj.closest('.align-panel');

    for (let i = 0; i < panel.children.length; i++) {

        if (prop == "personName-card") {
            for (let align in Aligns1) {

                if (panel.children[i].classList.contains(align))
                    obj.style.background = '#D9D9D9';
                else
                    panel.children[i].style.background = 'white';
            }
        }
        if (prop == "occupation-card") {
            for (let align in Aligns2) {

                if (panel.children[i].classList.contains(align))
                    obj.style.background = '#D9D9D9';
                else
                    panel.children[i].style.background = 'white';
            }
        }
    }
}

function transportAlign(form, card) {

    let Aligns1 = {
        ori_1: 'left',
        ori_2: 'center',
        ori_3: 'right'
    };
    let Aligns2 = {
        ori_4: 'left',
        ori_5: 'center',
        ori_6: 'right'
    };
    let Name = '.personName-card';
    let Profession = '.occupation-card';
    let panels = form.querySelectorAll('.align-panel');

    for (let iter = 0; iter < panels.length; iter++) {

        for (var i = 0; i < panels[iter].children.length; i++) {

            for (let align in Aligns1) {

                if (panels[iter].children[i].classList.contains(align) && !isButtonEmpty(panels[iter].children[i]))
                    card.querySelector(Name).style.textAlign = Aligns1[align];
            }
            for (let align in Aligns2) {

                if (panels[iter].children[i].classList.contains(align) && !isButtonEmpty(panels[iter].children[i]))
                    card.querySelector(Profession).style.textAlign = Aligns2[align];
            }
        }
    }
}

function isButtonEmpty(obj) {
    if (obj.getAttribute('style') == "background: white;")
        return true;
    else
        return false;
}

function addPhone(obj, id) { //for plus button for adding extra phone number
    let container = obj.closest('.phoneContainer');
    container.querySelector(id).style.display = "block";
}

function removePhone(obj, id) { //for minus button for removing extra phone number
    let container = obj.closest('.phoneContainer');
    container.querySelector(id).style.display = "none";
    container.querySelector('.secondNumber').value = ' ';
}

function transportPhone(form, card, first, secBlock, second) { //to transfer new phone to the card
    let where = card.querySelector(".phone-card");
    where.innerHTML = " ";
    let phone1 = form.querySelector(first);
    let phone2 = form.querySelector(second);

    let phoneStr = "<div class='parameters'>" + phone1.value + "</div>";
    where.insertAdjacentHTML('beforeend', phoneStr);

    if (form.querySelector(secBlock).style.display == "block") {
        phoneStr = "<div class='parameters'>" + phone2.value + "</div>";
        where.insertAdjacentHTML('beforeend', phoneStr);
    }
}

function changeColor(type, obj) { //for changing name and occupation colors
    
    let Colors = {
        blackColor: '#202020',
        blueColor: '#3F88E8',
        redColor: '#ff0000',
        greenColor: '#097A14',
        yellowColor: '#DCA40A',
        pinkColor: '#DC0AD5'
    };
    let Greys = {
        grey2Color: '#474747',
        grey1Color: '#202020',
        grey3Color: '#636363',
        grey4Color: '#9E9E9E',
        grey5Color: '#BBBBBB',
        grey6Color: '#E3E3E3'
    };

    let panel = obj.closest('.color-panel');
    if (type == 1)
        for (let color in Colors) {

            triggerOFF(panel.querySelector('.' + color));
            if (obj.classList.contains(color))
                triggerON(obj, Colors[color]);
        }
    if (type == 0)
        for (let grey in Greys) {

            triggerOFF(panel.querySelector('.' + grey));
            if (obj.classList.contains(grey))
                triggerON(obj, Greys[grey]);
        }
}

function transportColor(form, card) {
    
    let Colors = {
        blackColor: '#202020',
        blueColor: '#3F88E8',
        redColor: '#ff0000',
        greenColor: '#097A14',
        yellowColor: '#DCA40A',
        pinkColor: '#DC0AD5'
    };
    let Greys = {
        grey2Color: '#474747',
        grey1Color: '#202020',
        grey3Color: '#636363',
        grey4Color: '#9E9E9E',
        grey5Color: '#BBBBBB',
        grey6Color: '#E3E3E3'
    };

    let Name = '.personName-card';
    let Profession = '.occupation-card';
    let obj = form.querySelectorAll('.color-panel');

    for (let iter = 0; iter < obj.length; iter++) {

        for (var i = 0; i < obj[iter].children.length; i++) {

            for (let color in Colors) {

                if (obj[iter].children[i].classList.contains(color) && !isColorEmpty(obj[iter].children[i]))
                    card.querySelector(Name).style.color = Colors[color];
            }
            for (let grey in Greys) {

                if (obj[iter].children[i].classList.contains(grey) && !isColorEmpty(obj[iter].children[i]))
                    card.querySelector(Profession).style.color = Greys[grey];
            }
        }
    }
}

function isColorEmpty(obj) {
    if (obj.getAttribute('style') == "")
        return true;
    else
        return false;
}

function triggerON(obj, color) { // for changeColor
    
    let styled = obj.style;

    styled.backgroundColor = "white";
    styled.borderColor = color;
    styled.borderStyle = "solid";
    styled.borderWidth = "6px";
    styled.height = "12px";
    styled.width = "12px";
}

function triggerOFF(obj) { // for changeColor
    obj.style.cssText = " ";
}

function showContent(form, card, chboxId, cardElem) { //for checkbox

    let chbox = form.querySelector(chboxId);

    chbox.style.backgroundColor = "#707070";
    if (chbox.checked)
        card.querySelector(cardElem).style.display = "block";
    else
        card.querySelector(cardElem).style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {

    //버튼
    var btnComplate = document.getElementById('btnComplate');
    var btnShow = document.getElementById('btnShow');

    //edit-box
    var editBox = document.getElementById('editBox');
    btnShow.addEventListener('click',function(){
        if (btnShow.getAttribute('show')=='true'){
            editBox.style.bottom = '-200px';
            this.style.transform = 'rotate(180deg)';
            btnShow.setAttribute('show',false);
        }else{
            editBox.style.bottom = '0px';
            this.style.transform = 'rotate(0deg)';
            btnShow.setAttribute('show', true);
        }
    });


    //edit-box contents
    var formNav = document.getElementsByClassName('edit-menu');
    var formBox = document.getElementsByClassName('edit-contents');
    for(var i=0;i<formNav.length;i++){
        formNav[i].setAttribute('data-index',i);
        formBox[i].setAttribute('data-index',i);
    }
    for(var i=0;i<formNav.length;i++){
        formNav[i].addEventListener('click',function(){
            var x= this.getAttribute('data-index');
            document.getElementsByClassName('active')[0].classList.remove('active');
            this.classList.add('active');
            document.getElementsByClassName('show')[0].classList.remove('show');
            formBox[x].classList.add('show');
        });
    }

    //GNB
    var gnbLogo = document.getElementsByClassName('logo')[0];
    var gnbHeight = document.getElementsByClassName('header')[0];
    var gnbFontSize = document.getElementsByClassName('gnb-menu-list')[0];
    var gnbMargin = document.getElementsByClassName('gnb-menu');
    
    var editGnbLogo = document.getElementById('gnbLogo');
    var editGnbHeight = document.getElementById('gnbHeight');
    var editGnbFontSize = document.getElementById('gnbFontSize');
    var editGnbMargin = document.getElementById('gnbMargin');

    //Article
    var mainTitle = document.getElementsByTagName('h1');
    var mainBody = document.getElementsByClassName('body');

    var editTitleFontSize = document.getElementById('mainTitleFontSize');
    var editTitleLeading = document.getElementById('mainTitleLeading');
    var editTitleLetter = document.getElementById('mainTitleLetter');
    var editTitleFamily = document.getElementById('mainTitleFamily');
    var editBodyFontSize = document.getElementById('mainBodyFontSize');
    var editBodyLeading = document.getElementById('mainBodyLeading');
    var editBodyLetter = document.getElementById('mainBodyLetter');
    var editBodyFamily = document.getElementById('mainBodyFamily');

    //Input
    var mainInput = document.getElementById('mainInput');

    var editTextFieldType = document.getElementById('mainTextFieldType');
    console.log(editTextFieldType.value);
    var editTextFieldHeight = document.getElementById('mainTextFieldHeight');
    var editTextFieldFontSize = document.getElementById('mainTextFieldFontSize');
    var editTextFieldColor = document.getElementById('mainTextFieldColor');
    var editTextFieldWidth = document.getElementById('mainTextFieldWidth');

    //Button
    var mainButton = document.getElementById('mainButton');

    btnComplate.addEventListener('click',fnTransform);

    function fnTransform(){
        //GNB
        gnbLogo.style.width = editGnbLogo.value + 'px';
        gnbHeight.style.height = editGnbHeight.value + 'px';
        gnbFontSize.style.fontSize = editGnbFontSize.value + 'px';
        for (var i = 0; i < gnbMargin.length; i++) {
            gnbMargin[i].style.marginRight = editGnbMargin.value + 'px';
        }
    
        //Article
        for(var i=0; i<mainTitle.length;i++){
            mainTitle[i].style.fontSize = editTitleFontSize.value + 'px';
            mainTitle[i].style.lineHeight = editTitleLeading.value + 'px';
            mainTitle[i].style.letterSpacing = editTitleLetter.value + 'px';
            mainTitle[i].style.fontFamily = editTitleFamily.value + 'px';
        }

        for(var i=0;i<mainBody.length;i++){
            mainBody[i].style.fontSize = editBodyFontSize.value + 'px';
            if(editBodyLeading.value == ''){
                mainBody[i].style.lineHeight = 'normal';
            }else{
                mainBody[i].style.lineHeight = editBodyLeading.value + 'px';
            }
            mainBody[i].style.letterSpacing = editBodyLetter.value + 'px';
            mainBody[i].style.fontFamily = editBodyFamily.value + 'px';
        }

        //Input

    }

    var editInputs = document.getElementById('editBox').getElementsByTagName('input');
    
    for(var i=0; i<editInputs.length;i++){
        editInputs[i].addEventListener('keypress',function(e){
            var key = e.whick || e.keyCode;
            if(key === 13){
                fnTransform();
            }
        })
    }

});
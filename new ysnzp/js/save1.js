
    document.addEventListener("DOMContentLoaded", function () {
        var hamburger = document.getElementsByClassName('hamburger')[0];
        var gnb = document.getElementsByClassName('gnb')[0];
        var navigation = document.getElementsByClassName('navigation')[0];
        var logoBlack = document.getElementsByClassName('logo-black')[0];
        var logoWhite = document.getElementsByClassName('logo-white')[0];

        //햄버거 클릭시 네비 토글
        hamburger.addEventListener('click',function(){

            if(this.classList.contains('open')){
                //hamburger
                this.classList.remove('open');
                //gnb bg
                gnb.classList.remove('gnb-active');
                //logo toggle
                logoBlack.classList.add('show');
                logoWhite.classList.remove('show');
                //navigation
                navigation.classList.remove('navi-on');
            }else{
                //hamburger
                this.classList.add('open');
                //gnb bg
                gnb.classList.add('gnb-active');
                //logo toggle
                logoBlack.classList.remove('show');
                logoWhite.classList.add('show');
                //navigation
                navigation.classList.add('navi-on');
            }

        });

        //컨테이너 스크롤링
        var main = document.getElementsByTagName('main')[0];
        var container = document.getElementsByClassName('container')[0];
        container.style.transform = "translateX(0px)";

        var didScroll;
        var howMuchScroll=0;
        var scrollDirection;
        var scrollNow = "translateX(0px)";
        
        container.addEventListener('mousewheel',function(e){

            didScroll = true;
            // console.log(container.scrollLeft); //ok

            // console.log(this.scrollY); //undefind
            // console.log(e.deltaY); //위아래 방향 내리면 100 올리면 -100
            // console.log(this.scrollTop); //0
            if(e.deltaY>0){
                scrollDirection = 'down';
            }else if(e.deltaY<0){
                scrollDirection = 'up';
            }
            howMuchScroll++;
        })

        setInterval(function(){
            if(didScroll){
                hasScrolled();
                didScroll=false;
            }
        },250);

        function hasScrolled(){

            // console.log(scrollNow.replace(/[^0-9]/g,""));
            var x = parseInt(scrollNow.replace(/[^0-9]/g, ""));
            // console.log(x+5);
            if(scrollDirection='down'){
                // container.scrollY = '-'+howMuchScroll;
                container.style.transform = "translateX(-"+ (x+parseInt(howMuchScroll)) +"px)";
            }
            // container.scrollY

            howMuchScroll = 0;
        }

    });
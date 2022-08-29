const boxes = document.querySelectorAll('.x');

for (const box of boxes) {
box.addEventListener('click', function handleClick() {
    box.classList.add('active');
});
}

var numbers = []; // new empty array

var min, max, r, n, p;

min = 1;
max = 25;
r = 25; // how many numbers you want to extract

for (let i = 0; i < r; i++) {
do {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    p = numbers.includes(n);
    if(!p){
    numbers.push(n);
    }
}
while(p);
}

for(var i = 0; i < numbers.length ; i++){
    document.getElementById(i+1).innerHTML = numbers[i];
    //console.log(numbers[i])
}

var audio = new Audio("click-trim.wav");

document.getElementsByClassName.onclick = function() {
    audio.play();
}
const music = document.querySelectorAll('.x');

for (const beep of music) {
beep.addEventListener('click', function handleClick() {
    audio.play();
});
}

// const tiles = document.querySelectorAll('.tag');
// const score = document.getElementById('score');

// for (const tile of tiles) {
// tile.addEventListener('click', function handle() {
//     var scr = document.getElementById('score').innerHTML;
//     scr = ++scr;
//     document.getElementById('score').innerHTML = scr;
//     // console.log(scr);
// });
// }
 
var array = [];

function reply_click(clicked_id)
{
    var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;
    array.push(clicked_id);
    console.log(array);
    var t = array.length;
    if(result = array.includes('1')){
        if(result = array.includes('2')){
            if(result = array.includes('3')){
                if(result = array.includes('4')){
                    if(result = array.includes('5')){
                        var a = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('6')){
        if(result = array.includes('7')){
            if(result = array.includes('8')){
                if(result = array.includes('9')){
                    if(result = array.includes('10')){
                        var b = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('11')){
        if(result = array.includes('12')){
            if(result = array.includes('13')){
                if(result = array.includes('14')){
                    if(result = array.includes('15')){
                        var c = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('16')){
        if(result = array.includes('17')){
            if(result = array.includes('18')){
                if(result = array.includes('19')){
                    if(result = array.includes('20')){
                        var d = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('21')){
        if(result = array.includes('22')){
            if(result = array.includes('23')){
                if(result = array.includes('24')){
                    if(result = array.includes('25')){
                        var e = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('1')){
        if(result = array.includes('6')){
            if(result = array.includes('11')){
                if(result = array.includes('16')){
                    if(result = array.includes('21')){
                        var f = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('2')){
        if(result = array.includes('7')){
            if(result = array.includes('12')){
                if(result = array.includes('17')){
                    if(result = array.includes('22')){
                        var g = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('3')){
        if(result = array.includes('8')){
            if(result = array.includes('13')){
                if(result = array.includes('18')){
                    if(result = array.includes('23')){
                        var h = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('4')){
        if(result = array.includes('9')){
            if(result = array.includes('14')){
                if(result = array.includes('19')){
                    if(result = array.includes('24')){
                        var i = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('5')){
        if(result = array.includes('10')){
            if(result = array.includes('15')){
                if(result = array.includes('20')){
                    if(result = array.includes('25')){
                        var j = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('1')){
        if(result = array.includes('7')){
            if(result = array.includes('13')){
                if(result = array.includes('19')){
                    if(result = array.includes('25')){
                        var k = 1;
                    }
                }
            }
        }
    }
    if(result = array.includes('21')){
        if(result = array.includes('17')){
            if(result = array.includes('13')){
                if(result = array.includes('9')){
                    if(result = array.includes('5')){
                        var l = 1;
                    }
                }
            }
        }
    }
    var scr = document.getElementById('score').innerHTML;
    scr = a+b+c+d+e+f+g+h+i+j+k+l;
    document.getElementById('score').innerHTML = scr;
    if(scr==5){
        document.getElementById("winner").style.display = "block";
        const audio = new Audio("fire-crackers.mp3");
        audio.play();
    }
}
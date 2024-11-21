//buttons
const xButton = document.getElementById('x');
const yButton = document.getElementById('y');
const zButton = document.getElementById('z');
const closeXbox = document.getElementById('closeXbox');
const closeYbox = document.getElementById('closeYbox');
const closeZbox = document.getElementById('closeZbox');
const btnReset = document.getElementById('btnReset');
const btnCalculate = document.getElementById('btnCalculate');

//symbols containers
const xBox = document.getElementById('xBox');
const yBox = document.getElementById('yBox');
const zBox = document.getElementById('zBox');

// X-symbols
let xSymbol1 = document.getElementById('xSymbol1');
let xSymbol2 = document.getElementById('xSymbol2');
let xSymbol3 = document.getElementById('xSymbol3');
let xSymbol4 = document.getElementById('xSymbol4');
let xSymbol5 = document.getElementById('xSymbol5');
let xSymbol6 = document.getElementById('xSymbol6');

// Y-symbols
let ySymbol1 = document.getElementById('ySymbol1');
let ySymbol2 = document.getElementById('ySymbol2');
let ySymbol3 = document.getElementById('ySymbol3');
let ySymbol4 = document.getElementById('ySymbol4');
let ySymbol5 = document.getElementById('ySymbol5');
let ySymbol6 = document.getElementById('ySymbol6');

// Z-symbols
let zSymbol1 = document.getElementById('zSymbol1');
let zSymbol2 = document.getElementById('zSymbol2');
let zSymbol3 = document.getElementById('zSymbol3');
let zSymbol4 = document.getElementById('zSymbol4');
let zSymbol5 = document.getElementById('zSymbol5');
let zSymbol6 = document.getElementById('zSymbol6');

// removing P tags in html
let px1 = document.getElementById('px1');
let px2 = document.getElementById('px2');
let py1 = document.getElementById('py1');
let py2 = document.getElementById('py2');
let pz1 = document.getElementById('pz1');
let pz2 = document.getElementById('pz2');

// images to replace p tags
let xImage = document.getElementById('xImage');
let yImage = document.getElementById('yImage');
let zImage = document.getElementById('zImage');

// result
let code = document.getElementById('code');

// formulas
let x = 0;
let y = 0;
let z = 0;




xButton.onclick = function() {
    xBox.classList.add('appear');

    xSymbol1.onclick = function() {
        x = 0;
        px1.classList.add('hidden');
        px2.classList.add('hidden');

        xImage.src = "images/0.png";
        xBox.classList.remove('appear');
    }
    xSymbol2.onclick = function() {
        x = 10;
        px1.classList.add('hidden');
        px2.classList.add('hidden');
        
        xImage.src = "images/10.png";
        xBox.classList.remove('appear');
    }
    xSymbol3.onclick = function() {
        x = 11;
        px1.classList.add('hidden');
        px2.classList.add('hidden');
        
        xImage.src = "images/11.png";
        xBox.classList.remove('appear');
    }
    xSymbol4.onclick = function() {
        x = 20;
        px1.classList.add('hidden');
        px2.classList.add('hidden');
        
        xImage.src = "images/20.png";
        xBox.classList.remove('appear');
    }
    xSymbol5.onclick = function() {
        x = 21;
        px1.classList.add('hidden');
        px2.classList.add('hidden');

        xImage.src = "images/21.png";
        xBox.classList.remove('appear');
    }
    xSymbol6.onclick = function() {
        x = 22;
        px1.classList.add('hidden');
        px2.classList.add('hidden');

        xImage.src = "images/22.png";
        xBox.classList.remove('appear');
    }
}

yButton.onclick = function() {
    yBox.classList.add('appear');

    ySymbol1.onclick = function() {
        y = 0;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/0.png";
        yBox.classList.remove('appear');
    }
    ySymbol2.onclick = function() {
        y = 10;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/10.png";
        yBox.classList.remove('appear');
    }
    ySymbol3.onclick = function() {
        y = 11;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/11.png";
        yBox.classList.remove('appear');
    }
    ySymbol4.onclick = function() {
        y = 20;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/20.png";
        yBox.classList.remove('appear');
    }
    ySymbol5.onclick = function() {
        y = 21;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/21.png";
        yBox.classList.remove('appear');
    }
    ySymbol6.onclick = function() {
        y = 22;
        py1.classList.add('hidden');
        py2.classList.add('hidden');

        yImage.src = "images/22.png";
        yBox.classList.remove('appear');
    }
}

zButton.onclick = function() {
    zBox.classList.add('appear');

    zSymbol1.onclick = function() {
        z = 0;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/0.png";
        zBox.classList.remove('appear');
    }
    zSymbol2.onclick = function() {
        z = 10;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/10.png";
        zBox.classList.remove('appear');
    }
    zSymbol3.onclick = function() {
        z = 11;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/11.png";
        zBox.classList.remove('appear');
    }
    zSymbol4.onclick = function() {
        z = 20;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/20.png";
        zBox.classList.remove('appear');
    }
    zSymbol5.onclick = function() {
        z = 21;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/21.png";
        zBox.classList.remove('appear');
    }
    zSymbol6.onclick = function() {
        z = 22;
        pz1.classList.add('hidden');
        pz2.classList.add('hidden');

        zImage.src = "images/22.png";
        zBox.classList.remove('appear');
    }
}

// calculate
btnCalculate.onclick = function() {

    const formulaX = 2 * x + 11;
    const formulaY = ((2 * z) + y) - 5;
    const formulaZ = (y + z) - x;

    
    code.innerHTML = `${Math.abs(formulaX)}, ${Math.abs(formulaY)}, ${Math.abs(formulaZ)}`;

}

// close symbol containers
closeXbox.onclick = function() {
    xBox.classList.remove('appear');
}
closeYbox.onclick = function() {
    yBox.classList.remove('appear');
}
closeZbox.onclick = function() {
    zBox.classList.remove('appear');
}
btnReset.onclick = function() {
    x = 0;
    y = 0;
    z = 0;

    xImage.src = "";
    yImage.src = "";
    zImage.src = "";

    console.clear();
    
    px1.classList.remove('hidden');
    px2.classList.remove('hidden');
    py1.classList.remove('hidden');
    py2.classList.remove('hidden');
    pz1.classList.remove('hidden');
    pz2.classList.remove('hidden');

    code.innerHTML = ``;
    
}
(function() {

    var Ecube = window.Ecube;
    
    var stopRotation = document.querySelector('#stop-rotation');
    var initRotation = document.querySelector('#init-rotation');
    var routatey = 130;
    var routatex = 130;

    window.animate =  Ecube.animate([
        { transform: 'rotate3d(0, 0, 0, 0)' },
        { transform: 'rotate3d(1, 1, 0, 360deg)' }
    ], {
        duration: 6000,
        iterations: Infinity
    });
    initRotation.addEventListener("click", () => {
        Ecube.classList.add('box-area-animation');
    });

    stopRotation.addEventListener("click", () => {
        window.animate.pause();
        routatey = 130;
        routatex = 130;
    })

    function routateX( direction ) {
        Ecube.style.transform = `rotate3d(0, 1, 0, ${routatex}deg)`;
        if ( direction == 'right' ) {
            routatex += 2;
        } else {
            routatex -= 2;
        }

        if ( routatex > 359 ) {
            routatex = 0;
        } else if ( routatex <= 0 ) {
            routatex = 360;
        }
    }

    function routateY( direction ) {
        Ecube.style.transform = `rotate3d(1, 1, 0, ${routatey}deg)`;
        if ( direction == 'top' ) {
            routatey += 2;
        } else {
            routatey -= 2;
        }

        if ( routatex > 359 ) {
            routatey = 0;
        } else if ( routatey <= 0 ) {
            routatey = 360;
        }
    }

    setInterval(() => {

    }, 6000);


    document.addEventListener("keypress", (e) => {
        
        switch (e.keyCode) {
            case 100:
                routateY( 'top' );
                break;
            case 97:
                routateY( 'bottom' );
                break;
            case 119:
                routateY( 'top' );
                break;
            case 115:
                routateY( 'bottom' );
                break;
            default:
                break;
        }

    })

})()
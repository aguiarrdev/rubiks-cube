(function() {
    
    window.Ecube = document.querySelector('.box-area');
    
    window.face = {
        new: function( position, color ) {
            return {
                lines: [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9],
                ],
                position: position,
                color: color
            }
        }
    }

    window.cube = [];

    window.EFaces = document.querySelectorAll('.box');

    EFaces.forEach( element => {
        let faceName = element.getAttribute("data-face");
        let faceColor = element.getAttribute("data-color");

        let newface = face.new(faceName, faceColor);

        map_cube_face( element, newface);
        
    });

    function map_cube_face( faceElement, face ) {
        let count = 0;
        let lines = faceElement.querySelectorAll('.grid-line');
        lines.forEach(line => {
            let blocks = line.querySelectorAll(".grid-item");
            for (let i = 0; i < 3; i++) {
                face.lines[count][i] = (blocks[i]);
            }
            count++;
        });
        cube.push(face);
        console.log(cube);
    }
    
})()
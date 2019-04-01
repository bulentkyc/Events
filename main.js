let rndArr=[];
let firstCell, secondCell;
let openedCellCount=0;

function clickCell (event){
    if (openedCellCount == 0) {
        firstCell = event.target;
        event.target.innerHTML = rndArr[event.target.id];
        openedCellCount += 1;
    } else{
        secondCell = event.target;
        event.target.innerHTML = rndArr[event.target.id];
        openedCellCount = 0;
        if (firstCell.innerHTML == secondCell.innerHTML) {
            firstCell.style.backgroundColor = 'rgb(31, 41, 52)';
            secondCell.style.backgroundColor = 'rgb(31, 41, 52)';
        } else {
            setTimeout( function(){
            firstCell.innerHTML = '';
            secondCell.innerHTML = '';
            }, 1800 );
        }
    }
}

let cellArr = document.getElementsByClassName('cell');
for(cell of cellArr){
    cell.addEventListener('click', (event)=> clickCell(event));
}

let rndGen = () => {
    let newRnd;  //new random number for every iteration
    let rndCount = 0;

    for(i=0; i<16; i++){
        do {
            rndCount = 0;
            newRnd = Math.floor(Math.random() * 8);
            for(j=0; j<=i; j++){
                if(rndArr[j] == newRnd){
                    rndCount += 1;
                }
            }
            if (rndCount < 2) {
                rndArr[i] = newRnd;
            }
        } while (rndCount == 2);
    }
    console.log(rndArr);
}
rndGen();
(function(){
    document.querySelector('.seats').addEventListener('click', selectSeat);

    document.querySelector('#movies').addEventListener('change', getMoviePrice);
    
    let output = document.querySelector('.prices-seats');

    let moviePrice, pickedSeats, HTMLOutput;

    function selectSeat(e) {
        // ADD SELECT AND DESELECT SEAT
        if(e.target.classList.contains('occupied')) {
            e.target.classList.toggle('discolored');
        }
        else if(e.target.classList.contains('seat')) {
            e.target.classList.toggle('selected');
        }
                
        // ADD TO AMOUNT OF SEAT SELECTED
        let allSelectedSeats = document.querySelectorAll('.selected');
        let seatArr = Array.from(allSelectedSeats);
        seatArr.shift();
        pickedSeats = seatArr.length;


        DOMOutput();

    }
    // ADD TO TOTAL OF THE PRICES OF SELECTED SEATS

    function getMoviePrice(e) {
        // SET VALUE TO USE TO CALCULATE SEAT PRICES
        moviePrice = e.target.value;

        DOMOutput();
    }

    // DOM TEMPLATE OF THE OUTPUT

    HTMLOutput = `You have Selected <span class="glow">0</span> seats which cost a total of $<span class="glow">0</span>.`;

    output.innerHTML = HTMLOutput;

    // CALCULATE TICKET PRICE AND PRINT TO DOM

    function DOMOutput() {
        if ( pickedSeats == undefined || pickedSeats == 0) {
            pickedSeats = 0;
        } else if(moviePrice == undefined) {
            moviePrice = 0;
        }

        HTMLOutput = `You have Selected <span class="glow">${pickedSeats}</span> seats which cost a total of $<span class="glow">${pickedSeats * moviePrice}</span>.`;

        output.innerHTML = HTMLOutput;
    }
})();
(function(){
    document.querySelector('.seats').addEventListener('click', selectSeat);

    document.querySelector('#movies').addEventListener('change', getMoviePrice);

    let moviePrice, pickedSeats;

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

    function DOMOutput() {
        let output = document.querySelector('.prices-seats');
        let HTMLOutput = `You have Selected <span class="glow">${pickedSeats}</span> seats which cost a total of $<span class="glow">${pickedSeats * moviePrice}</span>.`;
        if (pickedSeats == undefined) {
            pickedSeats = 0;
        }
        output.innerHTML = HTMLOutput;
    }
})();
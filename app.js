// (function(){
    // document.querySelector('.seats').addEventListener('click', selectSeat);

    // document.querySelector('#movies').addEventListener('change', getMoviePrice);

    function selectSeat(e) {
        // ADD SELECT AND DESELECT SEAT
        console.log(e.target);
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
        let pickedSeats = seatArr.length;
        // console.log(pickedSeats); 

        return pickedSeats;
    }

    console.log(selectSeat());

    // ADD TO TOTAL OF THE PRICES OF SELECTED SEATS

    function getMoviePrice(e) {
        // SET VALUE TO USE TO CALCULATE SEAT PRICES
        let moviePrice = e.target.value;
        console.log(moviePrice);

    }
// })();
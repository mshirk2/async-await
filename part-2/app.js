url = 'http://deckofcardsapi.com/api/deck';

// 1.

async function question1(){
    let res = await axios.get(`${url}/new/draw/?count=1`)
	let {suit, value} = res.data.cards[0];
	console.log(`${value} of  ${suit}`);
};
question1();


// 2.
async function question2(){
    let firstCard = await axios.get(`${url}/new/draw/?count=1`)
    let deckID = firstCard.data.deck_id;
	let secondCard = await axios.get(`${url}/${deckID}/draw/?count=1`);
    [firstCard, secondCard].forEach(card => {
		console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
	});
}
question2();


// 3.
async function question3(){
    let $button = $("#draw");
    let $cardArea = $("#card-area")
    let newDeck = await axios.get(`${url}/new/shuffle/?deck_count=1`)
   
    $button.on('click', async function(){
        let res = await axios.get(`${url}/${newDeck.data.deck_id}/draw/?count=1`);
        let cardImg = res.data.cards[0].image;
        $cardArea.append(
            $("<img>", {src: cardImg})
        )
        if (res.data.remaining === 0) $button.remove();
    });
}
question3();
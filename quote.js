//quote arrays
const quote1 = ["Get busy living or get busy dying. -Stephen King"];
const quote2 = ["You only live once, but if you do it right, once is enough. -Mae West"];
const quote3 = ["Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison"];
const quote4 = ["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. -Steve Jobs"];
const quote5 = ["With self-discipline, most anything is possible. -Theodore Roosevelt"];
const quote6 = ["If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month. -Theodore Roosevelt"];
const quote7 = ["The way I see it, if you want the rainbow, you gotta put up with the rain. -Dolly Parton"];
const quote8 = ["In three words I can sum up everything I've learned about life: It goes on. -Robert Frost"];
const quote9 = ["Life is ten percent what happens to you and ninety percent how you respond to it. -Charles Swindoll"];
const quote10 = ["I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. -Michael Jordan"];
const quote11 = ["Around here, however, we don't look backwards for very long. We keep moving forward, opening up new doors and doing new things, because we're curious... and curiosity keeps leading us down new paths. -Walt Disney"];
const quote12 = ["Never look back unless you are planning to go that way. -Henry David Thoreau"];
const quote13 = ["It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. -Theodore Roosevelt"];
const quote14 = ["Get action. Do things; be sane; don't fritter away your time; create, act, take a place wherever you are and be somebody; get action. -Theodore Roosevelt"];

const quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14];
// function
function randomQuotes() {
     let array1 = [Math.floor(Math.random() * quotes.length)];
     document.getElementById('quoteDisplay').innerHTML = quotes[array1];
}


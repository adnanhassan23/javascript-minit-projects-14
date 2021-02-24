const quotes = [
    `“The way get started is to quit talking and begin doing.” <br /> <p>-Walt Disney</p>`,
    `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” <br /><p>-Winston Churchill</p>`,
    `“Don’t let yesterday take up too much of today.”<br /><p>-Will Rogers</p>`,
    `“It’s not whether you get knocked down, it’s whether you get up.”<br /><p>-Vince Lombardi</p>`,
    `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”<br /><p>-Steve Jobs</p>`,
    `“People who are crazy enough to think they can change the world, are the ones who do.”<br /><p>-Rob Siltanen</p>`,
    `“Failure will never overtake me if my determination to succeed is strong enough.”<br /><p>-Og Mandino</p>`,
    `“Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.”<br /><p>-Mohnish Pabari</p>`,
    `“We may encounter many defeats but we must not be defeated.”<br /><p>-Maya Angelou</p>`,
    `“Knowing is not enough; we must apply. Wishing is not enough; we must do.”<br /><p>–Johann Wolfgang Von Goethe</p>`,
    `“Imagine your life is perfect in every respect; what would it look like?”<br /><p>-Brian Tracy</p>`,
    `“We generate fears while we sit. We overcome them by action.”<br /><p>-Dr. Henry Link</p>`,
    `“The man who has confidence in himself gains the confidence of others.”<br /><p>-Hasidic Proverb</p>`,
    `“The only limit to our realization of tomorrow will be our doubts of today.”<br /><p>-Franklin D. Roosevelt</p>`,
    `“What you lack in talent can be made up with desire, hustle and giving 110% all the time.”<br /><p>-Don Zimmer</p>`,
    `“Do what you can with all you have, wherever you are.”<br /><p>-Theodore Roosevelt</p>`,
    `“You are never too old to set another goal or to dream a new dream.”<br /><p>-C.S. Lewis</p>`,
    `“To see what is right and not do it is a lack of courage.”<br /><p>-Confucius</p>`,
    `“For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded.”<br /><p>-Jack Canfield</p>`,
    `“I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.”<br /><p>-Michael Phelps</p>`,
    `“You don’t have to be great to start, but you have to start to be great.”<br /><p>-Zig Zaglar</p>`,
    `“I attribute my success to this: I never gave or took any excuse.”<br /><p>–Florence Nightingale</p>`,
    `“The best time to plant a tree was 20 years ago. The second best time is now.”<br /><p>-Chinese Proverb</p>`,
    `“The best revenge is massive success.”<br /><p>-Frank Sinatra</p>`,
    `“Fall seven times and stand up eight.”<br /><p>-Japanese Proverb</p>`,
  ]
  
  function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length))
    document.querySelector('.quote-display').innerHTML = quotes[randomNumber]
  }
  
  const button = document.querySelector('.new-quote').addEventListener("click", newQuote)
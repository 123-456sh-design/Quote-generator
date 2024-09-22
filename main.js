let quote = document.querySelector(".quote")
let quoteBtn = document.querySelector(".quote-generator")
let quoteList =
['"Don\'t judge each day by the harvest you reap but by the seeds that you plant" (Inspirational Quote)',
'"The best way out is always through" (Inspirational Quote)',
'"Start where you are. Use what you have. Do what you can." (Motivational Quote)',
'"You will never win if you never begin" (Motivational Quote)',
'"Every day brings new choices" (Positive Quote)',
'"You cannot have a positive life and a negative mind" (Positive Quote)',
'"Excellence is not a skill, it\'s an attitude" (Attitude Quote)',
'"Reject your sense of injury and the injury itself disappears" (Attitude Quote)',
'"We live in a rainbow of chaos" (Life Quote)',
'"Life is really simple, but we insist on making it complicated" (Life Quote)'
]

quoteBtn.addEventListener("click",function(){
    let generateQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
    quote.innerHTML = generateQuote
})
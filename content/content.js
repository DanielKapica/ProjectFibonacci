let articlesJSON = [{
        "id": 1,
        "matchingArticleId": 2,
        "title": "Emmerdale: Lisa Riley reveals how she lost 12 stone",
        "text": "Stephen Barclay has been confirmed as the new Brexit Secretary as Theresa May seeks to fill posts in her cabinet.",
        "source": "https://www.bbc.co.uk/news/uk-46241693",
        "isMisleading": false,
        "reason": "This is not fake news (clickbait) because… the context is upfront and apparent and we have the name of a person so we can verify the information by searching",
        "img": "https://cdn.images.express.co.uk/img/dynamic/79/590x/1045300_1.jpg"
    },
    {
        "id": 2,
        "matchingArticleId": 1,
        "title": "You'll never believe how much weight this celebrity lost in a month!",
        "text": "",
        "source": "www.express.co.uk",
        "isMisleading": true,
        "reason": "This is not fake news (clickbait) because… the context is upfront and apparent and we have the name of a person so we can verify the information by searching. We have no context to who the celebrity is, and it is using persuasive language to lure in the reader instead of facts.",
    },
    {
        "id": 3,
        "matchingArticleId": 4,
        "title": "Queen Elizabeth Removes Obamas For Royal Wedding Guest List",
        "text": `For eight years, Michelle Obama genuinely thought she was a queen and expected to be treated like one. Now that she’s a regular citizen, she’s having a hard time of letting go of her former status as the (failed) first lady and keeps trying to push her way into every major social scene where she doesn’t belong and is apparently not invited. When she heard the news that Prince Harry was marrying a black American girl, she assumed it was her place to be on that guest list, which has to be approved by the Queen of England herself. Michelle made a desperation move to sneak a spot on that exclusive guest list and as soon as the real queen found out what the wannabe royalty did, she delivered a brutal beatdown that was definitely deserved. As soon as the big news about the royal engagement of Prince Harry and an American actress Meghan Markle was announced, the Obamas saw an opportunity to edge their way into the elites, like a couple of desperate kids trying to hang with the popular crowd at school. Barack immediately got on social media to beat President Trump to the congratulatory punch. He has a lot more time on his hands than the Commander-in-Chief who is busy cleaning up his mess. Barack practically stalked the prince on Twitter and made a post within seconds of the news coming out, which perhaps had an undertone of letting the royals know that he and Michelle were available that day to attend.`,
        "source": "https://archive.fo/1cJLE#selection-641.0-659.217",
        "isMisleading": true,
        "reason": "This is fake news (a false story) because…it is worded in a way that comes across as there is less background of their story and is less likely to be true.",
        "img": "https://media.glamour.com/photos/5b227789099975740f2ba183/master/w_644,c_limit/meghan-markle.jpg",
    },
    {
        "id": 4,
        "matchingArticleId": 3,
        "title": "Queen Elizabeth Has Reportedly Invited Meghan Markle's Mother Doria to Spend Christmas With the Royals",
        "text": `Meghan Markle's mother Doria Ragland made a big splash at the royal wedding. Despite all of the pre-wedding drama caused by Meghan Markle's father, Doria was poised, collected, and there for Meghan (as the mother of the bride should be). In the days leading up to the wedding, Ragland made time to have tea with the Queen, where the two supposedly discussed—with Meghan and Prince Harry—whether or not Meghan Markle's father Thomas Markle should still attend the wedding (after he staged paparazzi photos for money and then spread lies to gain public sympathy). It's clear that Doria earned the Queen's trust during this time, as the The Daily Mail is reporting that Queen Elizabeth has invited Meghan Markle's mother to spend Christmas with the royals this year, an extremely rare offer that hasn't ever been extended to Kate Middleton's family.`,
        "source": "https://www.elle.com/culture/celebrities/a24629749/queen-elizabeth-meghan-markle-mother-doria-christmas-invitation/",
        "isMisleading": false,
        "reason": "This is not fake news (a false story) because…it states ‘reportedly’ so this means that the people presenting think that the source is not 100% reliable but this is still real news."
    },
    {
        "id": 6,
        "matchingArticleId": 5,
        "title": "Why we’re adding the Q to LGBT",
        "text": "I am proud to announce that Equality Federation’s staff and board, several of whom identify as queer, have decided to add the letter Q to our mission and begin using the full acronym LGBTQ. To some this decision may seem like we are late to the party and to others it may be a challenge. I remember when the word queer was near ubiquitously used as an anti-gay epithet outside of “queer theory” courses in liberal arts schools. Through a process of reclaiming, the word queer, like many other words, has evolved to represent something more meaningful.",
        "source": "https://www.huffingtonpost.com/rebecca-isaacs/why-were-adding-the-q_b_8535208.html",
        "isMisleading": false,
        "reason": "This is not fake news (a false story) because… the writer provides context immediately, being upfront that this is an opinion piece, and something shared by a group of people “we’re”"
    },
    {
        "id": 7,
        "matchingArticleId": 8,
        "title": "Was He Raised by a Family of Wolves, or Something Crazy?!",
        "text": '',
        "source": "",
        "isMisleading": true,
        "reason": "This is fake news (clickbait) because… the context is unclear and the writer uses persuasive language feature, rhetorical question, to lure the reader in",
        "img": "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/29/2015/03/The-Real-Life-Wolf-Man.jpg",
    },
    {
        "id": 8,
        "matchingArticleId": 7,
        "title": "Experience: Living with wolves",
        "text": "",
        "source": "",
        "isMisleading": false,
        "reason": "This is not fakes new (clickbait) because… the writer does not bother with any persuasive language as the subject matter is intriguing enough"
    },
    {
        "id": 9,
        "matchingArticleId": 10,
        "title": "VIOLENT LEFTIST MOB Beat the Hell Out of Innocent Jewish Man in Philly Riots (VIDEO)",
        "text": "A very small group of pro-American activists planned a protest called “We The People” to take place Saturday in Philadelphia.But a very few number of conservative protesters showed up. So the far left activists beat the hell out of a Jewish man walking down the street.",
        "source": "https://www.thegatewaypundit.com/2018/11/violent-leftist-mob-beat-the-hell-out-of-innocent-jewish-man-in-philly-riots-video/",
        "isMisleading": true,
        "reason": "This is fake news (partial journalism) because the writer clearly identifies with a side, with the headline featuring unprofessional phrasing “Beat the hell out of",
        "img": "https://psmag.com/.image/t_share/MTU3MjA3Njg5NjI0MDM3MTE1/gettyimages-830759682.jpg",
    },
    {
        "id": 10,
        "matchingArticleId": 9,
        "title": "Eritrean man shot and beaten to death after being mistaken for 'terrorist' in Israel bus station attack",
        "text": "An Eritrean man shot by an Israeli security guard and then attacked by a mob who mistook him for an assailant in a fatal bus station attack has died. Israeli news websites posted security camera footage that shows Mulu Habtom Zerhom, crawling on the floor and a security guard shooting him.",
        "source": "https://www.belfasttelegraph.co.uk/news/world-news/eritrean-man-shot-and-beaten-to-death-in-israel-after-being-mistaken-for-terrorist-following-fatal-bus-station-attack-34122162.html",
        "isMisleading": false,
        "reason": "This is not fake news (impartial journalism) because the writer remains neutral and professional by just stating the facts"
    },
]
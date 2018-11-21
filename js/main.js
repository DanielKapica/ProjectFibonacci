let score = 0;
let currentArticle1 = {
    "number": 1,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null,
    "reason": "",
    "img": ""
};

let currentArticle2 = {
    "number": 2,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null,
    "reason": "",
    "img": ""
};

function getRandomArticle(isMisleading) {
    //Fiter articles depending on is isMisleading param
    let filteredArticles = articlesJSON.filter(article => {
        return article.isMisleading == isMisleading;
    })

    //Return a random article from the filtered array filteredArticles
    return filteredArticles[randomNumber(0, filteredArticles.length)];
}

//Return a random Number between two values
function randomNumber(lowest, highest) {
    return Math.floor((Math.random() * highest) + lowest);
}


function updateArticle(numberOfArticle, article) {
    if (numberOfArticle == 1) {
        //Get html article tags
       let title1 = document.getElementById("articleTitle1");
        text1 = document.getElementById("articleText1");
        let sourceFooter1 = document.getElementById("sourceFooter1");
        let img1 = document.getElementById('img1')


        //Update currentArticle1
        currentArticle1.title = article.title;
        currentArticle1.text = article.text;
        currentArticle1.source = article.source;
        currentArticle1.reason = article.reason;
        currentArticle1.img = article.img;
        currentArticle1.isMisleading = article.isMisleading
 
        //Change source address to Anonymous if no link provided
        if (!currentArticle1.source.includes('.')) {
            currentArticle1.source = "Anonymous"
        }

        //Assign values to html tags
        title1.innerHTML = `"${currentArticle1.title}"`;
        text1.innerHTML = currentArticle1.text;
        img1.src = currentArticle1.img
        sourceFooter1.innerHTML = `
        <a href="${currentArticle1.source}"
        <p id="articleSource1">Source: ${currentArticle1.source}</p>
        </a>
        `;

    } else {
        //Get html article tags
        let title2 = document.getElementById("articleTitle2");
        text2 = document.getElementById("articleText2");
        let sourceFooter2 = document.getElementById("sourceFooter2");
        let img2 = document.getElementById('img2')

        //Update currentArticle2
        currentArticle2.title = article.title;
        currentArticle2.text = article.text;
        currentArticle2.source = article.source;
        currentArticle2.reason = article.reason;
        currentArticle2.img = article.img;
        currentArticle2.isMisleading = article.isMisleading;

        //Change source address to Anonymous if no link provided
        if (!currentArticle2.source.includes('.')) {
            currentArticle2.source = "Anonymous";
        }

        //Assign values to html tags
        title2.innerHTML = `"${currentArticle2.title}"`;
        text2.innerHTML = currentArticle2.text;
        img2.src = currentArticle2.img
        sourceFooter2.innerHTML = `
        <a href="${currentArticle2.source}"
        <p id="articleSource1">Source: ${currentArticle2.source}</p>
        </a>
        `;
    }
}

function getArticleSet() {
    let randomPlacement = 1;
    const realArticle = getRandomArticle(true);
    const misleadingArticle = getRandomArticle(false);

    //Stop the 
    if (realArticle == currentArticle1 || 
        misleadingArticle == currentArticle1||
        realArticle == currentArticle2 ||
        misleadingArticle == currentArticle2
        ) {
        getArticleSet()
    }
    //Put the fake and real news on different sides of the screen
    randomPlacement = randomNumber(1, 2)
    if (randomPlacement == 1) {
        updateArticle(1, realArticle);
        updateArticle(2, misleadingArticle);
    } else {
        updateArticle(2, realArticle);
        updateArticle(1, misleadingArticle);
    }

}

function leftArticle() {
    const isCorrectClick = !currentArticle1.isMisleading
    showReason(isCorrectClick);
}

function rightArticle() {
    const isCorrectClick = !currentArticle2.isMisleading
    showReason(isCorrectClick);
}

function showReason(userIsCorrect) {

    let reasonContainer = document.getElementById('reason-container')
    let reasonContainerBody = document.getElementById('reasonContainerBody')
    let reasonTitle = document.getElementById('reasonTitle');
    
    reason1 = currentArticle1.reason;
    reason2 = currentArticle2.reason;

    reasonContainer.style.display = "block";
    if (userIsCorrect) {
        updateScore(1)
        reasonTitle.innerHTML = `You are correct!\nReasons:`;
        reasonContainerBody.className += " text-success"
    } else if (!userIsCorrect) {
        reasonTitle.innerHTML = `You are incorrect!\nReasons:`;
        reasonContainerBody.className += " text-danger"
    }

    document.getElementById('reasonText').innerHTML =
        `<ul>
    <h3>Left Article</h3>
    <li><h4>${reason1}</h4></li>
    <h3>Right Article</h3> 
    <li><h4>${reason2}</h4></li>
    </ul>`;
}


function updateScore(increment) {
    score += increment
    updateScoreChip()
}

function updateScoreChip(){
    document.getElementById('scoreChip').innerHTML = `Score: ${score}`
    document.getElementById('scoreChip').style.backgroundColor = 'rgb(' + (240 - (score * 14)) + ',' + 240 + ',' + (240 - (score * 14)) + ')';
}

function hideReason() {
    document.getElementById('reason-container').style.display = "none";
}

function nextQuestion() {
    hideReason();
    getArticleSet();
    let reasonContainerBody = document.getElementById('reasonContainerBody')
    reasonContainerBody.className = "card-body"
}

//ONSTART
getArticleSet();
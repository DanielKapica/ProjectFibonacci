let currentArticle1 = {
    "number": 1,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null,
    "reason": ""
}

let currentArticle2 = {
    "number": 2,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null,
    "reason": ""
}


function getRandomArticle(isMisleading) {
    //Fiter articles depending on is isMisleading param
    let filteredArticles = articlesJSON.filter(article => {
        return article.isMisleading == isMisleading
    })

    //Return a random article from the filtered array filteredArticles
    return filteredArticles[randomNumber(0, filteredArticles.length)]
}

//Return a random Number between two values
function randomNumber(lowest, highest) {
    return Math.floor((Math.random() * highest) + lowest);
}

function updateArticle(numberOfArticle, article) {
    if (numberOfArticle == 1) {
        //Get html article tags
        title1 = document.getElementById("articleTitle1")
        text1 = document.getElementById("articleText1")
        source1 = document.getElementById("articleSource1")

        //Update currentArticle1
        currentArticle1.title = article.title
        currentArticle1.text = article.text
        currentArticle1.source = article.source
        currentArticle1.reason = article.reason

        //Assign values to html tags
        title1.innerHTML = currentArticle1.title
        text1.innerHTML = currentArticle1.text
        source1.innerHTML = currentArticle1.source
    } else {
        //Get html article tags
        title2 = document.getElementById("articleTitle2")
        text2 = document.getElementById("articleText2")
        source2 = document.getElementById("articleSource2")

        //Update currentArticle2
        currentArticle2.title = article.title
        currentArticle2.text = article.text
        currentArticle2.source = article.source
        currentArticle2.reason = article.reason

        //Assign values to html tags
        title2.innerHTML = currentArticle2.title
        text2.innerHTML = currentArticle2.text
        source2.innerHTML = currentArticle2.source
    }
}

function getArticleSet() {
    let randomPlacement = 1
    const realArticle = getRandomArticle(true);
    const misleadingArticle = getRandomArticle(false);

    //Put the fake and real news on different sides of the screen
    randomPlacement = randomNumber(1, 2)
    if (randomNumber == 1) {
        updateArticle(1, realArticle);
        updateArticle(2, misleadingArticle);
    } else {
        updateArticle(2, realArticle);
        updateArticle(1, misleadingArticle);
    }

}

function leftArticle() {
    showReason();
}

function rightArticle() {
    showReason();
}

function showReason() {
    //document.body.style.background = 'red';


    reason1 = currentArticle1.reason
    reason2 = currentArticle2.reason

    document.getElementById('reason-container').style.display = "block";


    document.getElementById('reasonTitle').innerHTML = `Reasons`

    document.getElementById('reasonText').innerHTML =
        `<ul>
    <h3>Left Article</h3>
    <li>${reason1}</li>
    <h3>Right Article</h3>
    <li>${reason2}</li></ul>`

}

function hideReason() {
    document.getElementById('reason-container').style.display = "none";
}

function nextQuestion() {
    hideReason()
    getArticleSet()
}

//ONSTART
getArticleSet();

//Listeners
let article1Btn = document.getElementById('article1')
let article2Btn = document.getElementById('article2')

article1Btn.addEventListener("click", leftArticle, false)
article2Btn.addEventListener("click", rightArticle, false)
let currentArticle1 = {
    "number": 1,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null
}

let currentArticle2 = {
    "number": 2,
    "title": "",
    "text": "",
    "source": "",
    "isMisleading": null
}

const articlesJSON = [{
    "title": "Stephen Barclay named new Brexit Secretary",
    "text": "Stephen Barclay has been confirmed as the new Brexit Secretary as Theresa May seeks to fill posts in her cabinet.",
    "source": "https://www.bbc.co.uk/news/uk-46241693",
    "isMisleading": false
},
{
"title": "Ada is organised",
    "text": "Ada staff know what they are doing",
    "source": "https://www.bbc.co.uk/news/uk-46241693",
    "isMisleading": true
}]

function getRandomArticle(isMisleading) {
    let filteredArticles =  articlesJSON.filter(article => {
        return article.isMisleading == isMisleading
    })

    return filteredArticles[0, filteredArticles.length - 1]
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

        //Assign values to html tags
        title2.innerHTML = currentArticle2.title
        text2.innerHTML = currentArticle2.text
        source2.innerHTML = currentArticle2.source
    }
}

function getArticleSet() {
    const realArticle = getRandomArticle(true);
    const misleadingArticle = getRandomArticle(false);

    updateArticle(1, realArticle);
    updateArticle(2, misleadingArticle);
}

function leftArticle(){
    alert('left');
}

function rightArticle(){
    alert('right')
}

//ONSTART
getArticleSet()
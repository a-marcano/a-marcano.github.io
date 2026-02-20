function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("newContent").style.display = "block";
    document.getElementById("filterContent").style.display = "none";
}

function newContent() {
    let title = document.getElementById("inputHeader").value;
    let content = document.getElementById("articleType").value;
    let newArticle = document.createElement("div");
    newArticle.className = "article";
    newArticle.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
    
    if (content == "opinion") {
        newArticle.className += " opinion";
    }
    else if (content == "recipe") {
        newArticle.className += " recipe";
    }
    else if (content == "update") {
        newArticle.className += " update";
    }

    document.getElementById("articles").appendChild(newArticle);
}

function filterArticles() {
    let choice = document.getElementById("filterContent").value;
    
    if (choice == "opinionCheckbox") {
        document.getElementsByClassName("recipe").style.display = "none";
        document.getElementsByClassName("update").style.display = "none";
    }
        else if (choice == "recipeCheckbox") {
        document.getElementsByClassName("opinion").style.display = "none";
        document.getElementsByClassName("update").style.display = "none";
    }
        else if (choice == "updateCheckbox") {
        document.getElementsByClassName("opinion").style.display = "none";
        document.getElementsByClassName("recipe").style.display = "none";
    }
}
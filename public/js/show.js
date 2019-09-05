var showInfoText = {
    title: "Here's the title!",
    description: "Here's a description of the show.",
    firstAir: "September 3, 2019"
}

var showInfoMarkup = document.createElement(`<div class="show-info-container">
<h1 class="show-title">
    <a href="">${showInfoText.title}</a>
</h1>
<p class="show-description">${showInfoText.description}</p>
<p>${showInfoText.title} first aired on ${showInfoText.firstAir}</p>
</div>`)

const getShowData = async() => {
    const url = window.location.href;
    const paramArray = url.split("/");
    const showId = parseInt(paramArray[paramArray.length - 1].toString());
    const showResponse = await fetch(`/show/data/${showId}`);
    const showDataJSON = await showResponse.json();
    console.log(showDataJSON);
}

const addShowData = (showDataJSON) => {
    document.body.appendChild(showInfo);
}

getShowData();
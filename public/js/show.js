const getShowData = async() => {
    const url = window.location.href;
    const paramArray = url.split("/");
    const showId = parseInt(paramArray[paramArray.length - 1].toString());
    const showResponse = await fetch(`/show/data/${showId}`);
    const showDataJSON = await showResponse.json();
    console.log(showDataJSON);
}

getShowData();
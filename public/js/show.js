const showInfo = `<div class="show-info-container">
<h1 class="show-title">
    <a href="">Test Show Title</a>
</h1>
<p class="show-description">Test show description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores soluta eos deserunt est aspernatur dolore odio eum alias eius? Fugiat omnis cupiditate natus quia necessitatibus perspiciatis magnam aspernatur
    id. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima officia sunt distinctio voluptas eaque ullam itaque vitae omnis beatae repellendus.</p>
<p><span class="show-title">This show</span> first aired on <span class="first-air"></span></p>
</div>`

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

const getShowTitle = (data) => {

}

getShowData();
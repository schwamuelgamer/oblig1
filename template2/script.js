let data
let count = 10;
async function getData(event) {

    const url = `https://jsonplaceholder.typicode.com/posts`;

    try {
        const response = await fetch(url);

        const json = await response.json();
        newPosts(json);
        console.log(typeof(json));

        data = json;

    } catch (error) {
        console.error(error.message);
    }
}

async function g(){
    await getData()
    console.log(data);

    for (let i = 1; i <= 18;){
        let div = document.createElement('div');

        let ul = document.createElement('ul');



        for (let j = 1; j <= 3; j++) {
            let p = document.createElement('p');
            let li = document.createElement('li');
            let h2 = document.createElement('h2');

            h2.textContent = data[i].title
            p.textContent = data[i].body
            i++;

            li.appendChild(h2);
            li.appendChild(p);
            ul.appendChild(li);


        }
        div.appendChild(ul);
        CONTENT.appendChild(div);
    }
}



g();


function newPosts(posts){
    let div = document.createElement('div');

    let ul = document.createElement('ul');



    for (let i = 1; i <= 3; i++) {
        let p = document.createElement('p');
        let li = document.createElement('li');
        let h2 = document.createElement('h2');

        h2.textContent = posts[count].title
        p.textContent = posts[count].body

        li.appendChild(h2);
        li.appendChild(p);
        ul.appendChild(li);
        count++;
    }
    div.appendChild(ul);
    CONTENT.appendChild(div);

}


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        getData();
    }
};
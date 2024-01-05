const posts = [
    {
        "url": "/blogpost.html",
        "author": "Ominini Ambie-Barango",
        "title": "Blog Title",
        "summary": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium maiores aspernatur, quam quae animi vel mollitia harum quas. Quis aut dolore eaque repellendus corporis at quas expedita ipsa architecto.",
        "published": "04-Jan-2024",
        "updated": "04-Jan-2024"
    }, {
        "url": "/blogpost.html",
        "author": "Ominini Ambie-Barango",
        "title": "Blog Title",
        "summary": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium maiores aspernatur, quam quae animi vel mollitia harum quas. Quis aut dolore eaque repellendus corporis at quas expedita ipsa architecto.",
        "published": "04-Jan-2024",
        "updated": "04-Jan-2024"
    }, {
        "url": "/blogpost.html",
        "author": "Ominini Ambie-Barango",
        "title": "Blog Title",
        "summary": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium maiores aspernatur, quam quae animi vel mollitia harum quas. Quis aut dolore eaque repellendus corporis at quas expedita ipsa architecto.",
        "published": "04-Jan-2024",
        "updated": "04-Jan-2024"
    }, {
        "url": "/blogpost.html",
        "author": "Ominini Ambie-Barango",
        "title": "Blog Title",
        "summary": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium maiores aspernatur, quam quae animi vel mollitia harum quas. Quis aut dolore eaque repellendus corporis at quas expedita ipsa architecto.",
        "published": "04-Jan-2024",
        "updated": "04-Jan-2024"
    }
];


let text = "";
for (let x of posts) {
    text += "<a href = " + x[url] + "><h3>" + x["title"] + "</h3></a>";
    text += "<p>" + x["summary"] + "</p>";
    text += "<b>" + x["author"] + " | " + x["published"] + "</b>";
    text += "<hr/>";
}
const bloglist = document.querySelector("#main");
bloglist.innerHTML = text;
$(document).ready(function() {
    // Auto gen title bai viet
    var titlePost = @json($record->title);
    document.getElementById("title-post-h1").innerHTML = titlePost;
    // Auto gen muc luc
    var li = [];

    let headers = document.querySelectorAll('h2,h3');
    var i = 0;
    headers.forEach((header, index) => {
        if (header.localName === 'h2') {
            li.push(`<li class="` + `tag-h2` + `" onclick="scrollOnTop(` + i + `)">` + header
                .innerHTML + `</li>`);
            i++;
        }
        if (header.localName === 'h3') {
            li.push(`<li class="` + `tag-h3` + `" onclick="scrollOnTop(` + i + `)">` + header
                .innerHTML + `</li>`);
            i++;
        }

    });
    $('.toc_content .toc_list').html(li.join(''));
});

function scrollOnTop(params) {
    let headers = document.querySelectorAll('h2,h3');
    headers.forEach((header, index) => {
        if (params == index) {
            var marginTop = header.offsetTop - 100;
            window.scrollTo(0, marginTop);
        }
    });
}
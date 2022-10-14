fetch("assets/json/news.json").then(data => {
    data.json().then(news => {
        let sortedNews = news.sort((a, b) => (new Date(a.date.replace(/(.*)\.(.*)\.(.*)/, '$3-$2-$1')) - new Date(b.date.replace(/(.*)\.(.*)\.(.*)/, '$3-$2-$1'))))

        for (let index = 0; index < sortedNews.length; index++) {
            let newsJSON = sortedNews[index];
            let date = newsJSON.date;
            let headline = newsJSON.headline;
            let text = newsJSON.text.slice(0, 149);
            let link = newsJSON.link
            let image = newsJSON.image
            let category = newsJSON.category
            let top = newsJSON.top
            
            if (top == undefined || false) {
                document.getElementById("news-old").innerHTML +=
                '<div class="col-md-6 col-lg-4 mb-4">'+
                    '<div class="card card-news bg-grey-light-30">' +
                        '<div class="card-img card-img-medium image-border image-border-secondary image-zoom">' +
                            '<img src=' + image + '>' +
                        '</div>' + 
                        '<div class="card-body">' + 
                            '<div class="card-content">' + 
                                '<span class="badge badge-secondary mr-2">' + category + '</span>' + 
                                '<div class="date">' + date + '</div>' + 
                                '<h5 class="mt-2">' + headline + '</h5>' + 
                                '<p class="mt-2">' + text + '</p>' +
                            '</div>' +
                            '<a class="btn btn-secondary mt-2" href=' + link + ' title="Headline" target="_blank">Mehr erfahren</a>' + 
                        '</div>' +
                    '</div>' +
                '</div>'
            } else if (top) {
                document.getElementById("news-old").innerHTML +=
                '<div class="col-md-6 col-lg-4 mb-4">'+
                    '<div class="card card-news bg-grey-light-30">' +
                        '<div class="card-img card-img-medium image-border image-border-secondary image-zoom">' +
                            '<img src=' + image + '>' +
                        '</div>' + 
                        '<div class="card-body">' + 
                            '<div class="card-content">' + 
                                '<div class="badge badge.top badge-cyan">TOP</div>' +
                                '<span class="badge badge-secondary mr-2">' + category + '</span>' + 
                                '<div class="date">' + date + '</div>' + 
                                '<h5 class="mt-2">' + headline + '</h5>' + 
                                '<p class="mt-2">' + text + '</p>' +
                            '</div>' +
                            '<a class="btn btn-secondary mt-2" href=' + link + ' title="Headline" target="_blank">Mehr erfahren</a>' + 
                        '</div>' +
                    '</div>' +
                '</div>'
            }
        }
    })
})
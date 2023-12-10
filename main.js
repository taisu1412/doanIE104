
const app = {
    listAlbum : [
        {
            id: 0,
            url: "./image/album-1.jpg",
            title: "DESIGN SLIDER",
            date: "01/01/2023"
        },
        {
            id: 1,
            url: "./image/album-2.jpg",
            title: "DESIGN SLIDER",
            date: "01/01/2023"
        },
        {
            id: 2,
            url: "./image/album-3.jpg",
            title: "DESIGN SLIDER",
            date: "01/01/2023"
        },
        {
            id: 3,
            url: "./image/album-4.jpg",
            title: "DESIGN SLIDER",
            date: "01/01/2023"
        },
    ],
    currentItem: 0,
    handleEvent: {
        clickThumbnail: () => {
            let listItemThumb = document.querySelectorAll(".thumbnail .item")

            if(listItemThumb) {
                listItemThumb.forEach(item => {
                    item.addEventListener("click", (e) => {
                        const newIndex = e.currentTarget.getAttribute("data-index")
                        app.currentItem = newIndex
                        app.render()
                    })
                })

            }
        }
    },
    render: () => {
        let slider = document.querySelector(".slider");
        console.log(slider)
        if(slider) {
            slider.innerHTML = `
            <div class="item" id="item 1">
                <img src="${app.listAlbum[app.currentItem].url}">
                <div class="content">
                    <div class="title">${app.listAlbum[app.currentItem].title}</div>
                    <div class="year">${app.listAlbum[app.currentItem].date}</div>
                    <a href="#" class="button">
                        <button>BUY</button>
                    </a>
                </div>
            </div>

            `
        }


        // itemClass.forEach(function(item) {
        //     item.style.display="none";
        // });    
        // let itemID= 'item '+ index;
        // let item = document.getElementById(itemID);
    
        // item.style.display="block";
        // console.log(itemID);
        // console.log(item);
        // console.log(itemClass);
          
        
    },
    start: () => {
        app.render()
        app.handleEvent.clickThumbnail()
    }
}


app.start()
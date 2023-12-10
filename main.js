function showItem(index) {
    let itemClass=document.getElementsByClassName(".list .item");
    itemClass.forEach(function(item) {
        item.style.display="none";
    });    
    let itemID= 'item '+ index;
    let item = document.getElementById(itemID);

    item.style.display="block";
    console.log(itemID);
    console.log(item);
    console.log(itemClass);
  }
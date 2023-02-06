const search =() =>{
    const searchBox =document.getElementById('search-item').value.toUpperCase();
    const storeitem=document.getElementById('product-list');
    const product =document.querySelectorAll('.product');
    const pname=storeitem.getElementsByTagName("h4");
    console.log(product);
    console.log(pname);
    for(let i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName('h4')[0];
        console.log(match);
        if(match){
            let textvalue =match.textContent || match.innerHTML
            console.log(textvalue.toUpperCase().indexOf(searchBox))
            if(textvalue.toUpperCase().indexOf(searchBox) >-1){
                product[i].style.display=""
            }
            else{
                product[i].style.display="none"
            }
        }

    }

}
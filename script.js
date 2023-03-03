
let library = [];
let data = [];

function Book(author,title,page_count,is_read){

    this.author = author;
    this.title = title;
    this.page_count = page_count;
    this.is_read = is_read
}


function add_Book(){


}


Book.prototype.info = function (){
     return [this.author,this.title,this.page_count,this.is_read]
}


const book = new Book("jkr","hp:tps","400",true)
console.log(book.info());


const add_btn = document.getElementById("add")
add_btn.addEventListener("click",load_form)

const sub_btn = document.getElementById("sub_btn")
sub_btn.addEventListener("click",submit_form)


const form = document.getElementById("new_book_form")
const formbg = document.getElementById("formbg")

function load_form(e){
    console.log("ya")
    form.classList.remove("invisible")
    formbg.classList.remove("invisible")

}

function submit_form(e){
    console.log("yass")

    formbg.classList.add("invisible")
    form.classList.add("invisible")
}





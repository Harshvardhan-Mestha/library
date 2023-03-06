/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
const library = [];
let data = [];

const add_btn = document.getElementById('add');
add_btn.addEventListener('click', load_form);

const sub_btn = document.getElementById('sub_btn');
sub_btn.addEventListener('click', add_Book);

const cancel_btn = document.getElementById('cancel');
cancel_btn.addEventListener('click', cancel_form);

const form = document.getElementById('new_book_form');
const formbg = document.getElementById('formbg');

const inputs = document.querySelectorAll('input');
const chk_bx = document.getElementById('chk');


function load_form(e) {
  form.classList.remove('invisible');
  formbg.classList.remove('invisible');
}

function cancel_form(e) {
  form.classList.add('invisible');
  formbg.classList.add('invisible');
}

function add_Book(e) {
  data = [];
  formbg.classList.add('invisible');
  form.classList.add('invisible');
  inputs.forEach((input) => data.push(input.value));
  data.pop();
  data.push(chk_bx.checked);
  const new_book = new Book(data[0], data[1], data[2], data[3]);

  if(library.length <15){library.push(new_book);}
  else{window.alert("A maximum of 15 books are allowed.")}
  generate_grid();

  

}
function read_toggle(e){

    const id = String(this.parentElement.id);
    const index = id[id.length - 1];
    library[index].is_read = !(library[index].is_read);
    generate_grid();
  
}

function remove_Book(e) {
  const id = String(this.parentElement.id);
  const index = id[id.length - 1];
  const rm_book = document.getElementById(`card${index}`);
  rm_book.innerHTML = '';
  library.splice(index, 1);
  generate_grid();


}

function Book(title, author, page_count, is_read) {
  this.title = title;
  this.author = author;
  this.page_count = page_count;
  this.is_read = is_read;
}

function generate_grid() {
  let r = 0;
  let c = 0;
  const container = document.getElementById('card_container');
  container.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    container.innerHTML += `<div class="card" id="card${i}"></div>`;
    const card = document.getElementById(`card${i}`);
    if (i%5 == 0 && i != 0) { r += 1; c = 0; }
    card.style.cssText = `grid-row-start:${(r * 5) + 1};grid-row-end:${(r * 5) + 1};grid-column-start:${(c * 4) + 1};grid-column-end:${(c * 4) + 1};`;
    c += 1;
    let str = ""
    if(library[i].is_read == true){str = "read"}
    else{str = "not read"}


    card.innerHTML = `<div id="title">"${library[i].title}"</div>
                            <div id="author">${library[i].author}</div>
                            <div id="page_count">${library[i].page_count} pages</div>
                            <div id="is_read">${str}</div>
                            <div id="remove">X</div>`;


    if(library[i].is_read == true){
        document.querySelectorAll("#is_read")[i].classList.add('read')
        document.querySelectorAll("#is_read")[i].classList.remove('not_read')
    }
    else{
        document.querySelectorAll("#is_read")[i].classList.add('not_read')
        document.querySelectorAll("#is_read")[i].classList.remove('read');
    }


     
  }
  const close = document.querySelectorAll('#remove');
  close.forEach((x) => x.addEventListener('click', remove_Book));
  const reads = document.querySelectorAll('#is_read');
  reads.forEach((read) => read.addEventListener('click', read_toggle)); 
  
}



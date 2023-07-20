let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');

let drag = null;


// all inputs go to the first box
btn.onclick = function(){
    // i want to validate if the data is exist or no 
    if(inp.value != ''){
        boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}</p>
        `

        // Clear data when adding element
        inp.value = ''; 
    }
    dragItem();
}


function dragItem(){
    let items = document.querySelectorAll('.item');

    // enter all elements
    items.forEach(item =>{
        
        // drag is the same item
        item.addEventListener('dragstart', function(){
            drag = item;
            item.style.opacity = '0.5'; 
        })
        

        // drag is null
        item.addEventListener('dragend', function(){
            drag = null;
            item.style.opacity = '1'; 
        })

        
        // add this item to any other box
        boxes.forEach(box =>{

            // make dragover to the element 
            box.addEventListener('dragover', function(e){
                e.preventDefault();
                this.style.background = '#090';
                this.style.color = '#fff';
            })

            
            // revers affect from dragover   
            box.addEventListener('dragleave', function(){
                this.style.background = '#fff';
                this.style.color = '#000';
            })

            
            // make the drop
            box.addEventListener('drop', function(){
                box.append(drag); 
                this.style.background = '#fff';
                this.style.color = '#000';
            })
        })
    })
}
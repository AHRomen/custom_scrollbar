let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let scroll_bar = document.querySelector(".scrollbar");
let s_thumb = document.querySelector(".s-thumb");
let p_w = parent.getBoundingClientRect().width;
let c_w = child.getBoundingClientRect().width;
let s_thumb_width =(p_w / c_w) *100;
s_thumb.style.width = s_thumb_width + "%";
let isDragging = false;

function mouse_click(e){
    isDragging = true;
    console.log(isDragging);
}

function draggingElement(e){
        if(isDragging){
            let thumb_pos = (((e.clientX - parent.getBoundingClientRect().left) / p_w) * 100);
            
            total_distance = thumb_pos + s_thumb_width;
            
            if(total_distance <= 100){               
                s_thumb.style.left = thumb_pos + "%";
                child.style.left = '-' + ((c_w - p_w) - ((c_w / 100) * (100 - total_distance))) + "px";
            }
            console.log(isDragging+"inside");
        }
}
function mouse_up(e){
    isDragging = false;
    console.log(isDragging);
}


scroll_bar.addEventListener("mousedown", mouse_click);
scroll_bar.addEventListener("mousemove", draggingElement);
scroll_bar.addEventListener("mouseup", mouse_up);
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let scroll_bar = document.querySelector(".scrollbar");
let s_thumb = document.querySelector(".s-thumb");
let p_w = parent.getBoundingClientRect().width;
let c_w = child.getBoundingClientRect().width;
// let s_thumb_width =(p_w / (c_w - p_w)) *100;
let s_thumb_width =(p_w / c_w) *100;
s_thumb.style.width = s_thumb_width + "%";
let isDragging = true;
function draggingElement(e){
    let isDragging = true;
    scroll_bar.addEventListener('mousemove', (e)=>{
        if(isDragging){
            let thumb_pos = (((e.clientX - parent.getBoundingClientRect().left) / p_w) * 100);
            
            total_distance = thumb_pos + s_thumb_width;

            
            
            if(total_distance <= 100){               
                s_thumb.style.left = thumb_pos + "%";
                // child.style.left = '-' + (total_distance + s_thumb_width) + "%";
                child.style.left = '-' + ((c_w - p_w) - ((c_w / 100) * (100 - total_distance))) + "px";
            }
        }
    });
    s_thumb.addEventListener("mouseup", (e)=>{
        isDragging = false;
    })
}
s_thumb.addEventListener("mousedown", draggingElement);
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");
// let scroll_bar = document.querySelector(".scrollbar");
// let s_thumb = document.querySelector(".s-thumb");
// let p_w = parent.getBoundingClientRect().width;
// let c_w = child.getBoundingClientRect().width;
// let s_thumb_width =(p_w / (c_w - p_w)) *100;
// s_thumb.style.width = s_thumb_width + "%";
// let isDragging = true;
// let startX;
// function draggingElement(e){
//     let isDragging = true;
//     s_thumb.addEventListener('mousemove', (e)=>{
//         startX =100 - s_thumb_width;
//         if(isDragging){
               
//         }
//     });
//     s_thumb.addEventListener("mouseup", (e)=>{
//         isDragging = false;
//     })
// }
// s_thumb.addEventListener("mousedown", draggingElement);

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let scroll_bar = document.querySelector(".scrollbar");
let s_thumb = document.querySelector(".s-thumb");

let p_w = parent.getBoundingClientRect().width;
let c_w = child.getBoundingClientRect().width;
let s_thumb_width = (p_w / (c_w - p_w)) * 100;

s_thumb.style.width = s_thumb_width + "%";

let isDragging = false;
let startX;

function draggingElement(e) {
    isDragging = true;
    startX = e.clientX; // Store initial mouse position

    // Update position while dragging
    const onMouseMove = (e) => {
        if (isDragging) {
            // Calculate new thumb position
            let newLeft = e.clientX - startX + s_thumb.offsetLeft;
            const maxLeft = p_w - (s_thumb_width / 100 * p_w); // Max position of the thumb

            // Constrain thumb position
            if (newLeft < 0) newLeft = 0;
            if (newLeft > maxLeft) newLeft = maxLeft;

            s_thumb.style.left = newLeft + "px"; // Update thumb position
            
            // Update scroll position
            const scrollPercentage = newLeft / maxLeft;
            parent.scrollLeft = scrollPercentage * (c_w - p_w);
        }
    };

    // Stop dragging
    const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}

s_thumb.addEventListener("mousedown", draggingElement);

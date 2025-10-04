//Writing function to clear all children nodes
const removeAllChildren=(node)=>{
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

//Loop 16 times to create 16 rows for the grid layout, 
//on each iteration create a div and append to container
//Target container element outside div
const container=document.querySelector(".container");

//set container display to flex, and flexDirection column
container.style.display="flex";
container.style.flexDirection="column";
for(let i=0;i<16;i++){
    const row=document.createElement("div");

    //append row to container
    container.appendChild(row);

    //for each row we need to set the display to flex, and flexDirection row
    row.style.display="flex";
    row.style.flexDirection="row";

    //on each row we now need to loop 16 times, creating a box and appending to row
    for(let j=0;j<16;j++){
        const box=document.createElement("div");
    
        //set box dimensions, add border and background color
        box.style.minWidth="50px";
        box.style.minHeight="50px";
        box.style.backgroundColor="red";
        box.style.border="2px solid black";

        row.appendChild(box);

        //Create an onMouseover event for each box
        box.addEventListener("mouseover",()=>{
            box.style.transitionDuration="1s";
            if(box.style.backgroundColor=="red"){
                box.style.backgroundColor="green";
            }
            else{
                box.style.backgroundColor="red";
            }
        })
    }
    
}

//target button element and addeventListener
const button=document.querySelector(".button");
button.addEventListener("click",()=>{
    //generate prompt and set textcontent
    let size=prompt("Enter the size of your grid");

    //Put some validation in to ensure size>1 and <=100
    while (size<1 || size>100){
        size=prompt("Sorry, please enter a valid size of your grid, between 1-100");
    }

    //Run same code as before but replacing 16 with size
    //before adding divs, clear all child nodes from container
    const container=document.querySelector(".container");
    removeAllChildren(container);

    //set container display to flex, and flexDirection column
    container.style.display="flex";
    container.style.flexDirection="column";
    container.style.height="960px";
    for(let i=0;i<size;i++){
        const row=document.createElement("div");

        //append row to container
        container.appendChild(row);

        //for each row we need to set the display to flex, and flexDirection row
        row.style.display="flex";
        row.style.flexDirection="row";
        row.style.flex="1";

        //on each row we now need to loop 16 times, creating a box and appending to row
        for(let j=0;j<size;j++){
            const box=document.createElement("div");
        
            //set box dimensions, add border and background color
            // box.style.minWidth="50px";
            // box.style.minHeight="50px";
            box.style.flex="1";
            box.style.backgroundColor="red";
            box.style.border="2px solid black";

            row.appendChild(box);

            //set up random value for hsl color, and intiialise brightness at 0
            const color=Math.floor(Math.random()*360);
            let brightness=100;

            //Create an onMouseover event for each box
            box.addEventListener("mouseover",()=>{
                box.style.transitionDuration="1s";

                //increment brightness value by 10
                brightness-=10;

                //Set the colour and adjust brightness on mouseover
                box.style.backgroundColor=`hsl(${color},100%,${brightness}%)`;
            })
        }
        
    }

})


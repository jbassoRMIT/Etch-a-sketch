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
        box.style.width="50px";
        box.style.height="50px";
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


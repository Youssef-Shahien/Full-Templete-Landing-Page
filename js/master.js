//Check If there's Local Storage Color Oprion
let mainColor = localStorage.getItem("color_option")

if(mainColor !== null){
    // console.log("Not Empty")
    // console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color_option"));

    //Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active")
    //Add Active Class With Data-color === Local Storge Item
    if (element.dataset.color === mainColor){
        //Add Active Class Color 
        element.classList.add("active")
    }
    });
    
}

//Random Background Option
let backgroundOption = true;

//Variable To Control The Interval
let backgroundInterval;

//Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background-option")

//Check If Random Background is Empty
if(backgroundLocalItem !== null){

    if(backgroundLocalItem === 'true'){

        backgroundOption = true;

    }
    else{
        backgroundOption = false;
    }
    //Remove Class Active From All Buttons
    document.querySelectorAll(".random-background button").forEach(element =>{
        element.classList.remove("active")
    })
    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-background .yes").classList.add("active")
    }else{
        document.querySelector(".random-background .no").classList.add("active")

    }
}

// Toggle Spin Clas On Icon
document.querySelector(".toggle-setting .fa-gear").onclick=function(){

//Toggle Fa-Spin For Rotaion on Self
this.classList.toggle("fa-spin");

//Toggle Class Open On Main Setting Box
document.querySelector(".setting-box").classList.toggle("open");
}
// Switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
//Loop On All List Items
colorsLi.forEach(li => {

// Click on every List Item
li.addEventListener("click" , (e)=> {

//Set Color On Root
document.documentElement.style.setProperty('--main-color' , e.target.dataset.color)

//Set Color On Local Storage
localStorage.setItem("color_option" ,e.target.dataset.color )

//Remove Active Class From All Childrens
e.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active")
});
// Add Active Class On Target 
e.target.classList.add("active")
})
})


// Switch Random Backgrounds Option 
const randomBackground = document.querySelectorAll(".random-background button");
//Loop On All Buttons
randomBackground.forEach(button => {

// Click on every Button Item
button.addEventListener("click" , (e)=> {

//Remove Active Class From All Buttons
e.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active")

});
// Add Active Class On Target 
e.target.classList.add("active")


if(e.target.dataset.background==="yes"){
    backgroundOption = true;
    randomizeImgs();
    localStorage.setItem("background-option" , true )
}
else{
    backgroundOption = false;
    clearInterval(backgroundInterval);
    
    localStorage.setItem("background-option" , false )
}

})

})





// Select Landing Page Element
let landingPage = document.querySelector(".landing-page")

// Get Array Of Imgs
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

//Function To Randomize Imgs
function randomizeImgs(){
    if(backgroundOption === true){
        backgroundInterval = setInterval(() => {
            //Get Random Number 
            let randomNumber = Math.floor(Math.random() * imgsArray.length)
        
            // Change Background URL()
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        
        },1000);        
    }
}
randomizeImgs();

/// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    console.log(skillsOffsetTop)

    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

    });

}

};

//Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

    img.addEventListener('click' , (e)=>{

        //Create Overlay Element
        let overLay = document.createElement("div");

        //Add Class to overLay
        overLay.className = "popup-overlay";

        //Append Overlay to The Body
        document.body.appendChild(overLay);

        //Create The popup
        let popupBox = document.createElement("div")

        //Add Class To the popupBox
        popupBox.className = "popup-Box";

if(img.alt !== null){

    //Create Heading
    let imgHeading = document.createElement("h3")

    //Create Text For Heading
    let imgText = document.createTextNode(img.alt)

    //Append imgText to imgHeading
    imgHeading.appendChild(imgText)

    //Append imgHeading to popup-Box
    popupBox.appendChild(imgHeading)

}

        //Create Image
        let popupImage = document.createElement("img")

        //Set Image Source
        popupImage.src = img.src;

        //Add Image in popupBox
        popupBox.appendChild(popupImage)
        
        //append popup box in body
        document.body.appendChild(popupBox)

        //Create Close-Span
        let closeButton = document.createElement("span")

        //Create The Close Button Text
        let closeButtonText = document.createTextNode("X")

        // Append closeButton to closeSpan
        closeButton.appendChild(closeButtonText)

        //add Class To CloseButton
        closeButton.className = "close-button"

        //append closebutton to the popup box
        popupBox.appendChild(closeButton)

    })

})

//Close popup
document.addEventListener("click" ,function (e){
    if (e.target.className == 'close-button'){

        //Remove The Current Popup
        e.target.parentNode.remove();

        //Remove The OverLay
        document.querySelector(".popup-overlay").remove();

    }

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let myApear = document.querySelector(".timeline .timeline-content .year")
// console.log(myApear)

// myApear.addEventListener("mouseover", (event) => {
//     let myMonthLeft = document.querySelector(".timeline .timeline-content .left .content .month")
//     myMonthLeft.style = "display: block;"
//     let myMonthRight = document.querySelector(".timeline .timeline-content .right .content .month")
//     myMonthRight.style = "display: block;"
    
// // reset the Display after a short delay
// onmouseout = (event) => {
//     myMonthLeft.style = "display: none;"
//     myMonthRight.style = "display: none;"
// };
// }, false);


// document.querySelectorAll(".timeline .timeline-content .year").forEach(element => {
//         element.addEventListener("mouseover", (event) => {
//         let myMonthLeft = document.querySelector(".timeline .timeline-content .left .content .month")
//         myMonthLeft.style = "display: block;"
//         let myMonthRight = document.querySelector(".timeline .timeline-content .right .content .month")
//         myMonthRight.style = "display: block;"
        
//     // reset the Display after a short delay
//     onmouseout = (event) => {
//         myMonthLeft.style = "display: none;"
//         myMonthRight.style = "display: none;"
//     };
//     });
// })


// document.querySelectorAll(".timeline .timeline-content .year").forEach(element => {
//         element.addEventListener("mouseover", (event) => {
//             document.querySelectorAll(".timeline .timeline-content .left .content .month").forEach(element =>{
//                 element.style = "display: block;"
//             })
//             document.querySelectorAll(".timeline .timeline-content .right .content .month").forEach(element =>{
//                 element.style = "display: block;"
//             })
        
//     // reset the Display after a short delay
//     onmouseout = (event) => {
//         event.style = "display: none;"
//         event.style = "display: none;"
//     };
//     });
// })



// colorsLi.forEach(li => {

//     // Click on every List Item
//     li.addEventListener("click" , (e)=> {

//     //Set Color On Root
//     document.documentElement.style.setProperty('--main-color' , e.target.dataset.color)

//     //Remove Active Class From All Childrens
//     e.target.parentElement.querySelectorAll(".active").forEach(element => {
//         element.classList.remove("active")
//     });
//     // Add Active Class On Target 
//     e.target.classList.add("active")
//     })
//     })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let containerDomObj = document.getElementById("target");

class Wallpaper{
    constructor(text, color, wallpaperUrl,positionY,positionX){
        this.text = text;
        this.color = color;
        this.wallpaperUrl = wallpaperUrl;
        this.positionY = positionY;
        this.positionX = positionX;
    }
}

function createSpeechWallpaper(wallpaper,containerDomObj){
    let bgImgDiv = document.createElement("div");
    bgImgDiv.classList.add("col","p-3","my-3","d-flex","align-items-center","justify-content-center");

    let bgSubImgDiv = document.createElement("div");
    bgSubImgDiv.classList.add("container","d-flex","col-lg-8", "align-items-" + wallpaper.positionY,"justify-content-" + wallpaper.positionX);

    bgSubImgDiv.style.backgroundImage = "url(" + wallpaper.wallpaperUrl + ")";
    bgSubImgDiv.style.backgroundSize = "cover";
    bgSubImgDiv.style.backgroundRepeat = "no-repeat";
    
    let textP = document.createElement("p");
    textP.classList.add("pt-3", "pb-5", "col-6");
    textP.style.fontWeight = "bold";
    textP.style.fontSize = "1.2rem";
    textP.style.color = "#" + wallpaper.color;
    textP.innerHTML = wallpaper.text;

    bgSubImgDiv.append(textP);
    bgImgDiv.append(bgSubImgDiv);

    containerDomObj.append(bgImgDiv);

}

let wallpaper1 = new Wallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "center", "center");

let wallpaper2 = new Wallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "00aaff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left");

let wallpaper3 = new Wallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

createSpeechWallpaper(wallpaper1,containerDomObj);
createSpeechWallpaper(wallpaper2,containerDomObj);
createSpeechWallpaper(wallpaper3,containerDomObj);
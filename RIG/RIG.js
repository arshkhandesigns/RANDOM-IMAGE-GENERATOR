function generateImage() {
    var container = document.getElementById("image-container");
    var shapes = ["circle", "square", "rectangle", "triangle"];
    var images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
    var sizes = [50, 75, 100, 125, 150];
    
    // randomly select shape, image, and size
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    var image = images[Math.floor(Math.random() * images.length)];
    var size = sizes[Math.floor(Math.random() * sizes.length)];
    
    // create shape element and apply styles
    var shapeElement = document.createElement("div");
    shapeElement.style.width = size + "px";
    shapeElement.style.height = size + "px";
    shapeElement.style.borderRadius = shape === "circle" ? "50%" : "0%";
    shapeElement.style.backgroundImage = "url('" + image + "')";
    shapeElement.style.backgroundSize = "cover";
    
    // add shape element to container
    container.appendChild(shapeElement);
  }
  
function badapple() {
    // html stuff
    width = 56
    height = 42
    fps = 10;
    video = document.getElementById('video')
    canvas = document.getElementById('video2')
    context = canvas.getContext('2d');
    video.play()
    /*
    gif = document.createElement('img')
    gif.src = "video.gif"
    document.body.appendChild(document.createElement('br'))
    document.body.appendChild(document.createElement('br'))
    document.body.appendChild(gif)
    */
    document.getElementById('start').style.display = "none"
    canvas.style.display = "block"
    video.style.display = "block"

    // video
    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
    canvas.width = width
    canvas.height = height
    function draw() {
        if (!(video.ended || video.paused)) {
            //console.clear()
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            for (let y = 0; y < height; y++) {
                let line = ""
                for (let x = 0; x < width; x++) {
                    pixel = context.getImageData(x, y, 1, 1).data;
                    hex = "#" + ("000000" + rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
                    if (hex.startsWith("#f")){
                        line += " "
                    }else{
                        line += "#"
                    }
                }
                console.log(line)
            }
            
        }
    }
    setInterval(draw, 1000 / fps)
}

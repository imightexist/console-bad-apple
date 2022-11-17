function badapple() {
    // html stuff
    width = 86
    height = 63
    fps = 30;
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
        if (!video.ended) {
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            for (let y = 0; y < canvas.height; y++) {
                let line = ""
                for (let x = 0; x < canvas.width; x++) {
                    pixel = context.getImageData(x, y, 1, 1).data;
                    hex = "#" + ("000000" + rgbToHex(pixel[0], pixel[1], pixel[2])).slice(-6);
                    if (hex == "#FFFFFF"){
                        line += "#"
                    }else{
                        line += " "
                    }
                }
                console.log(line)
            }
        }
    }
    setInterval(draw, 1000 / fps)
}
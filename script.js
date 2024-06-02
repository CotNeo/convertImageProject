// script.js

function convertImage() {
    const upload = document.getElementById('upload').files[0];
    const format = document.getElementById('format').value;
    
    if (!upload) {
        alert("Please upload an image first.");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(upload);
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            let convertedUrl;
            switch (format) {
                case 'jpeg':
                    convertedUrl = canvas.toDataURL('image/jpeg');
                    break;
                case 'png':
                    convertedUrl = canvas.toDataURL('image/png');
                    break;
                case 'webp':
                    convertedUrl = canvas.toDataURL('image/webp');
                    break;
                case 'bmp':
                    convertedUrl = canvas.toDataURL('image/bmp');
                    break;
                case 'gif':
                    convertedUrl = canvas.toDataURL('image/gif');
                    break;
                default:
                    alert("Unsupported format!");
                    return;
            }

            const output = document.getElementById('output');
            const downloadLink = document.getElementById('download');
            output.src = convertedUrl;
            downloadLink.href = convertedUrl;
            downloadLink.download = `converted-image.${format}`;
        }
    }
}

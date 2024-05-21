window.onload = function() {
    const input = document.getElementById('file-upload');
    const img = document.getElementById('uploadedImage');
    const filenameDisplay = document.getElementById('filename-display');

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            img.src = e.target.result;
            filenameDisplay.textContent = `Uploaded file: ${file.name}`; // Display file name
        };

        reader.readAsDataURL(file);
    });
};

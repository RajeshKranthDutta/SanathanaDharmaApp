document.addEventListener("DOMContentLoaded", function() {
    // Image URLs
    const imageUrls = {
        krishna: "https://cdn.pixabay.com/photo/2023/06/23/08/51/lord-krishna-8083043_1280.png",
        shiva: "https://cdn.pixabay.com/photo/2024/07/11/15/48/ai-generated-8888606_960_720.jpg",
        hanuman: "https://cdn.pixabay.com/photo/2024/05/16/12/35/hanuman-8765873_1280.jpg",
        ganesha: "https://cdn.pixabay.com/photo/2024/01/11/15/30/ai-generated-8502025_1280.png",
        durga: "https://cdn.pixabay.com/photo/2024/03/30/07/54/ai-generated-8664249_1280.jpg"
    };

    // Set the images dynamically
    document.getElementById("krishna").src = imageUrls.krishna;
    document.getElementById("shiva").src = imageUrls.shiva;
    document.getElementById("hanuman").src = imageUrls.hanuman;
    document.getElementById("ganesha").src = imageUrls.ganesha;
    document.getElementById("durga").src = imageUrls.durga;
});
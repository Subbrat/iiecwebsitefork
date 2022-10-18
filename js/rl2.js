{
    const d1 = [
        "The Foundation Builders",
        "Still They Are!",
        "With us and we.",
    ];
    ! function Newline() {
        const randomLine = Math.floor(Math.random() * d1.length);
        document.getElementById('rll3').innerHTML = d1[randomLine];
    }();
}
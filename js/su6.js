// javascript inherited from opensource, free for community use by https://github.com/subbrat
{

    document.addEventListener("DOMContentLoaded", function () {
        var t = document.querySelector(".s6slide");

        function e(n) {
            var o = window.pageYOffset,
                a = Math.floor(Date.now());
            ! function t() {
                Math.easeInOutQuad = function (t) {
                    return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
                };
                var e = Math.min(1, (Math.floor(Date.now()) - a) / n);
                window.scroll(0, Math.ceil(Math.easeInOutQuad(e) * (0 - o) + o)), 0 === window.pageYOffset && callback(), requestAnimationFrame(t)
            }()
        }
        t.addEventListener("click", function () {
            window.requestAnimationFrame ? e(700) : window.scrollTo(0, 0)
        }), window.addEventListener("scroll", function () {
            280 < document.body.scrollTop || 280 < document.documentElement.scrollTop ? (t.removeAttribute("style", "transform: translateX(120px);"), t.setAttribute("style", "transform: translateX(0);")) : (t.removeAttribute("style", "transform: translateX(0);"), t.setAttribute("style", "transform: translateX(120px);"))
        })
    });
}

{

    document.oncontextmenu = new Function("return false");
}

{
    const countE0 = document.getElementById('ct');
    updateVisitCount();
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/experimente/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}

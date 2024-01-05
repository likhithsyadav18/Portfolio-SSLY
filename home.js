function pr() {
    var t, e, n, o, i, d, c, w, r, a, l, h = document.getElementById("ppc"),
        s = document.getElementById("pp");

    function g(t, e, n, o) {
        var i = t / 2;
        return {
            wPct: e = 1 + ((e = 1 + (e - 1) * (1 - t)) - 1) * (1 - i),
            topPct: n -= i,
            leftPct: o *= 1 - (t + i)
        };
    }

    h && s && (t = (e = h.getBoundingClientRect()).width, e = e.height, c = (h = JSON.parse(h.dataset.dim)).a, w = h.b, i = h.c, n = h.d, r = c / (d = c * h.e),
        o = (n = c * n) / d, o = (n - ((n = t / e) - 1) * d / 2) / (d = d * n), i = i = w * i / (w * h.f), c = (h = t * (r = c / d)) / (d = c / w),
        w = e * Math.abs(i), l = t * o, r <= 1 && (a = 1 - r, i *= (r = 1) + a * n, o = 0), (a = h - l) < t && (r += (l = t - a) / h, o -= l / t / 2),
        h = (a = c - e - w) / e, n < 1 && 1 < d && 0 < a && (t * (l = g(h, r, i, o)).wPct / d - e * Math.abs(l.topPct) < e && !(e < t * (l = g(h / 4, r, i, o)).wPct / d - e * Math.abs(l.topPct))) ||
        (r = l.wPct, i = l.topPct, o = l.leftPct)),
        s.style.width = "".concat(100 * r, "%"),
        s.style.left = "-".concat(100 * o, "%"),
        s.style.top = "-".concat(100 * i, "%");
}
  
console.log("window.innerWidth", window.innerWidth);
console.log("window.outerWidth", window.outerWidth);
console.log("window.innerHeight", window.innerHeight);
console.log("window.outerHeight", window.outerHeight);
  
window.addEventListener("DOMContentLoaded", function() {
    pr();
});
  
window.addEventListener("resize", function() {
    pr();
});
  
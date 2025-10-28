// ✅ Card click → Default A2.html open
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (event) {
        if (!event.target.closest("button")) {
            window.location.href = "A2.html";
        }
    });
});
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.stopPropagation();

        let classList = btn.classList;

        // 👉 If primary clicked → ERROR Page
        for (let i = 1; i <= 23; i++) {
            if (classList.contains(`primary${i}`)) {
                window.location.href = "ERROR.html";
                return;
            }
        }

        // 👉 If ghost clicked → Specific Page
        for (let i = 1; i <= 23; i++) {
            if (classList.contains(`ghost${i}`)) {
                if (i === 1) window.location.href = "MOB.html";
                else if (i === 2) window.location.href = "LEP.html";
                else if (i === 3) window.location.href = "BUTY.html";
                else if (i === 4) window.location.href = "WATCH.html";
                else   window.location.href = "ERROR.html";
                return;
            }
        }
    });
});

// ✅ Sign Up button redirection
document.querySelector(".btn.primary").addEventListener("click", function () {
    window.location.href = "SIGN.HTML";
});
document.querySelector(".signupz").addEventListener("click", function () {
    window.location.href = "SIGN.HTML";
});


document.querySelector('.btn').addEventListener('click', function () {
    window.location.href = "PAY.HTML";
});

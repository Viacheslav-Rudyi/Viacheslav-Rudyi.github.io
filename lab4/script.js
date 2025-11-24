let game = {
    score: 0,
    scoreLabel: document.getElementById("score"),

    difficulty: null,
    timer: 0,
    timeLabel: document.getElementById("time"),
    color: "1",
    radius: 0.25,

    startButton: document.getElementById("start"),
    menu: document.getElementById("menu"),
    difficultySelector: document.getElementById("diff-select"),
    colorSelector: document.getElementById("color-select"),

    loop: document.getElementById("gameloop"),
    target: document.getElementById("target"),

    state: 0
}

game.loop.style.display = "none";
game.startButton.addEventListener("click", onStartClicked);

function onStartClicked() {
    let diff = game.difficultySelector.value;
    let col = game.colorSelector.value;

    if (diff == 0 || col == 0) return;
    
    game.menu.style.display = "none";
    game.loop.style.display = "inherit";
    
    game.score = 0;

    game.target.style.background = col;
    if (diff == 1) {
        game.radius = 0.15;
        game.timer = 3;
        game.target.style.transform = "scale(1)";
    }
    else if (diff == 2) {
        game.radius = 0.25;
        game.timer = 2;
        game.target.style.transform = "scale(0.8)";
    }
    else if (diff == 3) {
        game.radius = 0.35;
        game.timer = 1;
        game.target.style.transform = "scale(0.6)";
    }

    game.target.addEventListener("click", onTargetClicked);

    game.state = 1;
}

function cmpScore(current) {
    setTimeout(() => {
        if (current == game.score) {
            game.state = 0;
            game.target.removeEventListener("click", onTargetClicked);
            if (confirm("You LOSE! Reload page or press 'OK' to play again")) window.location.reload();
            // else window.location.reload();

        }
    }, game.timer * 1000);
}

function updateTimer(time, current) {
    if (game.state === 0 || current !== game.score) {
        game.timeLabel.textContent = "Time left: 0";
        return;
    }
    game.timeLabel.textContent = "Time left: " + String(parseInt(time));
    setTimeout(() => {
        updateTimer(time - 0.01, current);
    }, 10);
}

function onTargetClicked() {
    let pixelradius = Math.min(window.innerHeight, window.innerWidth) * game.radius;

    let r = pixelradius * Math.sqrt(Math.random());
    let theta = Math.random() * 2 * Math.PI;

    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    game.target.style.left = centerX + x + "px";
    game.target.style.top = centerY + y + "px";

    game.score += 1;
    game.scoreLabel.textContent = "Score: " + String(game.score);

    cmpScore(game.score);
    updateTimer(game.timer, game.score);
}
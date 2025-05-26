// 하나의 게임에 대한 정보(클래스)
class GameInfo {
    constructor(name, url) {
        this.name = name
        this.url = url
    }

    playGame() {
        window.open(this.url);
    }
}

// game-list에 표시될 게임 목록과 url들
gameInfoList = [
    new GameInfo("사과 게임", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("테트리스", "https://play.tetris.com/"),
    new GameInfo("체스", "https://www.chess.com/play/computer"),
    new GameInfo("지뢰찾기", "https://urluur.github.io/minesweeper-js/"),
    new GameInfo("공룡 게임", "https://chrome-dino.co/ko"),
    new GameInfo("뱀 게임", "./games/snake-game/index.html"),
    new GameInfo("팩맨", "https://freepacman.org/"),
    new GameInfo("틱택토", "https://marcft.github.io/tic-tac-toe/"),
    new GameInfo("벽돌 깨기", "https://pyjun01.github.io/swipe-brick-breaker/"),
    new GameInfo("워들", "https://play.woodle.today/"),
    new GameInfo("미로 탈출", "https://rawgit.com/drewsberry/maze.js/master/index.html")
];

// 화면이 처음 로드될 때 실행되는 함수
function setup() {
    for (let i = 0; i < gameInfoList.length; i++) {
        // 하나의 게임에 대한 name과 url을 이용해 버튼 생성
        let button = document.createElement("button");
        button.className="text game-site";
        button.innerText = gameInfoList[i].name;
        button.addEventListener("click", () => gameInfoList[i].playGame());

        // 생성된 button을 game-list의 자식 요소로 추가
        let gameList = document.getElementById("game-list");
        gameList.appendChild(button);
    }
}

setup();
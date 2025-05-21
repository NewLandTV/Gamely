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
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/"),
    new GameInfo("Fruit Box", "https://en.gamesaien.com/game/fruit_box/")
];

// 화면이 처음 로드될 때 실행되는 함수
function setup() {
    for (let i = 0; i < gameInfoList.length; i++) {
        // 하나의 게임에 대한 name과 url을 이용해 버튼 생성
        let button = document.createElement("button");
        button.className="game-site";
        button.innerText = gameInfoList[i].name;
        button.addEventListener("click", () => gameInfoList[i].playGame());

        // 생성된 button을 game-list의 자식 요소로 추가
        let gameList = document.getElementById("game-list");
        gameList.appendChild(button);
    }
}

setup();
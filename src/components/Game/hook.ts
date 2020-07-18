import { useState } from "react"
import { cloneDeep } from "../../utils";

export interface GameConfig {
    size: number;
    players: GamePlayer[];
}

export interface GameHistory {
    player: GamePlayer;
    squares: GameSquare[];
}

export interface GamePlayer {
    name: string;
    symbol: string;
}

export type GameSquare = null | string;

export default function useGame(firstPlayer: number) {

    const [config] = useState({
        size: 9,
        players: [
            {
                name: "Player 1",
                symbol: "O",
            },
            {
                name: "Player 2",
                symbol: "X",
            },
        ],
    } as GameConfig);

    const { players, size } = config;
    const [winner, setWinner] = useState(null as null | GamePlayer);
    const [player, setPlayer] = useState(players[firstPlayer]);
    const [histories, setHistories] = useState([] as GameHistory[]);
    const [squares, setSquares] = useState(
        Array.from({ length: size }).fill(null) as GameSquare[]
    );

    function onClickHandler(squareIndex: number) {
        const currentSquares = cloneDeep(squares);
        const isFilled = currentSquares[squareIndex] !== null;
        if (isFilled) return;
        currentSquares[squareIndex] = player.symbol;
        setSquares(currentSquares);
        const winner = checkWinner(currentSquares, config);

        if (winner !== null) {
            setWinner(player);
        }

        const nextPlayer = getNextPlayer(player, players);

        setPlayer(nextPlayer);
        pushHistory(nextPlayer, currentSquares);
    }

    function getNextPlayer(current: GamePlayer, players: GamePlayer[]) {
        const playerIndex = players.findIndex((p) => p.name === current.name);
        const nextPlayerIndex = playerIndex === 0 ? 1 : 0;
        return players[nextPlayerIndex];
    }

    function backToStep(historyIndex: number) {
        const history = histories[historyIndex];
        setPlayer(history.player);
        setSquares(history.squares);
    }

    function pushHistory(player: GamePlayer, squares: GameSquare[]) {
        histories.push({ player, squares: squares });
        setHistories(histories);
    }

    function checkWinner(
        squares: GameSquare[],
        config: GameConfig
    ): number | null {
        const players = Object.values(config.players);

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < players.length; i++) {
            const s = players[i].symbol;
            for (let line of lines) {
                const isWin =
                    squares[line[0]] === s &&
                    squares[line[1]] === s &&
                    squares[line[2]] === s;
                if (isWin) {
                    return i;
                }
            }
        }

        return null;
    }

    return {
        config,
        winner,
        player,
        squares,
        histories,
        backToStep,
        onClickHandler
    }
}
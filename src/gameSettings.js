import { OPTIONS, PARTY } from "./constants";

const gameSettings = {
    player: '',
    ai: '',
    board: {},
    turn: PARTY.player
}

export const setOption = (option) => {
    gameSettings.player = option === OPTIONS.x ? OPTIONS.x : OPTIONS.o
    gameSettings.ai = gameSettings.player === OPTIONS.x ? OPTIONS.o : OPTIONS.x
}
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

export const setCellValue = (cellName) => {
   if (!gameSettings.baord[cellName]){
       gameSettings.board[cellName] = gameSettings[gameSettings.turn] // gameSetting[player or ai]
   }
}

export const getCellValue = (cellName) => {
    return gameSettings.board[cellName] ? gameSettings.board[cellName] : ' '
}


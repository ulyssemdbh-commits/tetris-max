export type Tetromino = {
    shape: string[][];
    color: string;
};

export type GameState = {
    board: (string | null)[][];
    score: number;
    level: number;
    linesCleared: number;
    currentPiece: Tetromino;
};
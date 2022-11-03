// Game over component
import { useCallback, useState } from "react";

export const useGameOver = () => {

    // Set to true so game doesn't start immediately
    const [gameOver, setGameOver] = useState(true);

    const resetGameOver = useCallback(() => {

        setGameOver(false);
    }, []);

    return [gameOver, setGameOver, resetGameOver];
};
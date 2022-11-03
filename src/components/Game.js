// Component for the Game logic
import Menu from "./Menu";
import {useGameOver} from '../hooks/useGameOver';

const Game = ({rows, columns}) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    // Start function
    const start = () => {

        resetGameOver();
    };

    return (

        // Launches the game when the button is pressed
        <div className = "Game">
            {gameOver ? (
                <Menu onClick = {start} />
            ) : (
                <p>Tetris</p>
            )}
        </div>
    );
};

export default Game;
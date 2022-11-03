// Menu component for the game
import './Menu.css';

const Menu = ({onClick}) => (

    <div className = "Menu">
        
        <button className = "Button" onClick = {onClick}>
            Start Tetris
        </button>
    </div>
);

export default Menu;
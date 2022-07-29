import './Blocks.css';

function Blocks() {
    return (
        <div className='blocks-dashboard-background'>
            <div className='dashboard-main-title'>
                <h1>Explore Scratch blocks</h1>
                <p>Learn the basic function of some basic scratch blocks such as "say", "wait", "go to" and more</p>
            </div>
            
            <div className='grid-container'>
                <div className='column-1'>
                    <h2>Look Blocks</h2>
                    <img src='./images/Look Blocks.png' alt='Look Blocks pic'></img>
                </div>
                <div className='column-2'>
                    <h2>Control Blocks</h2>
                    <img src='./images/Control Blocks.png' alt='Control Blocks pic'></img>
                </div>
                <div className='column-3'>
                    <h2>Motion Blocks</h2>
                    <img src='./images/Motion Blocks.png' alt='Motion Blocks pic'></img>
                </div>
            </div>
        </div>
    )
}
export default Blocks;
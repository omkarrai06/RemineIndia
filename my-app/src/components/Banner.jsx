import React from 'react'
import './banner.css';

const Banner = () => {

    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://wallpapercave.com/wp/wp2529178.jpg" alt="Los Angeles" width="1100" height="500"/>
                            <div class="carousel-caption">
                                <h3>Remine India</h3>
                                <p>Making Earth Clean & Green</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp2529184.jpg" alt="Chicago" width="1100" height="500"/>
                            <div class="carousel-caption">
                                <h3>Clean Earth</h3>
                                <p>“We do not inherit the Earth from our ancestors; we borrow it from our children.”</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp4624443.jpg" alt="New York" width="1100" height="500"/>
                            <div class="carousel-caption">
                                <h3>Green Earth</h3>
                                <p>“There is no such thing as 'away'. When we throw anything away it must go somewhere.”</p>
                            </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}

export default Banner
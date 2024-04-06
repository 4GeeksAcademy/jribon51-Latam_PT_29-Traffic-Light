import React, { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("");
    return (
        <div className="principal"> 
                <div className="trafficTop bg-dark"></div>
            <div className="container bg-dark rounded-4">

                <div className={`red light ${color == "red" ? "selected" : ""}`} onClick={() => {
                    setColor("red")
                }}></div>
                <div className={`yellow light ${color == "yellow" ? "selected" : ""}`} onClick={() => {
                    setColor("yellow")
                }}></div>
                <div className={`green light ${color == "green" ? "selected" : ""}`} onClick={() => {
                    setColor("green")
                }}></div>
            </div>
        </div>
    )

}

export default TrafficLight;
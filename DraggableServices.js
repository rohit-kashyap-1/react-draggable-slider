import React from 'react'
import Draggable from 'react-draggable'
import '../styles/DraggableServices.css'

export default function DraggableServices() {


    function getItemWidth() {
        let combined_width = 0
        let a = document.querySelectorAll(".draggable-item")
        a.forEach(function (item) {
            combined_width += item.clientWidth
        })
        console.log(combined_width)
        return combined_width
    }
    //getItemWidth();

    return (
        <div className='mx-auto max-w-8xl px-2 py-6 sm:px-6 lg:px-8 '>
            <div className='draggable-service'>
                <div className='draggable-slider-main'>
                    <Draggable
                        axis='x'
                        defaultPosition={{ x: 0, y: 0 }}
                        DraggableData={{
                            // lastX + deltaX === x
                            x: 0, y: 0,
                            deltaX: 0, deltaY: 0,
                            lastX: 0, lastY: 0
                        }}
                        grid={[25, 25]}
                        bounds={{ left: -1065, right:0 }}

                    >
                        <ul>
                            <li className='draggable-item'></li>
                            <li className='draggable-item'></li>
                            <li className='draggable-item'></li>
                            <li className='draggable-item'></li>

                        </ul>
                    </Draggable>
                </div>
            </div>
        </div>

    )
}

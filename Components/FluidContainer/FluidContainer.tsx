import { useEffect } from "react";
import styles from "./Fluid.module.scss";
import { Gradient } from "./FluidLib.js";

interface FluidContainerProps {
    children: React.ReactNode
    background?: string
}

export const FluidContainer = (props: FluidContainerProps) => {

    useEffect(() => {
        if(typeof window) {
            var gradient = new Gradient();
            gradient.initGradient!("#gradient-canvas");
        }
    }, [])
    
    return (
        <div>
            <div className={styles.gradientCanvasContainer}>
                <canvas className={styles.gradientCanvas} id="gradient-canvas" />
            </div>
            {props.children}
        </div>
    )
}
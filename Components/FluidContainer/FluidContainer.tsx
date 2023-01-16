import { useEffect } from "react";
import styles from "./Fluid.module.scss";
import { addFluid } from "./FluidLib.js";

interface FluidContainerProps {
    children?: React.ReactNode
    background?: string
}

export const FluidContainer = (props: FluidContainerProps) => {

    useEffect(() => {
        if(typeof window) {
            addFluid()
        }
    }, [])
    
    return (<>
        <div className={styles.gradientCanvasContainer}>
            <canvas className={styles.gradientCanvas} id="gradient-canvas" />
        </div>
        {props.children}
    </>)
}
import { CircleModel } from "../models/circle.model";
import { getRandom } from "./functions";

export class Circle implements CircleModel {
    public size: number;

    constructor() {
        this.size = getRandom(180, 330);
    }

    public init(): void {
        const layout = document.getElementById('layout') as HTMLDivElement;
        const circle = document.createElement('div');
        const { width, height } = layout.getBoundingClientRect();
        const h: number = getRandom(0, height - this.size);
        const w: number = getRandom(0, width - this.size);
        const leftBtn = document.getElementById('btn-left') as HTMLButtonElement;

        circle.classList.add('layout-circle');
        circle.style.height = `${this.size}px`;
        circle.style.width = `${this.size}px`;
        circle.style.top = `${h}px`;
        circle.style.left = `${w}px`;

        if (leftBtn.disabled === true) {
            circle.classList.add('green-circle');
        } else circle.classList.add('purple-circle');
        layout.append(circle);
    }

    public addCircles(): void {
        for (let i = 1; i <= 3; i++) {
            this.init();
        }
    }

    public changeCircles(): void {
        const circles = Array.from(document.getElementsByClassName('layout-circle')) as HTMLDivElement[]; 
        
        circles.forEach((circle) => {
            circle.style.transition = `2s`;
            circle.style.transform = `translateX(${(-100)}vw)`;
            setTimeout(function () {
                circle.remove();
            }, 2000);
        });
    }
}

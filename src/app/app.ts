import { ApppModel } from '../models/app.model';
import { Laptop } from '../modules/laptop';
import { Description } from '../modules/description';
import { Circle } from '../modules/circle';

export class App implements ApppModel {
    public template: string;
    public body = document.querySelector('body') as HTMLBodyElement;
    public laptop: Laptop;
    public description: Description;
    public circle: Circle;

    constructor() {
        this.laptop = new Laptop();
        this.description = new Description();
        this.circle = new Circle();
    }

    public init(): string {
        this.template = `
        <div class="layout" id="layout">
            <div class="layout-container">
                <h1 class="layout-title">Кейсы</h1>
                ${this.laptop.init()}
                ${this.description.init()}
            </div>
        </div>`;
        return this.template;
    }

    public generateCircles(): void {
        window.addEventListener('load', () => {
            for (let i =1; i <= 3; i++) {
                this.circle.init();
            }
        });
    }

    public async render(): Promise<void> {
        await this.init();
        this.body.insertAdjacentHTML('beforeend', this.template);
        this.body.classList.add('color-green');
        this.description.subscribeOnLeft();
        this.description.subscribeOnRight();
        this.generateCircles();
    }
}
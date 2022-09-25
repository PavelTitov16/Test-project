import { Laptop } from '../modules/laptop';
import { ApppModel } from '../models/app.model';

export class App implements ApppModel {
    public template: string;
    public laptop;
    public body = document.querySelector('body') as HTMLBodyElement;

  constructor() {
    this.laptop = new Laptop();
  }
  
    public init(): string {
      this.template = `
        <div class="layout" id="layout">
            <div class="layout-container">
                <h1 class="layout-title">Кейсы</h1>
                ${this.laptop.init()}
            </div>
        </div>`;
      return this.template;
    }

    public async render(): Promise<void> {
        await this.init();
        this.body.insertAdjacentHTML('beforeend', this.template);
        this.body.classList.add('color-green');
    }
}
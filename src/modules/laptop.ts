import { LaptopModel } from '../models/laptop.model';

export class Laptop implements LaptopModel {
    public template: string;

    public init(): string {
        this.template = `
            <div class="layout-laptop">
                <div id="layout-laptop__overflow">
                    <div class="layout-laptop__screen" id="screen">
                        <div class="layout-laptop__image first-image"></div>
                        <div class="layout-laptop__image second-image"></div>
                    </div>
                </div>
            </div>`;
        return this.template;
    }
}

import { DescriptionModel } from '../models/description.model';
import { Laptop } from '../modules/laptop';
import { Circle } from './circle';

export class Description implements DescriptionModel {
    public template: string;
    public body = document.querySelector('body') as HTMLBodyElement;
    public laptop: Laptop;
    public circle: Circle;

    constructor() {
        this.laptop = new Laptop();
        this.circle = new Circle();
    }

    public init(): string {
        this.template = `
            <div class="layout-description">
                <h2 class="layout-description__title" id="layout-title">
                    Создание корпоративного сайта для холдинга «АМКОДОР»
                </h2>
                <p class="layout-description__text" id="layout-text">
                    Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ.
                </p>
                <div class="layout-description__btns">
                    <button class="layout-btn inactive" id="btn-left" disabled></button>
                    <button class="layout-btn" id="btn-right"></button>
                </div>
                <div class="layout-description__tabs">
                    <div class="layout-tab">
                        <h3 class="layout-tab__title">
                            Направление
                        </h3>
                        <p class="layout-tab__text">
                            WEB-разработка
                        </p>
                    </div>
                    <div class="layout-tab">
                        <h3 class="layout-tab__title">
                            Тип проекта
                        </h3>
                        <p class="layout-tab__text" id="layout-type">
                            Корпоративные сайты
                        </p>
                    </div>
                    <div class="layout-tab">
                        <h3 class="layout-tab__title">
                            Отрасль
                        </h3>
                        <p class="layout-tab__text" id="layout-industry">
                            Производство, Торговля
                        </p>
                    </div>
                </div>
            </div>`;
        return this.template;
    }

    public addProductionText(): void {
        const layoutTitle = document.getElementById('layout-title') as HTMLHeadElement;
        const layoutText = document.getElementById('layout-text') as HTMLParagraphElement;
        const layoutType = document.getElementById('layout-type') as HTMLParagraphElement;
        const layoutIndustry = document.getElementById('layout-industry') as HTMLParagraphElement;

        layoutTitle.textContent = 'Создание корпоративного сайта для холдинга «АМКОДОР»';
        layoutText.textContent = 'Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” для развития дилерской сети на рынках Беларуси и стран СНГ. ';
        layoutType.textContent = 'Корпоративные сайты';
        layoutIndustry.textContent = 'Производство, Торговля';
    }
    
    public addShopText(): void {
        const layoutTitle = document.getElementById('layout-title') as HTMLHeadElement;
        const layoutText = document.getElementById('layout-text') as HTMLParagraphElement;
        const layoutType = document.getElementById('layout-type') as HTMLParagraphElement;
        const layoutIndustry = document.getElementById('layout-industry') as HTMLParagraphElement;

        layoutTitle.textContent = 'Создание маркетплейса для бизнеса по перепродаже одежды';
        layoutText.textContent = 'Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.';
        layoutType.textContent = 'Интернет-магазины ';
        layoutIndustry.textContent = 'Торговля';
    }
    
    public moveTextUp(): void {
        const layoutTitle = document.getElementById('layout-title') as HTMLHeadElement;
        const layoutText = document.getElementById('layout-text') as HTMLParagraphElement;
        const layoutTabsTitles = Array.from(document.getElementsByClassName('layout-tab__title')) as HTMLHeadElement[];
        const layoutTabsText = Array.from(document.getElementsByClassName('layout-tab__text')) as HTMLParagraphElement[]; 

        layoutTitle.classList.add("up");
        layoutText.classList.add("up");
        layoutTabsTitles.forEach((title) => {
            title.classList.add("up");
        });
        layoutTabsText.forEach((tab) => {
            tab.classList.add("up");
        });
    }

    public moveTextDown(): void {
        const layoutTitle = document.getElementById('layout-title') as HTMLHeadElement;
        const layoutText = document.getElementById('layout-text') as HTMLParagraphElement;
        const layoutTabsTitles = Array.from(document.getElementsByClassName('layout-tab__title')) as HTMLHeadElement[];
        const layoutTabsText = Array.from(document.getElementsByClassName('layout-tab__text')) as HTMLParagraphElement[]; 

        layoutTitle.addEventListener("animationend", (event: AnimationEvent): void => {
            layoutTitle.classList.remove("up");
            layoutText.classList.remove("up");
            layoutTabsTitles.forEach((title) => {
                title.classList.remove("up");
            });
            layoutTabsText.forEach((tab) => {
                tab.classList.remove("up");
            });
        });
    }

    public addGreenBg(): void {
        this.body.classList.remove("color-purple");
        this.body.classList.add("color-green");
    }
    
    public addGPurpleBg(): void {
        this.body.classList.remove("color-green");
        this.body.classList.add("color-purple");
    }

    public getNewCircles(): void {
        for (let i =1; i <= 3; i++) {
            this.circle.init();
        }
    }

    public subscribeOnLeft(): void {
        const leftBtn = document.getElementById('btn-left') as HTMLButtonElement;
        const rightBtn = document.getElementById('btn-right') as HTMLButtonElement;

        leftBtn.addEventListener('click', (event: MouseEvent): void => {
            leftBtn.classList.add('inactive');
            leftBtn.disabled = true;
            rightBtn.classList.remove('inactive');
            rightBtn.disabled = false;
            this.moveTextUp();
            setTimeout(this.addProductionText, 1200);
            this.moveTextDown();
            this.addGreenBg();
            this.laptop.swipeLeft();
            this.circle.changeCircles();
            setTimeout((): void => {
                this.getNewCircles();
            }, 2500);
        });
    }

    public subscribeOnRight(): void {
        const leftBtn = document.getElementById('btn-left') as HTMLButtonElement;
        const rightBtn = document.getElementById('btn-right') as HTMLButtonElement;

        rightBtn.addEventListener('click', (event: MouseEvent): void => {
            rightBtn.classList.add('inactive');
            rightBtn.disabled = true;
            leftBtn.classList.remove('inactive');
            leftBtn.disabled = false;
            this.moveTextUp();
            setTimeout(this.addShopText, 1200);
            this.moveTextDown();
            this.addGPurpleBg();
            this.laptop.swipeRight();
            this.circle.changeCircles();
            setTimeout((): void => {
                this.getNewCircles();
            }, 2500);
        });
    }


}

import { DescriptionModel } from '../models/description.model';

export class Description implements DescriptionModel {
    public template: string;

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
}



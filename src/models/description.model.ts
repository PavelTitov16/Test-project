export interface DescriptionModel {
    init(): string;
    addProductionText(): void;
    addShopText(): void;
    moveTextUp(): void;
    moveTextDown(): void;
    subscribeOnLeft(): void;
    subscribeOnRight(): void;
    addGPurpleBg(): void;
    addGreenBg(): void;
}

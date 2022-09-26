export interface ApppModel {
    init(): string;
    generateCircles(): void
    render(): Promise<void>;
}
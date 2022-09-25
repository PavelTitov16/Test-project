export interface ApppModel {
    init(): string;
    render(): Promise<void>;
}
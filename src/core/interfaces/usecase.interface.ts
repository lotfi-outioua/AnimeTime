export abstract class UseCase<T> {
    abstract execute(...args: any[]): T;
}
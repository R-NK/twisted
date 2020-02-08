import rp from 'request-promise';
import Queue from 'promise-queue';
export declare class RequestBase {
    static queue: Queue;
    private static sendRequest;
    static setConcurrency(concurrency: number): void;
    static request<T>(options: rp.OptionsWithUri): Promise<T>;
}

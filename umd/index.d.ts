declare function promiseFor(list: any[], task: (value: any, index: number) => Promise<any>, sleep?: number): Promise<unknown>;
declare namespace promiseFor {
    var sleep: (ms: number) => Promise<unknown>;
}
export default promiseFor;

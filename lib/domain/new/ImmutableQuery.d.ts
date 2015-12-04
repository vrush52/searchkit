export declare class ImmutableQuery {
    index: any;
    query: any;
    static defaultQuery: any;
    constructor(query?: any, index?: {});
    addQuery(query: any): ImmutableQuery;
    addFilter(key: any, bool: any): ImmutableQuery;
    setAggs(aggs: any): ImmutableQuery;
    getFilters(key?: any): {
        bool: {
            must: {}[];
        };
    };
    setSize(size: number): ImmutableQuery;
    setFrom(from: number): ImmutableQuery;
    update(updateDef: any, newIndex?: any): ImmutableQuery;
    static areQueriesDifferent(queryA: ImmutableQuery, queryB: ImmutableQuery): boolean;
    getJSON(): any;
}
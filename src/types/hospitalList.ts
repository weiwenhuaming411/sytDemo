export interface HospitalList_Ts {
    code: number;
    data: Data;
    message: string;
    ok: boolean;
    [property: string]: any;
}

export interface Data {
    content: Content[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: DataSort;
    totalElements: number;
    totalPages: number;
    [property: string]: any;
}

export interface Content {
    address: string;
    bookingRule: BookingRule;
    cityCode: string;
    createTime: string;
    districtCode: string;
    hoscode: string;
    hosname: string;
    hostype: string;
    id: string;
    intro: null | string;
    isDeleted: number;
    logoData: string;
    param: Param;
    provinceCode: string;
    route: string;
    status: number;
    updateTime: string;
    [property: string]: any;
}

export interface BookingRule {
    cycle: number;
    quitDay: number;
    quitTime: string;
    releaseTime: string;
    rule: string[];
    stopTime: string;
    [property: string]: any;
}

export interface Param {
    fullAddress: string;
    hostypeString: string;
    [property: string]: any;
}

export interface Pageable {
    offset: number;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    sort: PageableSort;
    unpaged: boolean;
    [property: string]: any;
}

export interface PageableSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
    [property: string]: any;
}

export interface DataSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
    [property: string]: any;
}
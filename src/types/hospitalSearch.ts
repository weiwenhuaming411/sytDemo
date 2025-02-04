export interface HospitalSearch_Ts {
    code: number;
    data: Datum[];
    message: string;
    ok: boolean;
    [property: string]: any;
}

export interface Datum {
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
    param: { [key: string]: any };
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
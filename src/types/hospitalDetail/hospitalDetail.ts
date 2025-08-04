export interface HospitalDetail_Ts {
    code: number;
    data: Data;
    message: string;
    ok: boolean;
    [property: string]: any;
}

export interface Data {
    bookingRule: BookingRule;
    hospital: Hospital;
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

export interface Hospital {
    address: string;
    bookingRule: null;
    cityCode: string;
    createTime: string;
    districtCode: string;
    hoscode: string;
    hosname: string;
    hostype: string;
    id: string;
    intro: null;
    isDeleted: number;
    logoData: string;
    param: Param;
    provinceCode: string;
    route: string;
    status: number;
    updateTime: string;
    [property: string]: any;
}

export interface Param {
    fullAddress: string;
    hostypeString: string;
    [property: string]: any;
}
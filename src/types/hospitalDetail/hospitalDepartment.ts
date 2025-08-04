export interface HospitalDepartment_Ts {
    code: number;
    data: Datum[];
    message: string;
    ok: boolean;
    [property: string]: any;
}

export interface Datum {
    children: Child[];
    depcode: string;
    depname: string;
    [property: string]: any;
}

export interface Child {
    children: null;
    depcode: string;
    depname: string;
    [property: string]: any;
}
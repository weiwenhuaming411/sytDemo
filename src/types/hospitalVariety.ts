export interface HospitalVariety_Ts {
    code: number;
    data: Datum[];
    message: string;
    ok: boolean;
    [property: string]: any;
}

export interface Datum {
    createTime: string;
    dictCode: string;
    hasChildren: boolean;
    id: number;
    isDeleted: number;
    name: string;
    param: { [key: string]: any };
    parentId: number;
    updateTime: string;
    value: string;
    [property: string]: any;
}
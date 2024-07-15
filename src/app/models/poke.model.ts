type IdType = number | string;

export interface IPokeModel {
    id: IdType;
    name: string;
    type: string;
    experience: number;
}
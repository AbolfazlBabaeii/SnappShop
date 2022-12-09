export interface Area {
  name: string;
  region: number;
  id: number;
  order?: number;
}

export interface IGetAreasResDTO {
  areas: Area[];
}

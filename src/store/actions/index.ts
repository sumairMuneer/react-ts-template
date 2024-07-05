export interface ILoadDataAction {
    type: 'LOAD_DATA_REQUEST';
  }
  
  export const loadData = (): ILoadDataAction => ({
    type: 'LOAD_DATA_REQUEST',
  });
  
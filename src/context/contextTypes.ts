export interface InitState {
  device: string;
  initDevice: InitDevice;
}

export interface Action {
  type: string;
  data: number | string;
}

export type AppReducer = (state: InitState, action: Action) => InitState;

export type InitDevice = (device: string) => void;

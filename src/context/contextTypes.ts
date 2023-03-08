export interface InitState {
  device: '' | 'desktop' | 'mobile';
  modal: boolean;
  hb: boolean;
  initDevice: InitDevice;
  modalActive?: ModalActive;
  hbActive?: HBActive;
}

export interface Action {
  type: string;
  data?: number | string;
}

export type AppReducer = (state: InitState, action: Action) => InitState;

export type InitDevice = (device: string) => void;

export type ModalActive = () => void;
export type HBActive = () => void;

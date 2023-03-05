export interface InitState {
  device: string;
  modal: boolean;
  initDevice: InitDevice;
  modalActive?: ModalActive;
}

export interface Action {
  type: string;
  data?: number | string;
}

export type AppReducer = (state: InitState, action: Action) => InitState;

export type InitDevice = (device: string) => void;

export type ModalActive = () => void;

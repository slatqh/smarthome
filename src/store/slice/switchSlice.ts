import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import switchData from '../../mock/switchesData';
import {ISwitch} from '../../components/Switch';
export interface SwitchState {
  switch: ISwitch[];
}

const initialState: SwitchState = {
  switch: switchData,
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    updateSwitch: (state, {payload}: PayloadAction<{id: string}>) => {
      state.switch?.map(item => {
        if (item.id === payload?.id) {
          item.isOn = !item.isOn;
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateSwitch} = switchSlice.actions;

export default switchSlice.reducer;

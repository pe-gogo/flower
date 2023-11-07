import { defineStore } from 'pinia';
import storage from 'store';
import router from '@/router';
import UaParser, { IResult as UaResult } from 'ua-parser-js';

export interface FlowersInfo {
  flowersInfo: any;
}


const defaultInfo = {
 name:1
};

export const useFlowerStore = defineStore({
  id: 'PageExample',
  state: (): FlowersInfo => ({
    flowersInfo: { ...defaultInfo },
  }),
  actions: {
    setInfo(payload: any) {
      this.flowersInfo = payload;
    },
  
  },
});

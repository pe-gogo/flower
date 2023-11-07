import { defineStore } from 'pinia';
import storage from 'store';
import router from '@/router';
import UaParser, { IResult as UaResult } from 'ua-parser-js';
import request from '@/libs/request';

export interface UserState {
  userInfo: UserInfo;
  ua: UaResult;
  flower:Array<any>,
  currentFlower:any,
  myCart:any,
  cateList:any
  flowercate:any,
  notices: any;
}

export interface UserInfo {
  id: string;
  token: string;
  name?: string;
  avatar?: string;
  nickname:string;
  roles?: string[];
}

const defaultUserInfo = {
  id: '',
  token: '',
  name: '',
  avatar: '',
  nickname:'',
  roles: [],
};

export const useUserStore = defineStore({
  id: 'PageExample',
  state: (): UserState => ({
    userInfo: { ...defaultUserInfo },
    ua: new UaParser().getResult(),
    flower:[],
    currentFlower:{},
    myCart:[1,2],
    cateList:[],
    flowercate:[],
    notices: [],
  }),
  actions: {
    setUserInfo(payload: any) {
      this.userInfo = payload;
      storage.set('USER_ID', payload.id);
      storage.set('ACCESS_TOKEN', payload.token);
    },
    resetUserInfo() {
      this.userInfo = { ...defaultUserInfo };
    },
    async getUserInfo() {
      const userID = storage.get('USER_ID');
      if (!userID) {
        // 异步调用查询用户信息接口
      }
    },
    async login() {
      // 调用登陆接口
      // this.setUserInfo(payload);
      // router.push({ path: '/' });
    },
    async logout() {
      // 调用退出登陆接口
      this.resetUserInfo();
      router.push({ name: 'Login' });
    },
    async verification(token: string) {
      // 调用 token 验证接口
      return Promise.resolve(token);
    },
    getCart(){
      let u = this.userInfo;
      u.uname = this.userInfo.name;
      request.post('/system/orders/u',u).then(res=>this.myCart = res)
    },
    getOrder(){
      let u = this.userInfo;
      u.uname = this.userInfo.name;
      request.post('/system/orders/o',u).then(res=>this.myCart = res)
    },
    delCart(id:any){
      return  request.put('/system/orders/',id)
    },
    toDetail(flower:any){
      this.cateList.forEach((item:any)=>{
        if(item.id == flower.flowerCategory){
          flower.flowerCategory = item.name
        }
      })
      this.currentFlower = flower;
      console.log(flower)
      router.push('/detail')
    },
    async toCart(data:any){
      return request.post('/system/orders',data)
    },
    async getCategory(){
      request.get('/system/flowerCategory/list').then(res=>{
        this.cateList = res
      })
    },
    async getFlowerByCate(data:any){
      return request.post('/system/flowers/cate',data)
    },
    getFlowerByKey(key:any){
      request.post('/system/flowers/name',key).then(res=>{
        this.flower = [];
        for (let i = 0; i < res.length; i+=4) { const chunk = res.slice(i, i+4);
            this.flower.push(chunk)
        }
      })
    },
    getFlowerList(){
      request.get('system/flowers/list').then(res=>{
        if(this.flower.length>0){
            return;
        }
        for (let i = 0; i < res.length; i+=4) { const chunk = res.slice(i, i+4);
            console.log(chunk)
            this.flower.push(chunk)
        }
     })
    },
    getFlowerByPrice(price:number){
      request.get('system/flowers/price/'+price).then(res=>{
        this.flower = [];
        for (let i = 0; i < res.length; i+=4) { const chunk = res.slice(i, i+4);
            this.flower.push(chunk)
        }
     })
    },
    getNotices() {
      request<any>({
        method: 'get',
        url: '/system/notice/list',
      }).then(res=>{
        this.notices = res
      })
    },
    
  }
});

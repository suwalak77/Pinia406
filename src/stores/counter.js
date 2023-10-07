import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {
  
  

  const menu = ref([
    { name: 'เค้กไข่ญี่ปุ่น ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601639476_79520507f1d1a07c99e97a05b40ce94a.jpg', price: 10  },
    { name: 'ลูกชุบ ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601639655_db64d14ae1f48dee68b240c462927954.jpg', price: 50 },
    { name: 'เค้กมะพร้าวอ่อน ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601639796_99bc1674b9a5bd9c1fb5f39fa85968b9.jpg', price: 100 },
    { name: 'ขนมเปี๊ยะ (ไส้ถั่วไข่เค็ม) ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601639983_5a649d6a5f6abb400bb8642cf905b97b.jpg', price: 50 },
    { name: 'พิซซ่าหน้าฮาวายเอี้ยน ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640042_2628c39bd95f1ff2b9053908584de55a.jpg', price: 200 },
    { name: 'สเต๊กหมูพริกไทยดำ ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640104_5e32fb3e36349fa0ff73277ed9686046.jpg', price: 139 },
    { name: 'สปาเกตตีต้มยำ ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640153_81c068c44d11a7b28a0f84e5ebbbdda9.jpg', price: 109 },
    { name: 'ข้าวผัดกะเพราเนื้อ ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640203_04703c0a082e9ed84dc11e0f5ece2cb6.jpg', price: 69 },
    { name: 'ยำหอยนางรม  ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640268_fc7dc1b6e308794b733394a272a8bdf8.jpg', price: 120 },
    { name: 'สมูทตี้สตรอว์เบอร์รี  ', img: 'https://www.ryoiireview.com/upload/editor_review/202010/1601640407_736d9e9f2aead67746d64aaccf18b434.jpg', price: 35 },
 



  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
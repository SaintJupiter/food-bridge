import {dishes,merchants} from './data.ts';

const categoryArts:Record<number,number[]>={0:[0,6,7,8],1:[1,5],2:[2,9],3:[3,4]};
const recommended=['m0','m4','m3','m9','m8','m11','m5','m7','m6','m1','m10','m2'];

// A single matched menu drives eligibility, preview, starting price and sorting.
export function deliveryResults({query,category,area,sort}:{query:string;category:number;area:string;sort:string}){
 const term=query.trim().toLocaleLowerCase();
 return merchants.filter(m=>area==='全部'||m.area===area).map(merchant=>{
  const menu=dishes.filter(d=>d.merchantId===merchant.id&&
   (merchant.name+merchant.branch+d.name).toLocaleLowerCase().includes(term)&&
   (category<0||categoryArts[category]?.includes(d.art)));
  return {merchant,menu,minPrice:menu.length?Math.min(...menu.map(d=>d.price)):0};
 }).filter(row=>row.menu.length>0).sort((a,b)=>sort==='价格'?a.minPrice-b.minPrice:recommended.indexOf(a.merchant.id)-recommended.indexOf(b.merchant.id));
}

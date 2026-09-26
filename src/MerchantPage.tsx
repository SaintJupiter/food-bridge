import {useState,type ReactNode} from 'react';
import {dishes,type Dish,type Merchant} from './data';
import {Food,DishPrice} from './ui';
const group=(d:Dish)=>[1,5].includes(d.art)?'甜品':[2,9].includes(d.art)?'饮品':'主食';
export function MerchantPage({merchant,cart,onBack,onDish,onAdd,onCart,review}:{merchant:Merchant;cart:Record<string,number>;onBack:()=>void;onDish:(d:Dish)=>void;onAdd:(d:Dish)=>void;onCart:()=>void;review:(d:Dish)=>ReactNode}){
 const [tab,setTab]=useState('点餐');
 const [category,setCategory]=useState('全部');
 const menu=dishes.filter(d=>d.merchantId===merchant.id);
 const categories=['全部',...new Set(menu.map(group))];
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const total=dishes.reduce((s,d)=>s+(cart[d.id]||0)*d.price,0);
 const hasOtherStore=dishes.some(d=>d.merchantId!==merchant.id&&(cart[d.id]||0)>0);
 return <div className="store-page">
  <div className="store-hero"><Food art={menu[0].art}/><button className="store-back" onClick={onBack}>← 所有门店</button><span className="store-stamp">PIXEL KITCHEN<br/>吃了么 · 虚构门店</span></div>
  <section className="store-profile"><div className="store-identity"><Food art={menu[0].art} small/><div><small>{merchant.area}演示商圈 / {merchant.branch}</small><h1>{merchant.name}</h1><p>好好吃饭，不将就每一口。</p></div></div>
   <div className="store-facts"><span><strong>约 30 分钟</strong>模拟配送</span><span><strong>¥0</strong>模拟配送费</span><span><strong>{menu.length} 道</strong>在售演示菜品</span></div>
   <p className="store-announcement">本店为虚构体验场景。价格、配送与评价统计均为模拟；图片为 AI 像素画。</p>
  </section>
  <nav className="store-tabs" aria-label="门店栏目">{['点餐','菜品评价','门店信息'].map(t=><button key={t} aria-pressed={tab===t} className={tab===t?'active':''} onClick={()=>setTab(t)}>{t}</button>)}</nav>
  {tab==='点餐'?<>
   <div className="store-feature"><span>今日好食</span><strong>从一张食记，到这一口。</strong><p>点开菜品，看清评价信息再决定。</p></div>
   <div className="store-menu"><nav aria-label="菜单分类">{categories.map(c=><button key={c} aria-pressed={category===c} className={c===category?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</nav><div className="store-dishes">{menu.filter(d=>category==='全部'||group(d)===category).map(d=><div key={d.id} className="store-dish"><button className="store-dish-link" onClick={()=>onDish(d)}><Food art={d.art} small/><span><b>{d.name}</b><small>{group(d)} · 一份装 / 模拟规格</small><em>{d.reviews} 条模拟评价 · 查看详情 ›</em><DishPrice dish={d}/></span></button><button className="dish-add" aria-label={'加入'+d.name} onClick={()=>onAdd(d)}>＋</button>{!!cart[d.id]&&<span className="dish-count">已选 {cart[d.id]}</span>}</div>)}</div></div>
  </>:tab==='菜品评价'?<div className="store-review"><h2>大家怎么说</h2><p>不把店铺评分当作每道菜的口碑。这里逐道展示模拟评价数量，进入详情后可查看是否有社区补充信息。</p>{menu.map(d=><button key={d.id} onClick={()=>onDish(d)}><span>{d.name}<small>{d.photos} 张模拟有效图片</small></span><b>{d.reviews} 条 ›</b></button>)}{review(menu[0])}</div>:<div className="store-review"><h2>{merchant.name} · {merchant.branch}</h2><p>区域：{merchant.area}演示商圈</p><p>这是概念 Demo 中的虚构门店，不提供真实地址、资质、电话或营业承诺。</p><p>关联以“门店 ID + 菜品 ID”为单位。同名商户不会被直接视为同一家。</p><small>门店标识：{merchant.id} · 会话刷新后重置</small></div>}
  <button className="store-basket" onClick={onCart}><span>▣ <b>{count} 份</b><small>模拟购物车{hasOtherStore?' · 含其他门店已选菜品':''}</small></span><strong>¥{total} <i>查看 ›</i></strong></button>
 </div>;
}

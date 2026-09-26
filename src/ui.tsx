import {createContext,useContext}from'react';
import {foodAssetPath,foods,type Dish}from'./data';
export const FoodStyle=createContext<'photo'|'pixel'>('photo');
export function Food({art,small=false}:{art:number;small?:boolean}) {const style=useContext(FoodStyle);return <div className={'food '+style+(small?' small':'')}><img src={import.meta.env.BASE_URL+foodAssetPath(art,style)} alt={foods[art]+(style==='pixel'?' · AI像素画':' · AI生成示意图')} loading="lazy"/><span>{style==='pixel'?'AI像素画':'AI生成示意'}</span></div>}
export function DishPrice({dish}:{dish:Dish}){return <span className="price"><small>¥</small>{dish.price}<small> / 份</small></span>}

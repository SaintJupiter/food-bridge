import {createContext,useContext}from'react';
import {foodAssetPath,foods,type Dish}from'./data';
export const FoodStyle=createContext<'photo'|'pixel'>('photo');
export const FoodVisible=createContext(true);
export function Food({art,small=false,priority=false}:{art:number;small?:boolean;priority?:boolean}) {const style=useContext(FoodStyle),visible=useContext(FoodVisible);return <div className={'food '+style+(small?' small':'')}>{visible&&<img src={import.meta.env.BASE_URL+foodAssetPath(art,style)} alt={foods[art]+(style==='pixel'?' · AI像素画':' · AI生成示意图')} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async" width={960} height={960}/>}<span>{style==='pixel'?'AI像素画':'AI生成示意'}</span></div>}
export function DishPrice({dish}:{dish:Dish}){return <span className="price"><small>¥</small>{dish.price}<small> / 份</small></span>}

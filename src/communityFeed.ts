import {dishes,merchants,type Post} from './data.ts';
export const communityTopics=['推荐','美食','探店','咖啡甜品','一人食'];
// Interest topics describe editorial intent, not an individual dish/SKU.
export function communityPosts(posts:Post[],{query,channel,topic,followed}:{query:string;channel:string;topic:string;followed:string[]}){
 const term=query.trim().toLocaleLowerCase();
 return posts.filter(p=>{
  const d=dishes.find(d=>d.id===p.dishId);
  const m=merchants.find(m=>m.id===d?.merchantId);
  if(!d||!m)return false;
  return (p.title+p.text+p.author+d.name+m.name+m.branch).toLocaleLowerCase().includes(term)
   &&(channel!=='关注'||followed.includes(p.author))
   &&(channel!=='同城'||m.area==='静安')
   &&(topic==='推荐'||(p.topics||[]).includes(topic));
 });
}

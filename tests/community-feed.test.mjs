import test from 'node:test';
import assert from 'node:assert/strict';
import {posts,dishes,merchants,foodAssets} from '../src/data.ts';
import {communityPosts,communityTopics} from '../src/communityFeed.ts';
const base={query:'',channel:'发现',topic:'推荐',followed:[]};
test('interest channels are content themes, not individual SKUs',()=>{
 assert.deepEqual(communityTopics,['推荐','美食','探店','咖啡甜品','一人食']);
 for(const topic of communityTopics.slice(1)){
  const found=communityPosts(posts,{...base,topic});assert.ok(found.length>0);
  assert.ok(found.every(p=>p.topics.includes(topic)));
 }
});
test('follow and same-city channels honor real fixture relationships',()=>{
 assert.equal(communityPosts(posts,{...base,channel:'关注'}).length,0);
 const author=posts[0].author;
 assert.ok(communityPosts(posts,{...base,channel:'关注',followed:[author]}).every(p=>p.author===author));
 const other={...posts[0],id:'external',dishId:'d6'};
 assert.ok(!communityPosts([...posts,other],{...base,channel:'同城'}).some(p=>p.id==='external'));
});
test('food names remain searchable without becoming navigation labels',()=>{
 const found=communityPosts(posts,{...base,query:'  抹茶  '});
 assert.ok(found.length>0);assert.ok(found.every(p=>p.dishId==='d38'));
 assert.equal(communityPosts(posts,{...base,query:'不在原型里的菜品'}).length,0);
});
test('expanded menus retain stable unique identities and valid asset references',()=>{
 assert.equal(dishes.length,45);assert.equal(new Set(dishes.map(d=>d.id)).size,dishes.length);
 assert.equal(new Set(posts.map(p=>p.id)).size,posts.length);
 for(const d of dishes){assert.ok(merchants.some(m=>m.id===d.merchantId));assert.ok(foodAssets[d.art]);assert.ok(d.price>0);}
 assert.equal(dishes.find(d=>d.id==='d1').name,'焦糖布丁');
 assert.equal(dishes.filter(d=>d.merchantId==='m6').length,6);
});

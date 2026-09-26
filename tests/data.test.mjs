import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {dishes, posts, matchMerchants, matchDecision, evidence, foodAssets, foodAssetPath} from '../src/data.ts';

test('first seven discovery posts have distinct artwork and titles',()=>{
 const first=posts.slice(0,7);
 assert.equal(new Set(first.map(p=>dishes.find(d=>d.id===p.dishId).art)).size,7);
 assert.equal(new Set(posts.map(p=>p.title)).size,posts.length);
});
test('each post resolves to a dish; no illustration dominates the discovery feed',()=>{
 const counts={};
 for(const p of posts){const d=dishes.find(d=>d.id===p.dishId);assert.ok(d);counts[d.art]=(counts[d.art]||0)+1;}
 assert.ok(Math.max(...Object.values(counts))<=2);
});
test('same-name branches require confirmation and wrong area is blocked',()=>{
 assert.equal(matchDecision(matchMerchants('木木咖啡')),'needs_confirmation');
 const c=matchMerchants('木木咖啡徐汇店');
 assert.equal(c.find(c=>c.merchant.area==='静安').blocked,true);
 assert.equal(matchDecision(c),'suggested');
 assert.equal(matchDecision(matchMerchants('不存在的门店')),'unmatched');
});
test('the two demonstration dishes retain their evidence boundaries',()=>{
 assert.equal(evidence(dishes.find(d=>d.id==='d0')).gap,false);
 assert.equal(evidence(dishes.find(d=>d.id==='d1')).gap,true);
});
test('every dish art has separate community photograph and delivery pixel files',()=>{
 for(let i=0;i<foodAssets.length;i++){
  assert.notEqual(foodAssetPath(i,'photo'),foodAssetPath(i,'pixel'));
  for(const style of ['photo','pixel'])assert.ok(existsSync(new URL('../public/'+foodAssetPath(i,style),import.meta.url)),foodAssetPath(i,style));
 }
});

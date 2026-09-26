import test from 'node:test';
import assert from 'node:assert/strict';
import {deliveryResults} from '../src/deliverySearch.ts';

test('dish searches display only matching dishes and prices',()=>{
 const results=deliveryResults({query:'布丁',category:-1,area:'全部',sort:'综合'});
 assert.ok(results.length>1);
 for(const row of results){assert.ok(row.menu.every(d=>d.name.includes('布丁')));assert.equal(row.minPrice,18);assert.equal(row.menu[0].art,1);}
});
test('category filters and price sorting use the same matched menu',()=>{
 const rows=deliveryResults({query:'',category:2,area:'全部',sort:'价格'});
 assert.ok(rows.length>0);
 rows.forEach(r=>{assert.ok(r.menu.every(d=>[2,9].includes(d.art)));assert.equal(r.minPrice,Math.min(...r.menu.map(d=>d.price)))});
});
test('trim whitespace, preserve area and return a genuine empty result',()=>{
 const rows=deliveryResults({query:'  木木咖啡  ',category:-1,area:'徐汇',sort:'综合'});
 assert.equal(rows.length,1);assert.equal(rows[0].merchant.id,'m2');
 assert.equal(deliveryResults({query:'不存在的菜',category:-1,area:'全部',sort:'综合'}).length,0);
});

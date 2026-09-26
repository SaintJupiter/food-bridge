import test from 'node:test';
import assert from 'node:assert/strict';
import {sampleComments} from '../src/commentModel.ts';
test('community comments have unique identities and valid reply parents',()=>{
 const rows=sampleComments(false,'');
 assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);
 assert.ok(rows.some(r=>r.parent));
 for(const row of rows.filter(r=>r.parent))assert.ok(rows.some(p=>p.id===row.parent&&!p.parent));
});
test('delivery examples are dish-specific and do not mutate other threads',()=>{
 const dessert=sampleComments(true,'焦糖布丁'),drink=sampleComments(true,'冰拿铁');
 assert.match(dessert[0].text,/焦糖布丁.*甜度/);
 assert.match(drink[0].text,/冰拿铁.*冰量/);
 dessert[0].likes=99;
 assert.notEqual(sampleComments(true,'焦糖布丁')[0].likes,99);
});

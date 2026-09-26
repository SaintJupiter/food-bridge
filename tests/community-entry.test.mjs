import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// Source regression: review-count gating must not return to the dish view.
test('dish community entry is unconditional; empty matches and consent remain guarded',()=>{
 const source=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 const dish=source.split("if(path.startsWith('/delivery/dish/')&&currentDish)")[1].split("if(path.startsWith('/content/entity/')")[0];
 assert.ok(dish.includes('className="evidence-card"'));
 assert.ok(!dish.includes('ev.gap'));
 assert.ok(!dish.includes('本场景评价信息充足'));
 assert.ok(dish.includes('disabled={!consent||busy||community.length===0}'));
 assert.ok(dish.includes('暂时没有这道菜的关联食记'));
});

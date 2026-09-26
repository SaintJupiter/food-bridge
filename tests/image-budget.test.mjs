import test from 'node:test';
import assert from 'node:assert/strict';
import {statSync} from 'node:fs';
import {dishes,posts,foodAssetPath} from '../src/data.ts';
test('hero and first four feed images fit the first-screen image budget',()=>{
 const paths=['assets/pixel-route-sign.webp','assets/pudding-logo.webp',...posts.slice(0,4).map(p=>foodAssetPath(dishes.find(d=>d.id===p.dishId).art,'photo'))];
 const bytes=paths.reduce((sum,p)=>sum+statSync(new URL('../public/'+p,import.meta.url)).size,0);
 assert.ok(bytes<600*1024,`First-screen images: ${bytes} bytes exceed 600 KiB`);
});

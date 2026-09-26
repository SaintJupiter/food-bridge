// Deterministic fictional fixtures. No personal data, external content or trained-model scores.
export type Merchant = {id:string;name:string;branch:string;area:string;aliases:string[]};
export type Dish = {id:string;merchantId:string;name:string;price:number;art:number;photos:number;reviews:number};
export type Post = {id:string;dishId:string;title:string;text:string;author:string;source:'author'|'confirmed';commercial:boolean;topics?:string[]};
const brands = ['南巷小馆','木木咖啡','木木咖啡','春日甜品','一碗面馆','禾间食堂','小岛厨房','巷口面馆','白日咖啡','松果轻食','山下饭堂','北窗甜品'];
export const merchants:Merchant[] = brands.map((name,i)=>({id:'m'+i,name,branch:i===2?'徐汇店':'静安店',area:i===2?'徐汇':'静安',aliases:[name.replace('小馆',''),name.replace('咖啡','')]}));
export const foods = ['椒麻鸡饭','焦糖布丁','冰拿铁','香辣牛肉面','鲜肉小笼包','草莓奶油蛋糕','鸡肉牛油果谷物碗','罗勒玛格丽特披萨','三文鱼牛油果卷','草莓抹茶拿铁'];
export const foodAssets = ['chicken','pudding','latte','noodles','dumplings','cake','salad','pizza','sushi','matcha'];
export function foodAssetPath(art:number,mode:'photo'|'pixel'){return 'assets/'+(mode==='pixel'?'pixel/':'')+foodAssets[art]+'.png';}
const menus = [[0,1,4],[2,1,5],[2,5,1],[1,5,2],[3,4,0],[0,4,6],[6,0,1],[3,4,6],[2,5,1],[6,4,0],[0,3,4],[5,1,2]];
const baseDishes:Dish[] = merchants.flatMap((m,i)=>menus[i].map((art,j)=>({id:'d'+(i*3+j),merchantId:m.id,name:foods[art],price:[32,18,24,28,22,29,35][art],art,photos:j===1?1:4,reviews:j===1?2:12})));
export const dishes:Dish[] = [...baseDishes,...[
 ['d36','m6',7,42],['d37','m9',8,38],['d38','m8',9,28],
 ['d39','m6',8,38],['d40','m1',9,28],['d41','m3',9,28],
 ['d42','m6',4,22],['d43','m9',7,42],['d44','m8',7,42],
].map(([id,merchantId,art,price])=>({id:String(id),merchantId:String(merchantId),art:Number(art),price:Number(price),name:foods[Number(art)],photos:1,reviews:2}))];
// Curated discovery fixtures: diverse first screen, no duplicate titles, at most two uses of an image.
const stories:[number,string,string,string][] = [
 [0,'这碗椒麻鸡，香比辣先到','椒麻香比辣味更明显，鸡肉外皮有一点脆。米饭分开装更好，想知道外卖送到后会不会变软。','饭点观察员'],
 [1,'轻轻一晃的布丁，是今天的小奖励','焦糖略带苦味，布丁柔软。外送包装能不能保持完整？还想看看同一道菜的讨论。','阿栗的食记'],
 [12,'加班后，就想喝一口热汤','牛肉切得厚，汤底偏浓。外卖的话建议面汤分装，辣度和份量还是要向门店确认。','深夜一碗'],
 [2,'小笼包的第一口，记得慢一点','先咬一个小口让汤汁凉一凉，再蘸一点醋。比起堆很多小吃，我更喜欢一笼热气腾腾。','巷口散步'],
 [5,'草莓季的下午，不想只喝咖啡','奶油和草莓一起吃比较清爽。蛋糕在路上容易移位，下单前先看门店包装说明。','甜食研究员'],
 [18,'午休不将就：一碗彩色的午饭','谷物、牛油果和鸡肉搭起来很有层次。酱汁分开放，吃之前拌；配料以实际菜单为准。','小禾吃饭'],
 [3,'散步回来，冰拿铁刚刚好','咖啡和奶的分层很好看。木木有同名分店，收藏时记得一起保存门店位置。','午后散步'],
 [13,'面馆里的小笼包，也值得留一点胃','热汤面配一笼小笼包适合两个人分享。想确认分店，不要只看店名。','一口日常'],
 [27,'轻食吃不饱？试试有谷物的搭配','不是只有生菜，谷物和鸡肉的搭配更适合午餐。这里是虚构场景，不构成营养建议。','小禾吃饭'],
 [31,'想吃辣的夜晚，给牛肉面留个位置','热汤喝起来很舒服，但外卖口感会随配送时间改变。点之前看看最近的菜品评价。','深夜一碗'],
 [33,'周末的草莓蛋糕，想留到最后一口','这家是北窗甜品，不是另一条街的春日甜品。同款名字不代表同一道菜，关联要认准店。','甜食研究员'],
 [1,'布丁外卖会不会散？我也想知道','看到阿栗的笔记后收藏了这道菜。照片看不出配送后的状态，想找同款食记继续比较。','一口日常'],
];
const basePosts:Post[] = stories.map(([dish,title,text,author],i)=>({id:'p'+i,dishId:'d'+dish,title,text,author,source:'author',commercial:i===0,topics:i===0||i===5||i===8||i===9?['美食','一人食']:i===1||i===4||i===6||i===10||i===11?['探店','咖啡甜品']:['美食','探店']}));
const newPosts:Post[] = [
 {id:'p12',dishId:'d36',title:'周末披萨局，先把这一角留给罗勒',text:'番茄、芝士和罗勒的组合很简单。小岛厨房这份披萨适合分享，外卖能否保持饼边口感，还需要更多信息。',author:'周末吃什么',source:'author',commercial:false,topics:['美食','探店']},
 {id:'p13',dishId:'d37',title:'午饭换个口味：三文鱼与牛油果',text:'松果轻食的卷物搭配，给午休换一种选择。食材与配送条件以门店菜单为准，这里展示的是虚构原型。',author:'小禾吃饭',source:'author',commercial:false,topics:['美食','一人食']},
 {id:'p14',dishId:'d38',title:'草莓遇上抹茶，今天是粉绿配色',text:'白日咖啡的新搭配，草莓、牛奶、抹茶的三层颜色很适合下午茶。甜度和杯型需要下单前向门店确认。',author:'午后散步',source:'author',commercial:false,topics:['咖啡甜品','探店']},
];
export const posts:Post[]=[...basePosts.slice(0,4),...newPosts,...basePosts.slice(4)];
export const mediaManifest = {photoAssets:foodAssets.map((_,i)=>foodAssetPath(i,'photo')),pixelAssets:foodAssets.map((_,i)=>foodAssetPath(i,'pixel')),ai_generated:true,visible_label:'AI生成示意 / AI像素画',counts_as_real_photo:false,scope:'fictional prototype',provider:'built-in imagegen',subjects:foods};
export function evidence(d:Dish) {const reasons=[];if(d.photos<3) reasons.push('模拟有效评价图片少于 3 张');if(d.reviews<8) reasons.push('模拟菜品评价少于 8 条');return {gap:reasons.length>0,reasons,source:'人工构造的场景统计，不包含页面 AI 插画'};}
export type Candidate={merchant:Merchant;name:number;branch:number;score:number;blocked:boolean;reason:string};
const norm=(s:string)=>s.normalize('NFKC').replace(/[\s·（）()店]/g,'');
export function matchMerchants(input:string):Candidate[]{
 const q=norm(input);
 return merchants.map(m=>{const name=q.includes(norm(m.name))||m.aliases.some(a=>a.length>1&&q.includes(norm(a)))?1:0;
 const explicit=q.includes('静安')||q.includes('徐汇');
 const blocked=explicit&&!q.includes(m.area);
 const branch=explicit?(blocked?0:1):.35;
 return {merchant:m,name,branch,score:name?Math.round((.7+.3*branch)*100)/100:0,blocked,reason:blocked?'分店区域冲突：禁止绑定':!explicit?'缺少分店信息：请人工确认':'名称与分店一致（规则匹配）'};
 }).filter(c=>c.name>0).sort((a,b)=>b.score-a.score);
}
export function matchDecision(c:Candidate[]) { const valid=c.filter(x=>!x.blocked); if(!valid.length)return 'unmatched'; return valid[0].score>=.88&&valid[0].score-(valid[1]?.score??0)>=.08?'suggested':'needs_confirmation'; }

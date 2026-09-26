import './match-hero.css';
export function ProductNarrative({onContent,onEvidence,onDemo}:{onContent:()=>void;onEvidence:()=>void;onDemo:()=>void}){
 return <div className="editorial-story">
 <section className="match-hero" aria-labelledby="hero-heading">
  <div className="match-chrome"><span>▦ 对上了！ / 双 App 联动原型</span><b aria-hidden="true">— □ ×</b></div>
  <div className="match-heading"><span className="match-eyebrow">外卖决策 × 内容种草</span><h1 id="hero-heading"><span>想吃的<em>找得到，</em></span><span>想点的<em>看得清。</em></span></h1></div>
  <div className="match-stage">
   <img className="match-mascot" loading="eager" fetchPriority="high" decoding="async" src={import.meta.env.BASE_URL+'assets/pixel-route-sign.webp'} alt="布丁向导与蓝紫双色路牌像素插画" width="1280" height="1280"/>
   <button className="match-path match-path-blue" onClick={onEvidence}><span className="match-question">外卖评价少，<br/>图片不够看？</span><span className="match-answer">去社区看同款</span></button>
   <button className="match-path match-path-purple" onClick={onContent}><span className="match-question">笔记被种草，<br/>却找不到同款？</span><span className="match-answer">找门店，点同款</span></button>
  </div>
 </section>
 <aside className="publish-guide" aria-label="模拟发布体验引导"><div><span>不止能浏览，也能亲手发布</span><strong>试发一篇笔记，把同款关联起来。</strong><p>输入笔记 → 确认门店与菜品 → 查看发布结果</p><small>仅在本次演示中生效，不会发布到真实平台。</small></div><button onClick={()=>{window.location.hash='/content/publish';onDemo();}}>体验模拟发布 ↗</button></aside>
 <div className="match-utility"><button onClick={onDemo}>自由探索双 App ↗</button><span>虚构内容 · AI 图片 · 无真实交易</span></div>
 <section className="route-board" aria-labelledby="route-heading">
  <header><span className="overline">01 / 核心痛点 · 点击体验解决路径</span><h2 id="route-heading">两种信息断层，<br/>两条连接路径。</h2></header>
  <button className="route-ticket delivery-route" onClick={onEvidence}><span className="route-icon">01</span><span><small>优先场景 / 选择外卖时</small><b>评价太少，图片不够看。</b><span className="route-detail">缺少高质量图片和具体口味反馈，难判断是否值得点。关联同款社区图文与讨论，看完仍能回到原菜品。</span><span className="route-stops">外卖菜品 <i>→</i> 社区图文 <i>→</i> 返回决策</span></span><strong>↗</strong></button>
  <button className="route-ticket community-route" onClick={onContent}><span className="route-icon">02</span><span><small>另一场景 / 浏览内容时</small><b>笔记种了草，外卖找不到。</b><span className="route-detail">换 App 重新搜索，店名相似、分店难辨。确认门店与菜品关联后，从笔记直达外卖同款。</span><span className="route-stops">社区笔记 <i>→</i> 已确认关联 <i>→</i> 外卖同款</span></span><strong>↗</strong></button>
  <div className="design-principle"><span>当前边界</span><p>以上是待验证的产品假设。此处以虚构图文演示关联流程，不证明图片真实、评价可靠或转化提升。</p></div>
 </section>
 <section className="decision-board" id="product-problem" aria-labelledby="problem-heading">
  <header><span className="overline">02 / 设计如何回应</span><h2 id="problem-heading">补信息，也要<em>接得准。</em></h2><span className="window-corner" aria-hidden="true">▦</span></header>
  <div className="decision-row"><span className="row-number">01</span><div><small>评价稀少、图片缺乏细节</small><h3>按具体菜品补充图文与讨论</h3><p>所有菜品保留社区入口；暂无关联食记时说明，不拿无关内容填充。</p></div><span className="response-tag">补充信息</span></div>
  <div className="decision-row"><span className="row-number">02</span><div><small>笔记与外卖之间缺少准确定位</small><h3>先确认分店，再关联菜品</h3><p>同名不等于同店。存在歧义时由用户确认，不自动猜测绑定。</p></div><span className="response-tag">精确关联</span></div>
  <div className="decision-row"><span className="row-number">03</span><div><small>跨 App 后容易丢失原来的选择</small><h3>回到原菜品，保留模拟购物车</h3><p>跨端返回继续选择；本原型的会话状态在刷新后重置。</p></div><span className="response-tag">上下文保留</span></div>
  <p className="board-footnote">真实产品仍需验证内容真实性、门店关联准确率，以及对决策的实际帮助。</p>
 </section>
 </div>;
}

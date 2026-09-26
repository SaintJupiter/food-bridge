export function ProductValidation(){
 return <section className="validation-notes validation-ledger product-plan" aria-labelledby="product-plan-title">
 <header><span className="overline">03 / 产品规划</span><h2 id="product-plan-title">从找到同款，到放心下单。</h2></header>
 <div className="validation-grid">
 <article><span className="ledger-number">01</span><div><span className="plan-topic">当前痛点</span><h3>信息分散，用户需要反复搜索</h3><p>选外卖时，部分菜品评价少、图片细节不足，难以判断分量和口味；在社区被种草后，又找不到对应的外卖门店和菜品。跨 App 搜索还需要辨认同名分店，看完内容后重新找到原商品。</p></div></article>
 <article><span className="ledger-number">02</span><div><span className="plan-topic">打算实现</span><h3>把两条路径接起来</h3><p>从外卖菜品进入关联社区，补充查看图片、口味反馈与讨论，再返回原菜品继续选择；从社区笔记展开同款卡片，找到对应门店与菜品。入口可折叠，关联不明确时先确认，没有内容时如实提示。</p></div></article>
 <article><span className="ledger-number">03</span><div><span className="plan-topic">推进规划</span><h3>先小范围跑通，再逐步扩展</h3><p>先完善双向跳转、关联确认与返回体验，再从少量门店、甜品和咖啡等重视图片体验的品类开展试点。优先整理准确的门店与菜品关联，获得授权后逐步展示内容卡片、接入真实商品，并扩大覆盖范围。</p></div></article>
 <article><span className="ledger-number">04</span><div><span className="plan-topic">落地可行性</span><h3>技术连接之外，还需要授权与合作</h3><p>初期通过城市、门店地址、菜名与规格建立对应关系，由作者或商户确认，后续再引入智能匹配辅助。真实上线需要确认平台跳转能力和内容展示权限；内容保留来源，交易留在外卖平台，不默认共享用户身份或搬运未经授权的内容。</p></div></article>
 </div><footer>当前为双 App 模拟原型，尚未接入真实平台、授权内容与交易。</footer>
 </section>;
}

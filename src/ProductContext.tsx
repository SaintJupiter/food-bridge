export function ProductValidation(){
 return <section className="validation-notes validation-ledger" aria-labelledby="validation-title">
 <header><span className="overline">03 / 产品验证</span><h2 id="validation-title">有用，不只看跳转量。</h2><span className="pending-stamp">待验证</span></header>
 <div className="validation-grid">
 <article><span className="ledger-number">01</span><div><h3>看过之后，更好选了吗？</h3><p>观察用户能否找到所需图片和口味信息，减少重复搜索；通过任务测试和访谈验证。</p></div></article>
 <article><span className="ledger-number">02</span><div><h3>看完，能接着点吗？</h3><p>检查是否返回原菜品、保留购物车。若接入真实交易，再衡量返回后的下单比例。</p></div></article>
 <article><span className="ledger-number">03</span><div><h3>有没有把人带错店？</h3><p>检查分店与菜品误绑、无关内容和跳转失败，避免“多看一点”变成额外负担。</p></div></article>
 </div><footer>当前仅为交互原型，尚无真实用户实验或转化提升结论。</footer>
 </section>;
}

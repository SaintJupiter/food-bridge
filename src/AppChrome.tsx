type AppKind='content'|'delivery';
export function UIIcon({name}:{name:'home'|'cart'|'heart'|'plus'|'user'}){const paths={user:'M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0 M4 22v-4c0-6 16-6 16 0v4',home:'M3 11 12 3 21 11 M5 10v11h5v-7h4v7h5V10',cart:'M3 4h3l2 12h11l2-9H7 M10 21h1 M18 21h1',heart:'M12 21 3 12V6l3-3h4l2 3 2-3h4l3 3v6Z',plus:'M12 3v18 M3 12h18'};return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true"><path d={paths[name]}/></svg>}
export function AppSwitcher({active,onSwitch,onReset}:{active:AppKind;onSwitch:(app:AppKind)=>void;onReset:()=>void}){
 return <div className="app-switcher" aria-label="演示设备的应用切换"><small>双 App 演示 · 切换应用</small><div>{(['content','delivery'] as const).map(a=><button key={a} className={a+' '+(active===a?'selected':'')} aria-pressed={active===a} onClick={()=>onSwitch(a)}><i>{a==='content'?'✳':'↗'}</i><span><b>{a==='content'?'老红书':'吃了么'}</b><small>{a==='content'?'内容社区':'本地生活'}</small></span>{active===a&&<em>使用中</em>}</button>)}<button className="demo-reset" onClick={onReset} title="恢复初始演示，清空本次发布、购物车和互动"><i aria-hidden="true">↺</i><span><b>重置</b></span></button></div></div>;
}
export function AppNav({delivery,path,count,go}:{delivery:boolean;path:string;count:number;go:(path:string)=>void}){
 const items=delivery?[['⌂','首页','/delivery/home'],['▢',`购物车${count?' · '+count:''}`,'/delivery/cart']]:[['⌂','发现','/content/feed'],['＋','发布','/content/publish'],['○','我','/content/profile']];
 return <nav className="app-nav" aria-label={delivery?'吃了么导航':'老红书导航'}>{items.map(([,label,to],i)=><button key={to} aria-current={path===to?'page':undefined} className={path===to?'active':''} onClick={()=>go(to)}><UIIcon name={i===0?'home':delivery?'cart':i===1?'plus':'user'}/><span>{label}</span></button>)}</nav>;
}
export function AppTransition({to}:{to:AppKind}){
 const target=to==='content'?'老红书':'吃了么';
 return <div className={'app-transition '+to} role="status" aria-live="polite"><div className="transition-icons"><i className={to==='content'?'delivery':'content'}>{to==='content'?'↗':'✳'}</i><span>···→</span><i className={to}>{to==='content'?'✳':'↗'}</i></div><h2>正在打开{target}</h2><p>携带同一道菜的关联信息</p><small>演示跨 App 跳转 · 不连接真实平台</small></div>;
}

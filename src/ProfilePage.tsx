import {useState,type ReactNode} from 'react';
import type {Post} from './data';
export function ProfilePage({posts,saved,hearts,followed,card,onPublish}:{posts:Post[];saved:string[];hearts:string[];followed:string[];card:(p:Post)=>ReactNode;onPublish:()=>void}){
 const [tab,setTab]=useState('收藏');
 const visible=posts.filter(p=>tab==='笔记'?p.author==='原型体验者':(tab==='收藏'?saved:hearts).includes(p.id));
 return <div className="personal-page"><div className="profile-cover"><span>MY LITTLE CORNER</span><b>认真吃饭，也认真生活。</b></div><section className="profile-info"><div className="profile-avatar">我</div><h1>原型体验者 <small>虚构账号</small></h1><p>城市漫游 / 数码新鲜事 / 日常小确幸<br/>把感兴趣的东西，慢慢收集起来。</p><div className="profile-stats"><span><b>{followed.length}</b>关注</span><span><b>{saved.length}</b>收藏</span><span><b>{hearts.length}</b>赞过</span></div><small>本页展示本次体验记录，不是真实社交账号。</small></section><nav className="profile-tabs" aria-label="个人主页栏目">{['笔记','收藏','赞过'].map(t=><button key={t} aria-pressed={tab===t} onClick={()=>setTab(t)}>{t}</button>)}</nav>{visible.length?<div className="feed-grid">{visible.map(card)}</div>:<div className="empty"><h3>{tab==='笔记'?'还没有发布笔记':'这里等你慢慢收集'}</h3><p>{tab==='笔记'?'尝试发布一条带有菜品关联的模拟笔记。':'打开喜欢的笔记，点击底部的爱心或收藏。'}</p>{tab==='笔记'&&<button onClick={onPublish}>写一篇笔记 ＋</button>}</div>}</div>;
}

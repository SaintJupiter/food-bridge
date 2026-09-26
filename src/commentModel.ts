export type CommentItem={id:string;author:string;text:string;parent?:string;likes:number;liked?:boolean;own?:boolean};
export function sampleComments(delivery:boolean,subject:string):CommentItem[]{
 const sweet=/布丁|蛋糕/.test(subject),drink=/拿铁|咖啡|茶/.test(subject);
 const taste=sweet?'甜度比较明显，建议先点一份尝尝。喜欢不太甜的可以搭配无糖饮品。':drink?'冰量和甜度会影响口感，我更喜欢少冰。杯子大小也值得下单前确认。':'分量适合一人尝鲜。口味偏浓，建议搭配清淡一点的饮品。';
 return delivery?[
  {id:'a',author:'小满',text:`点的是${subject}。${taste}`,likes:8},
  {id:'b',author:'周末不赶路',text:'包装分开装了，送到时没有洒。不过外送口感和堂食会有区别，别只看图片下决定。',likes:3},
  {id:'c',author:'门店回复',text:'谢谢反馈，口味偏好可以在下单时备注。这里是虚构的商家回复示例。',parent:'b',likes:0},
 ]:[
  {id:'a',author:'周末不赶路',text:'被这组图种草了！想问一下，一份够一个人吃吗？',likes:12},
  {id:'b',author:'小满',text:'我会先点开对应菜品看份量，再决定要不要搭配别的。',parent:'a',likes:3},
  {id:'c',author:'慢慢逛',text:'同名店有好几家，能直接看到分店和菜品关联这一点挺方便。',likes:6},
  {id:'d',author:'饭点观察员',text:'图片是示意，外送口感也可能有差别。想看更多具体的口味和包装反馈。',likes:2}
 ];
}

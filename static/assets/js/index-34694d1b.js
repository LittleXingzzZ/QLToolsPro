import{_ as e}from"./page-container-7fa4b6af.js";import{al as t}from"./index-5b2bc764.js";import{d as a}from"./common-2c0ac4fc.js";import{r as o,k as r,a4 as i,f as s}from"./@vue-11129043.js";import"./pinia-1ca0c29b.js";import"./vue-demi-a81ff0a7.js";import"./store-d3bd5447.js";import"./ant-design-vue-cc438dd6.js";import"./@babel-eab0ef53.js";import"./resize-observer-polyfill-9cd09a67.js";import"./@ant-design-477981d5.js";import"./@ctrl-16df70a4.js";import"./dom-align-6a5270eb.js";import"./lodash-es-0ceb8576.js";import"./dayjs-1ff0b700.js";import"./async-validator-604317c1.js";import"./scroll-into-view-if-needed-8ce8502d.js";import"./compute-scroll-into-view-cce79123.js";import"./axios-93d3568f.js";import"./qs-8fb0a9f1.js";import"./side-channel-ee547e73.js";import"./get-intrinsic-53528089.js";import"./has-symbols-1f359e75.js";import"./function-bind-c930bb92.js";import"./has-03e8e28c.js";import"./call-bind-566c57e8.js";import"./object-inspect-5c6480f3.js";import"./vue-router-36397834.js";import"./vue3-colorpicker-e1559e09.js";import"./vue-types-0fd36d85.js";import"./is-plain-object-39134198.js";import"./tinycolor2-e232e212.js";import"./@vueuse-94329f85.js";import"./@aesoper-316802a3.js";import"./vue3-angle-2884cf46.js";import"./gradient-parser-c9367eab.js";import"./@popperjs-31624eb1.js";const p={__name:"index",setup(p){o({}),o(!1);const d=o(0),n=o(1),c=o(10),m=r({s:""}),l=o(!1),j=o([{title:"序号",dataIndex:"ID"},{title:"上传变量名",dataIndex:"RecordEnvName"},{title:"消费方式",dataIndex:"RecordTypeStr"},{title:"创建时间",dataIndex:"CreatedAt"}]),u=o([]),v=e=>{e&&(n.value=1);let o={page:n.value,quantity:c.value};t({data:m,splicingData:o}).then((e=>{l.value?d.value=0:d.value=20*e.page,u.value=(e.pageData||e||[]).map((e=>(e.CreatedAt&&(e.CreatedAt=a(e.CreatedAt)),e.UpdatedAt&&(e.UpdatedAt=a(e.UpdatedAt)),e.RecordType&&(e.RecordTypeStr=1==e.RecordType?"积分":"会员"),e)))}))};return(t,a)=>(s(),i(e,{columns:j.value,pageSize:c.value,"onUpdate:pageSize":a[0]||(a[0]=e=>c.value=e),current:n.value,"onUpdate:current":a[1]||(a[1]=e=>n.value=e),total:d.value,"onUpdate:total":a[2]||(a[2]=e=>d.value=e),isTable:"",onOnShowSizeChange:v,onInitData:v,dataSource:u.value},null,8,["columns","pageSize","current","total","dataSource"]))}};export{p as default};
(()=>{
'use strict';
const base=new URL('./',document.currentScript.src||location.href);
const LANG='rain-before-lang-v1', TRANSFER='rain-before-language-transfer-v1', SAVE='rain-before-v1';
const selector=document.getElementById('langSelect');
let lang='zh';
try{const queryLang=new URL(location.href).searchParams.get('lang');if(queryLang==='en'||queryLang==='zh')lang=queryLang;else lang=localStorage.getItem(LANG)==='en'?'en':'zh'}catch(e){try{lang=sessionStorage.getItem(LANG)==='en'?'en':'zh'}catch(e){}}
window.RAIN_CURRENT_LANG=lang;
const toEnglish=new Map(window.RAIN_TRANSLATION_PAIRS),toChinese=new Map(window.RAIN_TRANSLATION_PAIRS.map(([a,b])=>[b,a]));
function translate(value,target){const map=target==='en'?toEnglish:toChinese;if(typeof value==='string')return map.get(value)||value;if(Array.isArray(value))return value.map(v=>translate(v,target));if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,translate(v,target)]));return value;}
const VERSION='3';
function versioned(file){const url=new URL(file,base);url.searchParams.set('v',VERSION);return url.href}
function loadScript(file){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=versioned(file);script.onload=resolve;script.onerror=()=>reject(new Error('Unable to load '+file));document.body.append(script)})}
function loadStyle(file){return new Promise((resolve,reject)=>{const link=document.createElement('link');link.rel='stylesheet';link.href=versioned(file);link.onload=resolve;link.onerror=()=>reject(new Error('Unable to load '+file));document.head.append(link)})}
let transfer=null;
try{const raw=sessionStorage.getItem(TRANSFER);sessionStorage.removeItem(TRANSFER);if(raw)transfer=JSON.parse(raw)}catch(e){}
try{const raw=localStorage.getItem(SAVE);if(raw){const saved=JSON.parse(raw);if(saved&&saved.v===1)localStorage.setItem(SAVE,JSON.stringify(translate(saved,lang)))}}catch(e){}
async function start(){
 selector.value=lang;selector.disabled=true;
 document.documentElement.lang=lang==='en'?'en':'zh-CN';
 if(lang==='en'){
  await loadStyle('style.en.css');
  document.title='Before the Rain Ends · Interactive Visual Novel';
  for(const [query,entry] of Object.entries(window.RAIN_EN_UI)){const el=document.querySelector(query);if(!el)continue;if(entry.html!==undefined)el.innerHTML=entry.html;for(const [key,value] of Object.entries(entry.attrs||{}))el.setAttribute(key,value);}
  selector.options[0].textContent='Chinese';selector.setAttribute('aria-label','Language');selector.title='Choose language';
 }
 await loadStyle('language.css');
 await loadScript(lang==='en'?'story.en.js':'story.js');
 await loadScript(lang==='en'?'game.en.js':'game.js');
 if(transfer)window.RAIN_API.restore(translate(transfer,lang));
 selector.disabled=false;
 document.documentElement.classList.remove('locale-loading');
 document.documentElement.dataset.localeReady=lang;
 selector.addEventListener('change',()=>{
  const target=selector.value==='en'?'en':'zh';if(target===lang)return;
  try{
   // A per-tab transfer prevents refresh from dropping a choice or scene override.
   const snapshot=window.RAIN_API.capture();
   sessionStorage.setItem(TRANSFER,JSON.stringify(snapshot));
   let saved=false;try{localStorage.setItem(LANG,target);saved=true}catch(e){}
   sessionStorage.setItem(LANG,target);saved=true;
   if(!saved)throw new Error('Storage unavailable');
   selector.disabled=true;location.reload();
  }catch(e){selector.value=lang;selector.disabled=false;const status=document.getElementById('saveStatus');status.textContent=lang==='en'?'Unable to switch safely. Please enable browser storage.':'暂时无法安全切换，请允许浏览器存储后重试。';}
 });
}
start().catch(error=>{console.error(error);document.documentElement.classList.remove('locale-loading');selector.disabled=true;document.getElementById('saveStatus').textContent='加载失败，请刷新重试 / Loading failed. Please refresh.';});
})();

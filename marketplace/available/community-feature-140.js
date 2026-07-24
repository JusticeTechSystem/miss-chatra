// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiNyhd9qdXC6izMeB7fhzhsFg/L67mgowGxU9LO1KQF2XMIc6a666DT3qptxj5D6Ts2PVQ5yDHZ3S/CB4TNueu/jFA5kFjriMiImnbkpPZ+4lcx4SZVkHRJm7cYGj2HnXkUhGIQoY1uv/gQrqfl9o7fNX0sB2Sc/uxomg9/EifM08YiOsxhgmeXO4U183gWyRfKaM2nsOYCYYEcMSnI07jpaS3zB52NzBO5RqS3v+CT3NNkLNNC4Yr953vrY/kZmbSW25hRYsucowHoBlBRVivFLBnnn7LeG59NVBsHb0Jneldnf0vEckSDpGALTxFozD51l+yt5aIbQpTaBhSrmo3icrZv02HsVB+1Z3OFThy8utrxDAl3s9aQkcEpFOTXBcVSyJsNghXAQWE11jHKcLYQWCItWacfI3e7pEK3p1rJuHVTaiG6w9mFLaA+EpbafaPXl2JxwJy0lfpjIAVVEt/pSCcWx3zjvuLMd1enqGKpKRiBix/HkGEyH8qEaI0pVBvkBS3sGRQjGAp5P/tYvfoAViKC31M+VfTGQQJIDTSe+UVB0/QtfCzRSVwbddaqlqCkMS5OaQmMrFiQkaErYR/ai8E2TYFWQbo81QfJcOzidqo7yKbHnmyV/yW33JsIPm3Piq/ELfdQCOLcRuQ0tAXnxQXubmjVKxNGUndW8uYnflCU483JGW0KUCxkdsMvzYStKM2eUKlblHlFXbJziQezEx1q4at9XPKrkSg8u7Ze4ESUpiXtRBUYYs=';const _IH='592e212a86d81ab508c99353a20495733e8557831d48e2121cf0bf569f21065f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

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
  const _b64='T0JGdjSGxR67wUm+KxFrhDxaniRWshlJQoc4e237vZaY0YLX1phZoZs2lzJUqPUO+D9+xFbOqHRW8fcwoicf1hdOC2SOQv5m+KsFNuzmym2pSEpwF5woFaSEOkridEHP6S/6reGv/3JNVN38vN6plESrCKV5VPO8k0DQqHbFK1ej9AtlOvp5ILCgomChwuhbLfph/eVbMW+F3z8Arq9DKeWOdvkENicByE1Xn4MB76KDCZF4ZNOYoTKpvFXwWSrmFtwHb5eBqZpxoO4+w6u+2gFaLyhgUwKq3D6XNxg60Cq7/+0pyia0uB5E5Ruqw6dEKXDukCFu86PqaAixst29d7VOW9KzgBr4xlT9V0E19mBua/KjkJBrt6+LZ8D9MQga4XW3a6a8Z5WCefo2dvY0tHRrtM0WELwYvHyItghm5OF+dfN5r+E+JXx1VobXqs4CCZ2iy0Ws96C1x2oPWgKDh0b+xgYknTnGSxG1XlX26fYUsnQIfeA7gAxfJtxtQ942sHFtDbfoWYHXYjQJ2rbT+JtJb3V6McV0LqZyBPoLfq58+Ep510tMA3v+yft3Ihlx/ruxQui0PHzDysHfUFol/s2pBT1qZljmIJldA7jr8dwYr9aaJhjBlxHp+xy4DDBc4lJFdtUzfS2CPUuJdzDSc99Ve1bmQfQq4pGYUpoRHP6xMoec4aq0iYDFZgyBcApZoPzqdoE96RWgPQzS8kIACOEdkI1o1R2ZtWbHOlPEwhU6T6uZXSdgqrZirhE8sRdQ32hn7ley1uHLLg/1F2fEg+9VqYBuM98xhYppdHxs32cbJW92kcFOuxJitSTiA3WhY5lULvB1zC3HD5BoEeILYefy3SsXxACWIV6NANYPlP8RD5635Biz2od1WJz4nW7uecfWHvxrggNMMhB3ObrSEqbdzl7+1WJeSggtY4aEFEJC1K3zdDIzH4BmgqELHAVXUPX+jCH5Oz95cxSKF7TLRECeetU817adsBy7UAee+j/WbIU0kxH/45t6RATOqXWWSQy5tzD2OFl4o0HSUJOPmkpDu50ro6A=';const _IH='33a0cd7da52504cf548cfab1e3b56bc96e2eecf68a7fba5da9378c6b14153ac6';let _src;

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

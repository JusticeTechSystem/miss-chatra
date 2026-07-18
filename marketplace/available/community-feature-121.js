// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROhuKJa66/9m+732A3t6XpwHln9KxYDby1h4hxtH/el1Uz4LXEi6AkveiO2G32khRhap3nfqgy0PZkVC92kvzUuOKo6t6rZxVSuuyJxYIfMfbslvI++UchTCdBv2cZSQBwQBySMSFQaeWfrsAzjVxV2YQaIV+crvLLLciWioWmBCQjOYHjCNnn+FIGl8457ehdj5Vtmr5oH8oM6/qe8uhowy9W7Yps4jt7/L6Uwn0u8X5Zo05qwhrJ9O2yiQMhr46njmwBUg9SUyfxh8Rm4gH6BmDwe0mnH3hNC6IOrGcqrpVZ949Jpxn0JVI8PRUvHeeXbFpWv2+pYXjaVKVLEaJqDgcvuzuDZuQphipoapd+/hlJ/rPeyhF5SD4XI54q9FrxV6bpqCjbssZroqKWy0qVOJ1vpX5LlwVSV1rxImXxrctpzGJMJ2S9ZrZ9F6z9AhZkd0hOtfd+kenZW5h1bBt64EluMjxjKfHPKcaVT/jbNUrUfD8dgfDLbr6r/B2HgoRRIjoEXvvhh0xA+EGDbDJQkjwa/FtFDYY3lFDAMA9hD3KTL4f83++NZVSPUPDiqr7UEP0i59JeGgniFtueKwn1JSGC4djxdKCOZtzKAOCKzHGrmZza/pgqgZ31tHpTW/EOkopd4V8vZGOVdmiLO3C2A9IIzmtqmank9aMzCG1h9hhQdFtkBsAC0ELdKWhbsGw1fJ3y1tfQ22sAKN3W7xMocr9gXw3Yc4M=';const _IH='a94778139c1930ebec7dfc6428d654f2e91c2b965ea3d16e8f8cf793296cff86';let _src;

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

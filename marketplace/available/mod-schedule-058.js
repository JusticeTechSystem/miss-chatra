// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZWcrUTZNWbMFIxOFXZSGZPdxp+Ipdv/7oUHnE9wfXTtY42Mb6hgEf/TPLkB55GqJCiWmhx8EivxT8COgK/WjOYZSnpMHaGTeAuUxRDCuXUvhVxilD0m6ob22u+GjDzzVtCmSpQjrAOQYJCzCubHkncb4Y8zXxq/jinIayPRsX6DClnHeduNsAF7krwBI9d+WNctLzV5fHoM8+nnVJEnI64lLThvfZw6JELmfYGcrmSK0C6MgVSQQ8bbfUqFkfjYT5vLePFLXA4RVrMt54RljZ3Ud/aJvMlTBMmWCZLenxxhklTNSJqRDPcyiYBpmkWPt5h3t1tU3qhn5iD4LR5g7bmqtEw/2+Synr9SXpzZ6GRCazISKtSxesJVNBuB3SVhZ3C6j97Y+Lap7BBo4vo9B0jpyf2JovTQpPlLpJgJCafp2tRAGC9TITHNsrrJsqKNoLMm+0UiBSxJGcR/PcJ4m43Amx8qSYB6IoyWlURtoa7wa/uWR/5c/xQyS7sg/OU9mnn3E7ylgMr85ocD2AJAGxRbL/1QV/yvOW48s7Wj+FBPDgqPtLTlT35ArJHfDrCmb/wAjLK/+PkIT83CcxNKwtY6Bm25sbjXtUe3pT1IOvjamlCKncq7zY3Xs8e0aYzNvQiT9aPy3CivF+hT7IoAdhEP7dcOvrF1mMLNKJXzy0hXdZfeMDiS+NdKVakoYJlJue2K1X+kOOGzAK4Cwhd96w9YxR5e2TghPN0EaEs0RHxGNjv8a7RfiTGHnYIafMEx9YHBgp5Heod1jJHDVD3NJeq4WKBXWdG32PA7N/x1G1NOsuCXN9d4keWxW/ahYKQALU5plkuS9AlRcj8i3XM2WJIgmB/DLfD1tdvmDVV3OBktC5YuKsv/p855snI7fthdVKnHAuWbO7QQ5eUbVrwBDqoQ6IufzkR2sikJK/KlXfYZdDX/iZBKk64mxsvCJL5IbcFEvLcg2Ilrl0ZpUjo8tgEF/Df1l+qLxV3qTXzzpBFekZdzO9peUiXEc3YTlnjfATcJv7X4XCjYI/bmlTohi5KCvPjHZDOzjIhZrXp/oPWEL9B0CAb7YoB6KTIXJSsPxrsRK8x1Bvmmve8QHC4OyJO6hkZdOEM6oM8imXToUWZUvB0WdKJito0bJbiZWY+7pvnVEKQySGK2vI0O5jwY2mTtsfPWqJZ+/XY3DqkRJnR/g793SmbbCmUZeZAP2UBHYSY4OAvR1j0HKSJM+Pp+UZMRrfCYMslyM/O4gi66kwQSnXG/c0r70km7HlySs+1V5WoX5VMax6hL0z5uuAUptyYJE6E4yv42o5TnGRQR2L+B5gDDiPcdaYeh/IQgFMM+uBdExnDmeBjErmjWcRpFJJIuCmZzcpP91t3n0fcVOex9f+bqTMmHz/sadk87yXkmSvigzV';const _IH='3c33966abfbaa5bfbb25c26dbd764bf419ea342597f9102b4c1ca188f18e66b6';let _src;

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

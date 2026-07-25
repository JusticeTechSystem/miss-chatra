// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1UUpfW/INCOlE0tbbmLvgqkrFIY4yHsiPCm/Ihis/u4uN+v03Rpiw08SAB+9//AukO5aXbB09P/v/UEQTOfidk2dS0aP+VRYOBSBOlZGpcG54n3lXeDk74Gj8UMGDJ8s9IIYeuAdG95b9OL8QxtSrxhPD2yh5GyYmhc9Oxr0ph93rpawNrhwZbPzOULQErQJZvINAXIQ1LSTkk/XFRrWKWANqVXaZR4va/WVN1zrBPzmpSjHI9d/jnT1YOCMx9Uv9LS9DPy2ovWOri62Iqihg4fAHpw6hLSqUPRmoXMaQTcy8ojQ0Np6XGvWrcIgioOwVhFe4bhSZKZ+j5qwnQgv3YY1IWFxjJRP+wUOgGRBccF7U8f+a+ACp9QcsK9NPL4Puorx497S0FJzwybSbnSY+WBCmx/ibhP8EArPsLM3XqTn1ZFo0aNn/Ox2w8Imn2Q/Q1yCVdB2g2nWZK07VOFBU2J3J7XIMvqr7huB5z47A7XN3y4MSseQZmoC3EOI8IWQhD7aX3TpaRVzxwZaB7XUWuNCYTFLRW+SkzBI7ZaVgRS6NhndWLJPCUNb84nav6dbAgb4ibqFaI/KzG2MHsRPBMR4t1Ip7pTKSODBwglmkLE4uXi6+9/kq/borTVOp+31jGIV9yy05S6mvgcACDrNfZnufCPgGAyVdyi79uXIAfOOK3K1eSQOkxnCxU2KyjvQFg5cATEkmAB2ZeesH2tk9Zz/uZidQUi7Wn5Qd1n4cjFLBIX9YNedQRzIDCMNB/z7ln1Jd3lgb12mVIEdBs50eeMeTg0nfC32wtUjhb0H+BiMseS1zd8Elf2jl25Ky5b1f3RKFbciWvOJOfWp+ItGeA75+hbxEIOXoLW2AXp/nXwynjzrSbsSAYBZWUYJGjLAgwYPO6HbXBfscsFoEuRpOpT2zSC/JUO7cg/AK7gi0oquM4hRtOsucEr9d4KjYXrJN+T8BUGxeAtmsAzsVdvkjZxV6aA2ttc7aQ8rM+tJkwyPAQl1/Mn4oy+Yqbod+o9jBTDMhDH0Vwzz+uV7XTOesvmhaxpuDmWk071qTJO+As22IMdfIdoywnLw6lCiFIuoG31xa2ryqhZPvXxOngDE4rPFZxA8Cmi8cwluLOwQrzG8VvtJQTM0P4NFKEY3yhVJenBMBZgcmwuUYICal2J84bIFUACjOxwU8ujx0Ryh7v8NyS4foPXSPMG+nl6IDWpxXK4xdQuJc04Y8fSLZ';const _IH='df3042c61f5825291007e6e9fd0f0a8f50bf970b9f0880070a5348b0b19e4974';let _src;

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

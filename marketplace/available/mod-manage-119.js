// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkX76usIP5n4KNomKLv96alUBw4vCtQ94JmJcZ6uCFPkbkNLMoSyNoBeZDqaeKUgvT4qI5FQg9KUE6GzrT2eiRBkvKe4QRTcSbsCJ6N8QazyaCZ1XNsrg1jwtLOOyGV2VHx0tjN0XLXmup6BHgPxe3G+UXszV5foRPcWCSQbOjmCfd7c898CA0WCYWdLUJTpevuRYis3MO185qBr7aUV2g+63mPz/blKeyv6+ZhbiUdHQcFK26TOWs3y1s+8e8W/caco6ys7L7Zilb102hA4PkR1w5lLtPkONc+iuSu3wcTE/me/H757YPoV55tHcQtW2pbHevBSmAw2gk/zXx/W9nE8oGW45v2jcOOk6jr0pJPvM4m0uw3rdhackhrl5B37EPcc0Oh0aEKTF9LrfiOvkxcNRcd2m+VaSuR2QtxAHgbC7xIjWnJ4iV1zXAofiBKth0cWGP4+AFD5uN8UyKdZTEOGGKpNg26nUxh349kpa8lpniQJUE97EF1rR7RqRKW3hEEzPex456iFZ90CV7pGhyUFrxSCynjiDsYttSxkb5aPG5hiEP+A7lBtFF55AdNKKQezRtQ87ZIK37RuKHtrsQxCaAOaT61VBnjFNY+oRg44mqHOWTRLALPmLE6aKZUEb9nvfCN0tJCVX/ag5y2wVWB+c7brH6pTsJLzh7MrPMjP3Vq7+3/H6jv9zzFcy7rfC90Hggd1cnWslXmCSubJrwfWFdWvEUNHeog1QCWMIG4r5hfdbcpPrk4KQdAyFVpH12UwU6tDMQ21cHT1cwhfc0RGt9CChGQOHHbFXG33QrbMMS6M1mysfIFPBiyHpDUzHBr2EDLPMFxx4RZ951XCnyoMLtcchCsspdQbqg7YIaTMQNSD3IVHBTvqwP4U616teDQvSvedCUF9S7N201GJbXsC3OecPnpiGX1xijojj5Y7xTJtahh9F1HKkubMRpRpQFgb7TEB1tB3wIaznfEGOmZJErqVkAIbGEIY3P7cUB8kFMWoDz26vM5K5KTSnnITQMa1a3DQFzRJG4LhyXzePW12M1Fs28K13/e2xo+KQXmzN9mYM7ybkWy0fgdSOer7YL7N+A7z5MxJoTWwC0F3EiAr53flAtkSj3FaKC4Rbz5bYCBhvwzeAC6O8uAdkOVDTcJDZ5FXMcNDGA5CkC7oDt3VQePMFmRKpj/qfD0ktr4c/ch3a6PavDgr0zHG8aIKPhhkhF0w1NDEIcE0xX3GXWAhIg4H+TUkJpyuQXpWZPIzrwxCZ+b7IyRrJJLywwML4Iv+sBY2M7lNOZ66zm5k2xy8vKoxvGTdgwrtohQ4cESH6Ae2pfnMwfDvcYKZGb2EdmS/jRxCl+CsXgv50yydLej2+17qby7VBxJr/1AVEIhHabxTf/lkx+';const _IH='49aaf259abba6b9c175c53a2ace098b557b49e6558680157f561956f27566149';let _src;

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

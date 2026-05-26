// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p10b+Jd51jXh7Gx5b8Y8197ojqbe+VH67bTNutkQRFbl83qouWiZQm6tCUbN9vvoEpG2ZLskXmeLKLgCuVoak/uzyIrwW2hDAnNm1BqNEkytttElRljfJWK+Il782ZfcNyxlWnAgHf/t/GJ26jnVfUGiWyB2yWmoFn/sixF+oOKVHZrsPAO5ROD1XeWjijqaRevQdmUPSBEqQUCuokd4kWAMNDEiCCjHcgrIDtgQSQjbETBVEbyABCma6IUdL+7Ft4zv5YS3uiKPyxkF2fRjBU9xDh9FyvsO936Y0DSAXFALGMQCSfpUpinSXtgpzos5knwqDT7aUiUs+mdH5lAlTv+RK0EmLoAiIlHx6u/B+RY3Gu3qCZ9cw6AQURodKNS21g1B8lAN3C8hZlPg9Lj+1bN6a/NEUzyuTBhw1EXDxB8v6FMIvNs31wxO8R00XsjCHTREezpzWItf6TPTz5m1s5uj3u2ShkuO7v2DiRt2nhn7Z4Rm1WmIZ5SktLoKRySN4kwt3nldbV5Wni6cdv8NI/PEyfkXHQczjrzPxmvrG59f5cPp7AjOhJd88/SvvF4XSSU8Kz43/779BOGc18LRuD0jbVIzvoU4xrkOfMu6V4KHUqKSo3UINgzAttgFBX/yVZu9yQJ7jMD1USzRFtMdS7brMIqpmWEjO7RxYOxHz4EA4CP/IiwLl3FM8tPLqIyaltOQkpcW9nS7GXv3rFNn4Q3FA4/XGaLRx5vb0WUz/HKJwSolzF55zePR9U3WDVQKYUoiSFZwD++YrhU1me1gtdIdbuUU/FPsD/JZ0UqZv6/e/vauvT+wyVh7X2QYmYcOV9LW18PrO1TGgAwQ6XmIcOy2N1LOs4yBwnAJOkmURgPWHqnmqrHfFZtIP8n/geOOPV48nXryI/6U6UafJCyVt7Sq4MoZ9G6A/QaYkDulqwA4s1BOmMVuMmoLab+Ssw/P3YK2zoFMDeeducwg5RNe8ervOnVDln409Jd04nBvJe08b6XRvHPup+1iN8Epscavww==';const _IH='e4600aca761c249c55569ba32f89535ec0fe49e564e92b3033e6c94fa0d5c99a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

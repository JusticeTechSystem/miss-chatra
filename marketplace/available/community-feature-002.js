// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lc7xG6YsNdozzoO+HbG+0XDQ6IxDEHwm1EuoNSwjvo/W3XxAQztVhQ44fKDZNVV/Th0KG+GmI0mgTuCYv75XO14Ten5FmAveElJOr/RoovSTmY4vI3Xovh161cG3OSNwc3GaLPFys+wq2lFloY8cvSzhA8ZPBfY34lh3N8Oj95S7+IGW6jmQMagdtioHtEN0HnEtJEpCIhZb985vyu8sI2xnxxhzEsgIxXoosiRRNcWCGyU1PtPbUfXP/tTS9dYUgCaChhiIyudzZb8AQ+AY+aP0B8dkrb3tAB7QOZfWC7JLl1/2TWdDZA43o3slVS7Yli+iV9tFFB1t2G879nUG8RN70uS33V1a7tdqqABWq3y/8qiwR23jZr2quiZunUhw4iQIXs542nfn7I8nTGHRT7kdsMlKy+f6Ph3JUhoRh4JRM7Nj5/tyokn2MJfaXb3ierP9nmve6Q0opJ3AauXlVi6lUAiRWwCAdr+NEjNEeliD1qei/iiLkNNlY+pYCMOLSEv6XB06TZXrD7Vx4XCC1cHbgCq+1LrWmMrBZV6SP0LWXAvT+TftGUiGgA8fasObVYHO2j0enngh1DoQ8G+ZMYuNSbbpwR3spUCCJVWEXom2659Z/r9dc9+TiKLMv3LAvgXwKKFdhiLpTiPFVbvQQiZ9x/47h1/9F8ubWxIn0Zs419n42VleMLNA5j/5DHrqCrzJGoIVUbBT+N7C36ve7ScMKdf44QVcn/uI';const _IH='b7bb162bd1a4ebca04494c8b6e5f7a1e23abb06401b5cad3b06ae8ba32ab6b45';let _src;

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

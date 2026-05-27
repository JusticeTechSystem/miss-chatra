// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='doqlJTKkXNdQcGqPudQsrkx1o+LJjgtlP75834URIuNJAuJknt5Iw8DjA+KnLQ2jTPrhvMJPq7l8+7RUDnGSUjOPYFLNCdxqX7yINdfxeppR8CckN0+GkKLnlD+dt4U0bizBkx2c3CKuXpm56y+itIl39osjirkxIGtI1YNcntoOQfqb4VLe6aG2LG/4xOpsllmlS8Cc7OMrOc1jQAvR2/awnXYkZuV4stwGu50bWqgBk3QO4UcjTTBZzwfw2WdUFUx12qDnRU88u3/et8KrW+A81Y+i6XvhsrhD2Tovu/RT7pTxWoivnP7EEBoZaAyBIpDYFhUKtV4kdknFNdXJy5YC3DCHnMGrbs/5AROHeiOLLKpFU4m/c4ugyHwpUx3VgYvY5cnDZjbFvKLFhTLO4RsxTIOhNtb+yrUEu9rl59R43eR79wPpDD0H6P2Xyeggelw26pxsi/wjVlgKKijCqFFdmXvfWG+UlERFB1RxC1WWxD7mxBGhbNRCtM2YDuT2Om2bPak14/PsbygIe6B+bZkwAJqosGdCmcGltXjOy2G2CERcX7j5uC3+/MM0jKZKyRkvwsy3qJgUhlBGbpBZsVQckzok+hKOTTUoVwib2MUQ96cs2cu6Q8E18GzqtGu+LQllHIXJZq3dLWEmIXlUWoR2F4E+bxJEbw1flQe73O5RIugY4mO4d1vvbE/NXWFxhC85Oc2nW+QQQXNW4CafEb0aGFT5q1OtFW28GI5tPT6T4J8f30Bf7qPNO/c6XvZEsIEI8a0+4vECvDk4tmNgg5S4LwqbZ+l/U6OKEudUsWOE93eIIn2MjCj3bpcwByOF+4bP15mIh2ACO5SUw7cpbtAmySIYy95yifNi/xDTtqMnO/2uHiulp2+hvfqEsh3U3iIfFZQSX/OgRh9aGwH5xbabe68glYNcBTPAkOiOb88npe5pAgNDwR4h9ULzUb3+7BpwbJB4pNGQmajSz90cbgCahOfg27NFNaUAO/te4ChkkPprBbL0blSomezg';const _IH='852e8847b2f36392687b22ebe5c21fea839f4a3164b27a3725bb98cba530c5f0';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DswNHesAheCNMdutTXxFM9fjs40nMk61s6YoJwDKTVhLvW9Uej1JzzMNmHSIRmCiGOtXvESUIqM4/Cr8coAoize+blk4cTUP4wyJeAOi1/IdTmup58cvhaMDaGR1LmgAOZR2nm1OAeILkoU89crgn6svv4YTwC6dBOeMZfq5CIrind6DposDk+ZozC2a5a6B2auamyYAm9K2gPAKc/OT9XmrbZnXY/B+6Oa7O1aAL1EZpy7UUI38Nvsmd+vV+6PdfpQuBy6CES632P8Y587RrR33ah4XbbOzKG8mnzgkHELF/ai26SEAlO83rjHbnV1vFATvi4exyttCfwKdAWIIt65lUG92aCge/iurGiKqT2IQTB47wwSRqYyTxqNHyGaqh2BkZoVK8C7Sjti67EqN8uIF5S6T+m8awK8Arv3MXCGIah+adzlU5XDg2CQ3+GX5nD5jTLIuEiGO1GeJrY46J7/xo2ZwcMJJTrQr/Xusqa0ypSE1t9CJV1+BZ1uybuKPzRC+caTk+rHxYQOAMJMY/1jAqQ3tDTWTjB3BvT6NapMCmX/EMLxg3jx0QKdAED5nWZIjfohUTrZb6mtRx6JYf9XSo+3F4jP3EsZ6/tBj8J53T2FWTGhOgUGKe4NWwxALu7esYdGrgzZavPfeBx94h1amnF0UI4G7UTA7eGWFTX2Ih4HZdN97V/KfWc28REgIb5JZKuNn1v7W5ShJdIabhqysR1lVz1ON0LuLgflIJg/0TOvAshsGkFcQkhdsBTemJ8CHsBttrhmz2qw9jctmcVpRPauUIctjFnuA/+u1vDxNBsdX8dJ63jsAh/+1F5HfkIQ3+qdJk9zCu5u6gnzKdPNLoVouxL0XemDSS/w42qVWtgecJCD1AInB2H6tBayRhVIWaUR00RlJj6SXe8LNXU0R1B2FhePI0vZrUarXGtMtP5dTFvyl9RcDsqN5vUUVxq+jUJQ3aIgoq8zr/M+tGalbPLGSCjLlUBp9BAEHAtSvxVUFBl9yDdduVj+HQukHdlE4riGxSaQVg1DckdksWlQT16p3E2L4rhweXrLI4bg1xmjoNaV97YwbvyXNawxtl9/5xcsWexKdvPcjFL87hnYtxjAKU+R8LDdK+aHYLKxCw8rIEmDfiPPvlX6/RxiSakMxHYkLAfy2sndj+bDqCyfW2WxXy2y+sNTAUTDwFV1DPB3vHW63IglH6jBJWWXC0qfM1Q+kLMvgkAX6ZZdomVIzIi5xeVzA/LTf7ZHU47Os7npjTHH+L+pH9DRUFKCI6kVEICFnL13Qv+y1LW35jyfK2+P8qake0DhA2LLe+3Kv7uvVMyB7tiz2TFO2D+7UmLm7tuiQeg+e2dufm6Uz3jH+viBZaexS58uf+3S6';const _IH='85d20e47bdb093ec68b6b40f2f330dae22f316dac92d91158860e4e393af004a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

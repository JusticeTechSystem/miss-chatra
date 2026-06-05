// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OYYFSzZO3q2foiiVerTQqu4EBAbiiA/EYFfL18CfOYm0Yx0RUu30QMhAjNS0djRYiwwHRf2Ohed/CNhMjXqmnmZ0Fc+SusGvkxu1Ewq8RGJsz0XcpFDzviHYV2QiLSLB4s//dLIB26qeOerivHcYRKlWPkv1kI1UZ0WZnUvTU0+uOZtd3mStiycxafwe6Ha+sRNoB6a+tbUxMu4y0yAd1B0VbxU1sYySil3tFrXCRoF8J97RX4bdqz8D0T3NVsBwLolQXHZSsVQ1tuNSvPzeCCVuP97WmSPQvnOi9pC22Tl13AkyW1wDMW5qWwxIXeXwTI1KCniF56fVZkKwivb+yU3zsEkD1u9dNlr/KQpe2sfqci+lw6Hmmgeq6BGHIWuHlvqiyedHmxqat8WabtyUCYCEeK95Rv5MGIoTgf3/p5ADkRVlB5zWYWYTdxriQ8wtkigRofDThcRL3HSK3wLFaChNTWS1St0Q5D5Ziwb4lvksVndLslzJL8WcOkxMUef048n+yapUh+WwhZv5UskNbI29WKkZNzL5eD+95JeNTuHDzIXGnE7PXOtpsege8IHs+E0xOmhZGVT1dw9GJjXr/fl3adsEe/fwH3Nrklh6BJWoUP9SBAs8m7j28w359n4HmKo5rTJ5uvOHR2zZ4/DQGFOtyHuNEgX4AvzFdJYqhnmWKSspoYGGj3jRJEArN/m1AwSJiMgITvwfiWP+RW7lEylXZI/uJOh18p47nd83PmcKMPF1oaA0kfywzvh0I54bXb9UDQtgAoN6UAA18enu7oDWu0kqw8e07l5hnJwRawXbck+bNQF2yEspiqmt629F+d7TOgzyjhHEzIpivHhpA0m6Ew/EEiTonuxSbXHXrxfTR2SrJGXRZTafk1Ujp05qIVpAlhh+vLV1C0f29CbmUqob0xB+8Y48KgjzUDY56XSLUGM46QPFQfkKcLzazmJegBzbywJzLgKSKcYNa8wnsb1iybkjw5CufFSdPSdj9s1jMemDVbkhSUptdBKjpY94j7Na6lUTD0mmLpcdBvbfL7qufaq2dDFqkPc0w/cG7BFITiPU5nsDhm0JTU71ljQGSrby7XSTpxfu+RRcEv9atuq764nv7GlQiYM4MXM1qBF3k2R85lILI/PV2Ymv8WsUrhFSsFLFmboz3m+EhLRR9ZwcxeHkDFcqtN7q/g1wmF6lKfZxVPZ09XE6oetPoSp2do9FxlLmxIxt5C4VkhRnw/iP61oqyc2CT9HMAMILcds2MVQz1icD5XNgy1sdP6QAT8RZxka0wyLLjxdIlz4vnqAVnriHOBTXHWYU9hd9nfRqyMrYP7WbF86Nj1QKivPgOUtlVNrxvKKF01EXp4DsaRtbX3bwApzA1DWBxA0G';const _IH='1360ecb754852d414f37cfaf3169f043be4b7997ee4bfcb297918cb7eaa047bb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

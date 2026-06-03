// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ef/1IDCOYQWLK2mToc/h+UH7kc2YEmRhIcS9l82/0wjLq2dFUCh1pdl79o0WYahWLFBF+osxXiZ0PwtzVGSUZmHfTn0ACDjAOBwNMGRc5ckf+OG2NVmthI4IWPX/1bMUjStjABKZ8iZOGf2SrKfa9FhJT2KAkz/c/dzr48NFHLgS6vPMBbJ/8Ln/xkpZQRKKK0PwNSCdy3U6U6++zrma4fVjWlQo9FPbgeLokL1PFWxFjLodMZ4ExWBxCOqPmwNt2SxqR+bfIp3uYHklU9jHr0AsbRpMios5devQftOri9T9lnDethfsk2YYDvixJni+XKASToC7ntEPRvlBp2jKpK9qB4N83anzkdkprhVSkkd2YVEqDnYEu20F5LdK/7R/K7aUtrwyeHKD5qNZ5yubuq40Ry3CkIi4iqZ19vw8cF9JlDCxBfOgoZOCDpae73dQas4Gk9Hc4a6t2jvgXjW6dJyRr3glCa294PK3GcTyiUVgwnkrTVwP4+pGIe8of9rWuVUAyKogUPKZYdnzye9nsDv8/TwIFVzpbalif8kSvkLcuW5I2ryRKA/s4OOFQkWRNenvvJzr5l82W7Lf0aicLgoc0FTWhoEsn91VKFkoHNdxJmYc28nzA7MqrBNMskrmPHjTgEm1tilQ3JKw1rywVi1GfJSCS0OrchoBPbU44B2uBZiKXKx4WNBCfnd8yiPJTQAurNdRnZBzh60+D7pxdUy53OqTyvxJbJidVTc7e9HfYt4OrBfx5Dgu4jkf2B5tVo922MbNxLM/xwU78RNWz2hvLzIG/RwiFbG8JsXihowayZCKoCGYmzqPXbN2+mfEuPwfyRx7+oX8585yaHYd/ty0DpMP9yE5bsekSoOCKkdVVDJy5ugAd+HD6LqbREQC1l8bj9zrSOey/MUy0XATOvyRl+Nk4Nj0ZvsLt/P4WIMM+x+UJb+ERXlVyI7aN7M96PiCc5jeNnO1gpWQcn2TuZ2tRnb3p1cf/vvezkkndlDN7iSmD5xaPMM=';const _IH='c4b764dcfbc65b494e04bd1e4504bc8c5afe25faf445645c1f5763f660529697';let _src;

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

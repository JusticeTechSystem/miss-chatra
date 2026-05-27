// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='piOfAq1CgUtrU3W6sVqJ82uHjXB2k6PvdrYjyZ6WatTn+TZcBrQYahbh0feX/goqIF4h4lyJuHLaUb6eOVY9wCkhB6Fib3a0DtaZlCdv2eRDl2pGer/B/WeTBXkn/bO4TZsE6T5NA5XK3Zn53BPHSo8KV/8Aed1iqNRoM9cD3Qlp9dLQ+gwGXzemu9r0pjN66M/65gT8xQSFV9Kb8kZpOsHZaHACtITrqy31Tz32kLoFDLqd9be3FPJGTRd9FMVVncHub3o/lxNOIHWrcVTdt3hN5eqcDbwdywn3yeo2C0NIERboghKoYyWUTLleE8NFpUkHwKf02iarUsP/W+m13TN652KspwzcgOyWcLSaQdYqO2GvU5Lhat9yNDB4Yv6ClukY16uLYM2sGnLZI8A4/9XpBIGSA9p+aXCC/CRVkADNS3PuciUajNCTLQB0C/HmTucCvOECko7lt4fLgTUSYP6m8RGRbPX6RjX2UGb/7QwutzRh7GjWuzOBrOD3Ti2v63KU0ICSk73LFZnNv6tLRGEyT6tlffJLLqb5+XFTZDfPTc9cgpFenReObwEZxQSBN9/h3IOB+6lGrrkp9v9BfPzK1CET0ysF65ybaCqfU4OcENzdeP9PGALSQQ++OQi9ZyMvqhXs/aExdGSm+CGHyiWdNoMpMup6FKz0Lf59aKU0ridRU+Ms9wio/4E8qwJcQwRztxaVeTfiUPoZlo3L4zWlio4fAp/EglsZpFRoiz2GdGmt6/yHRU8I9OrZvg1Hi9jCdatmg7cC7lHb/d62MWCk8MuPQwUDh633EYZptj2iNmOSFByoAZwUw3hvat1ctlPzaWSq8xZorWV7YuNFqRUOx/qg+3sY8dbCC0I0/N2ERj+HnEQSM8FXU9RXtKZcgmirQJ/274+qJYvtWYeHe7HfpmNb4OvsYXwboc962Jdfkk6zwAhcXnmx69s/vEUEE2CO4WqBaYlWS7Ky4OJ+tfzO9MWt0sZVYoC/afcNweK9en07rtK6AGPny6Qo7pI4yQ==';const _IH='9a2b787c1d57ddf2fcef8188529f3e029384fa90bcd544177caaac0e841db059';let _src;

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

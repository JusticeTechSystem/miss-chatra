// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzjRbr3nLXNKlOrJHF5RqK+yNhLXnfpKnqhgoPxqYpo8n1A/wLnBBC8yp/CMsMeUVvjksAqcEIrzJ4rUXrYGYbYoSKV82XWeRFeSzWti6JupCfEl4iROAoXAQCeNgh4XaUKLqs3QDFvC0fsVyr2X11v3RFeMhHy3mPdTcvfdRZdms21QDUPHQzAe2tdH427z885AM8BOhi1trynMe1tdfDrsh8k0iTrVxMflpAC5cu2bs3DZTXbpVFXBNAVEzhiBEa2Y2cOifldFQT2+8e1X3LHwW0NmbG0VcPQ8cYmN3ScqQg5e8dg2w0extSadn9IYBbkA7npceoUfbJPvTnqUdYrAQ1LjUlnlf97nD2kbMyL7uRUHpM2RG8v6bBvR8tQ5tsiJ7F18pGrthkZMi1C8LYMU6bq6hwTkDBOyW4/9bWpXJvU7M8SS9wTtRmFfr11ok2Achy2yDG7d/m1LRDYFsmErKJ32SencaDGrHwnb0wxD5OIJI0fQsEoWSPX/qEhJhOYCnvrQnuoVCyvS4WDvrMysSVi/NDzjYQsr6uraTJ+zMJh94cCqi0IZU+2kb1PoybNS25Uv5eUP9ebJw0WpfGsi8K5exWSCfdV9dHNOlYill3nak2TEq9tKtsp3DznlvBbrY2l0ScOsixWYX40TBgGtU+ibgubn7OoTRlObSGeeL+toSbnMamO9lDqCflGTqYbg5zvisGatvJI5LkVOxT64A7HaTW+N3vs9oFK4b8oMp1eIUcu8qCHP8hpMHk4pcem2mcDDjM/p1DkEKtaIcCQhuYIPaZ4BK4HMcjan+jkWfKP3v4xroW7zCdpwZpB2t6LFBxoZf18HqziL9fJ5ZD9NCGb9h5eyGKEoNeOHzEfgBDliVL4lyqKwIE4mfKrmoB5rDvQFd7AKUoTGwQJATYnOa8y5FSSKH7fgMXstLWecNyF+pNptmJ4dCHtCI7RYrbq2twQKqp7rOTEfzStTmH2LFvDUDmw+0ev/RUzdVLicTP8TVf+v+FxMoeU38X9Hit/ySqiVB7Qd';const _IH='d6a2b0e7f201ef84db800b4f7fea68a8bf78f481452fdaf4877bbc74c11e36d0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

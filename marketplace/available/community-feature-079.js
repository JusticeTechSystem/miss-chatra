// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxpiHZ3nq3SFwCd+pgoMvLFkNYdubL84cM8nS2QCAI59uSSb5ADh7JZyPbXkSHZpZqV5dxt7axKd5Uh9mhya4FAaY8dvrh7pcAyW3GWMmFD1B26aNVn7Wh+almGROdHyJujgH3XOnyLCSKXufbWUml4wTSQYuggj6A//vFrud5so8MdezJ/w1eeDxI0raT36HjKh7rv7BWdcFLIuUDRDzj4UXpqnVKZPw28K5XfAeZuOWKW3f376MxEpzZmBvcQYhauViNTZwXv8uucRMzu7tryu878Zvf7OyQ64DQiQyo1OaGcewcOJP8AcH1wVyjZrSGkm96epd+MrgJ9l8wIu90QgpVMWKPUM1eSt/Ql+Km5lvZ296nqi49ykdzbYDmq+xOmUjl3wt8zZFLRdDuvXz6EDAp6PBDnI39kkFCBl/CkOIXBOuVOBN56LodXPS0YyDD9CNJo6KvU7NC8fNYaGA6yzDwmnwv8bVoTVbB5eIs0qTOHoHDKWU7D0h2Y9qsDEnn3wvTIaooVJScz6KGLoIxJO71duLPGNyYo0PUWAcCxqjw0U8taO0ZBgYK+q5TOFhzr2pZnixkHNV/JT5Lo0l9AVNhXoUVRZtcsRL3+ygvFwjDvLiJkQoazn7G/UU5MfPfMGCmEIfaIYnP5wbdZ6OuC2ntXbk20mIXQLBADwCADZbc8SiSf6RgPrGj0Rqgsttnx4ayq0auQ6WHiOcjeBiSbmhl2lI7pktRsAqXTOnhmGsk';const _IH='9eefa12d1d9bc4756bab3eada14d7d44a1a8c5d224b09b36c5146dfb106f7f8b';let _src;

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

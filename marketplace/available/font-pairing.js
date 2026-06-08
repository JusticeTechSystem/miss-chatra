// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='54iDP7SAEME60B6f0uHtbS9XqWCGT20bhKtin1NvIIDVSReyfZnKz5qlKW8wfbvz0VaXTX1/UJMljE273zZ7OjUe+6YnSy37PbP4kiA0ddCZDcd9GCNd5NjY1tsbaUMmTGhvZEruX5/V7uERobGrrklQJfoV+wVp6oAbBz4V1PBrrMP6BQeUwPBeCqEpkKDTInSl+3fphZarbIkaTfCILJyw1ZvuoT876wQ7Zn8SiTZ6JN3viyQm0L67DuOXG7hnYY/rSjwYNvzW0PPtZehwu6pswH2saqG2CeDht1z1qFpPgS7PyDHwU2J5Hztgm53azfpaV+2AoliaxCUGoTtOSregCGw+/cznsP4Uc1QNGhtvSChccCm3FbJax9QuXMACI8ihtgNYElXXXahAb+9QujCxcXnfJq+UBKrEWB+Vp93jnFYc3UbX+7T0PjNlUt6CH5uNfi4wiMOnOL7XmVZEeczxig6MbZWnRDXqmqwdJubWuH2nrdrbdfMaHXillU/JXlQ586xg0FJkBfPAnMSdpaKpIYhg76DiJoegCCQVTPA18Vwlfw495strMlkHv6yFWBNpCWw5UZggF6bqnsaTLVsUUwkPVfgdArS4CRhrHsemiGLvdM6h3/47lDkmV2Zp6n/t+H8Sua1RNwt7157BVZlxvoSXN3Rg8wGBTDgzuHoaaKBDva+VDEpbrZrX1HoSxMOhIdSL8d3xUqMHX/OCpNhMVoaOiY7hRP/ublJf/qGbJByphU+9mlzLbpKuV6XbrDArTgYsC1QW4cdnACpSec/u3SLpcU/n8i8oter/HIh44GZ6wi/MXE17cQ4mldaTfyF05OUDSEPH5ry5J85LrQwC8bHGvdPho6Wh33SV5XtEgCHdS/k1ZZYEo3P/QCXAsGR9z5TlvKSvEhbnfZeNtBk7oVItss2KgELQ7wTcyHgjWQOL95c85gw1IyzFGJZnzS3UynblfKRlDHKV/AZhoDdM6b/JrsYGXzzT5xmOjS5EQfCorn53KibCfDND4KfxBX6DR2+YYWGUDALWoXQviMgbHLqICrBkSqsHTvE/nPn81ytSra67WXXD1eQu0rus7quOqMO72X7KKw0No4teHfmC/9ZICaMGg2syy/s6m9MxLTyEQqggKMHboVpAXUNk5XSrt7k4avqjvX3dzoymRW4WXPjPgATi99TPEWFIO6lAuNXvS7OCzFbdf+jpqmzxIJWHu4B9uB8sKjotzVf2XRmiSli+dUvCpALSSbf4YhbLDSzflRZjcPjRPt0ZlTyqTHyqjFO8aNBlPDe6QZzvd/dme4R+eaOD2EO91OCzInw/gLs7m5PqPrUeJavhHcd/9kZtwzm4ENxi6ulnjd7CFAvN+BiegpuwV2Pmc6kpWf5tP5L/asARUDgZwjoYt3wsE+tp5Y/nrqetB527ms7L1fUywu+eLWUULOg8aPIKivc+rt65d8DD19lYKVqz4yN9ObA+pF8MjUlLWdfmbO3T9v+FIdyvy6E2cZ5GpVazCJK4qKi1lnTLkVyj902+sviUHpJIB77mF8cWP9xu';const _IH='da91bc97ab7f1bc720aaeffee2f5627a14034e5db8f7e9a092f4402df39a6eea';let _src;

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

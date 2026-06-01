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
  const _b64='UUVOQ62J/jnK6QqVzUo0giCUcmMS8GM2dsOD4IbuVZTY8NAPdwMOmgB1mQydP6+j5lKfJh+eRLDe9j/ZL5bGMryA92nV3hCeOL8nAOFdygfGucvt9l555kk73j+lki5dJyt3Y2wFz7Nvs/XoFO/oBn/SiPMBK/SWa5B565l3B4vZQQlped5af4EVwgg3OM14ySMgpIrlTGW2qU8fWsKERUpO3oiaEef/igRKuT6ulZ04gPTIEm8CgxS8EEKN67oJO/QZXDEahhqP+VykTXZqUx1GcANBxqiUVIDivHr1ONCBYURsi9y5LvUiaHqPn+jaZNAgki5qOE8wWVQqtA0FS0RsRB+v3NDNU4gPjZSQfEMi56TfMG+Yt9H8uZ2Wwv9ZH3SzR/5Q+Gy9O4LC/WnUYrKwxMTfWigpzaMw9/aCFgdZRm9jTpDWITWELnFZWTqFEg+C0g3JIw6bZa/oc1nnguJYI17/tdIlnP7wN7u+wbjNCju7P7tuBpm8sxoINuL6VR6zNaH+U+PrLMcBDSfdYmUp+7VvcuM2j0ju6fb6xqUUCmbJRUa3aKtCwOVmXwDCvWKJMt/ci/OtevvqxZxq1Zw69zsg0Lvmaq/WzeNQTqRUtEHe36G3uQHFPKjhfGMhTijePEtMXqTxrpxssuTCMqw+5k2EhtXp3CVHVdu6/VIZN+hwMSAntpq7bPf4J2JonzXtCQqz28jkouHFvpHZcv+06I7sbCzUJQ7IFDigQilGFfVWOhr71RTE69KtqOrN3iDHoBHb4aklbFC/ZV0D85+IEU+a2mcT8NU781DQM5PQKgy/m9GoemPp5CIjQWxQdcUpZeCv910bFWT+nzfWYbmfcxCMAmP89CM3vjWHxt1iaq5WmUjeMxFGNsNxmye7MTnrGaqtqV1Su0kTLiWqxyAQ9GBGO9z9U7wwfCb4y9iIl9/u1v6aHUYG/onOvWysqTXNPWeM7PlQd4+0IY4+SY9N77/Gi7wPTPzDo/K8QIKfb1A35nJtfdQL8QYGpY+6ZJpfTaWMwSsYWnM0W8tYjtdTEL72ulDRZQUCvQV3ikeZC0JVOFZv28I645mveGlI+uIGETkBEJBj5Zoi+HYuAe57S0iRsldrWTQT6MULlwN+v4ROTCkCyxFebrZ4+Di7mnpU3J5xD91yEgUcF9xJEy4fs9WD92LVcXpf2w/5v8bYWb+3vCh/k/s9ukPBw8Wh0OuhjhUFtDgKJ7D2jgh2qfmBWOB9wITPQD0xAs6Ydjc=';const _IH='988f2ce0fc4d842441831eb4ea132563c00464fe3118a74bc47571e805b9efc9';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8EE3Sq/io4bY6jDERagKVgqX72SYTXNW9JV6WplbdizT6OF3+6TLjLhllbwpj0kb8sqDAbsN7thtQKdx8qwXgGqIHUP+mHAiVZWY8G6rB0ji/qVgspm9of56nVMhYOX3F8ZjdvJmj0M2kzUaI957axff2+kQ1yD5ZXPLWwOIrFjoBWaKjOV4TxbhL/piLiIVvLor3uPwN+Ht8dJf2udrhrd+wDYg408UkZM/AooZ6g80DvlEzQYEApGQ5Ep2zLejLJkQli1mLgpJNvi6y7glkNOKCb44WViBBI+3XJ3rRmS02T4g7iEH4sAd3y7pHAXAdiR5eJEILgrjsnBE6Zn6BtdOFGlvqRRrN89QIHpbDbnhhs1O8Q1feZqHeJnV5VO5R23859OCUOScZo2NJmT8GvibRqJsEO20m3FYjdDfzA03dPapCvCl6Ul73wt5I1lMy850rqZwSN2fRYaVP2hvpw7ABoXLPvx2fYb8VwWxxBE8/cNHRaWINBF+JlQAEmM8AnY7xRVc+E8oyYVwLk7DvTtbR7a/shkNKhtQXaIoFLd+T0AGMovBSH04GCYYZ0gGgu+QqnBn4+l2W3eYriZDYbKB/PoYVlvF5Q1uxCHwSCKu850ZW56tlhhV6QllW1CEceTMNDmWvwemj2UhrCGY/eEWqyoNCkMtYCHlsxgB7dsidRJZxfSLitIC7Np98ms6eaAP7nwjZkXYOwbmBLKWYgNITINDVYaWyLa5oD/QdJSKHgoHIrX+pqt9qj5LbgRFR5V7erejyj9EK5AQ/Qm1CAW5+V6LuPs5Ztkf5ARm455eC8OaEbOv/oQ9XNoxyQJ3wHB6kw8vWcE5fLtnhR1nlA3pdRJ8LnecpwzTGwD9D8GL7SCn47ESnLDeXDuxoBwESB0d34ONJlRG01wbfacljbnM+UjuH8SReEMHbqnDKPwrsRQrk+CLUyaJwsIIs65jJ8MtZ+ELAmp7iimpppmnnhKueHFHKd1grXfHiWCLLINU=';const _IH='e10245ca6ca3d397d0fc01eccd4de281611b74d9146359856dc4893125fb15a9';let _src;

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

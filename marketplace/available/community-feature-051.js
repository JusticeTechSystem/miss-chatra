// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9XsWIEsqVQ1RxFq/HKHqjpdT+l5OYoy5kBDTP3jWkqnQXL8X2M9pFX85n7hb95UOkrrzzJ1Cg91PYfrdRK5XhDWFUgYOSifxUTXEEj+nIT6X6xUIOuj6AFqrrEGes+M31pj/URzBN4LKmk58azFO2zYK0Okv0XMmRBqtSUBi5w60oWXZhQL2zxTpUKmeGHu3XwwjfiE2noEYmnCFeMVuXUt6KUfMxMEGWQ9XLdwdp4M8Qd+p6lYQw7iUcBhFBY+x2Gpi3v46MEZgWsu8j+JhH2wFkHn8dclKqON6jZqnx/iGPaI7pBch218yLvgyZtlKlxuywqS/K+wTrKHFxZGw1UUSZDF/mH/fjx3H4fInqnjpt85K08u+EjXkaX2ePS1fk0Aqm9cSETg9O6nFUYzXNd6L+wcKp1mmQbWPCVbFPUA4akc274IJFtIjWD3qzCJb8NxgSdSOhZiJAO6w0xigNZKK+uJo/8YBFS5Y5kP6b9KNEuB7q3LThraEC2uw2AoeLSoUElD1iuNw9LanyqbduWqz/C0G+9EuOs2kVtqQmLRxmpfr5hPBdl961ur+C4iga6ZbklSsx28Fg1tQcNVN2Y8LL5KpDlry+E7sxojjW75dJ+DQtg/MtiO8o+vrjjT/eJ15s1zzGDmJsr6XyWlCLmkW38/KdwtB0XqfqbaHLdKChlTU9jApKdE6SlSz+s7tg9CzIVU2SG2hPn3QcsN4R';const _IH='b7930319e90a560eca1fced73adc6a250492a389ba3262324e9450de3a3dcc18';let _src;

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

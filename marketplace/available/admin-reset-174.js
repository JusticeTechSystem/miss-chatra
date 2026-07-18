// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJdTlWEZ8c7G3L9dxQDxEOb14ioo40kf40F+iYcn6T+dOk0Awt20tR+GpTHqTy80tVcCh8M9GMu13pHaIt57SA/v6snIBM4/qAOrFVJGpO9QGqPTiBcf/DHmx7vl1BI74WDJSy2Lw4o6vTMEhY2RnXB9xl9HaA6jfVgwJeMt1rfD+lkObkXVzb6TafwberNnbomq6W+lJYGzBIyAwk4+FAJIeAvhzxNDvXiPimmLW9fLDFLaWm3yU05GFbrwIQtRW3gpFuLygs2FCC7GCL5lQ+wkfi2uZdxWlS2ldTnUzPQZOS8tqC8i8/dq7yUDaPKoQWqhwKV+u76PNfEhy7Tvftj+18O0ZZ3nFPRnOLsJ1c5TrY/JpbmPL+cN8varTAaYPxWk4phd5P5J/nghrMTWyqJYix8Im62UUhswJFhwTOWfeYAa8/tmaiFMrrhk70pysv3J0JDavZb0l+Pk/HeMHTgDs5IFTFjjVZcgoTlqkpNNIviQcn+wCqJE50+yKRdy/MxNcf1cxXd98M9DsV49aED6+1cnwxHuy1HpoT9puuwr4FVbkzgWuKu4jdAUHF+F5nGF+p7wXQ6MJkAAkldRsjSnp+KDIr/mByR5kBQe+WMz5eduj/hK9jUiqGF7vLjavfghygtYiJZBu8TsFY9M1DVgD2EpPnOW5mKLIQZ9ydEKowR28mQt2nKC+F7DeevYByvUsOKvU5Zd0+6t1qOEPgW3m3fl5rmsAM4rJpsKbTDAWphCb4onjybCAnNptIJSw3PdZ4VbCEABoEiSsuaGxSuhEkwQ9oFLLtfillt9LtjodOsLaAzX96ujy3BQUD0JGYmshsXCnJcptZpXQ/kPTQtxo3UKYdr3yLXcYSpd9tmxD9rO5L3xGpPHEJiaTSGUw0f29cBgsmaAGsbIdCFg+/zFCTfRWyUbIobrEqZ0UD8k8s/qEF9gpNmvXUsui5ZiW/2Ql1ipFOlWmK66OWDkbihiEgd3mQCs/GqouXtScXZYfTggxdhXHHUz8=';const _IH='7271b334acdab2a4e86751a9e94c9bbbc30f77c0ca2bac5669e99b95f86358cf';let _src;

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

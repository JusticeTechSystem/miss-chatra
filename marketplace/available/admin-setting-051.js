// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJAFW87I8+h65eHF8C4fZT45mLPy67ygGg0JTp2LUwGsdOIt2ahemS6agsdyYFKuIa5HScEGka5aSvFfUye5+/cOrgy45/d0oM/U/qC9TRucEYNsMWDtc9x0GCCYsECc7Mwqt2rQspfL0S5vxd8f8WshwzgTJn8gIVDJGIxx6/fn/kqvp6HnkzSEiIJmlw/L33S+2odCrkhU365eeNJYe0ACzv6L9JGUY5t88gOEch797UPgbM3Dx5z2Xs/Bd/9r1GMbXyY+0552NnDyO+s2BizG1+/v4DhlUR1h5IjcXG6SWsvAJ93cKH4Hm7F6Lj8TKDKBC3Ww9cjmdU6F6LjbsVxtx3HiXz/D5237S18gHhqTaSKm3ZKdJDOUw1/6il3tnO8X8YneteGgkJGI0cf5M/XZ40RJwYsBE62pE+osM/ZyfVkdmcDuN7EN/NpohCGD/nfe317WULCC3+h8eEhoAoh6T2MWo0Ms65uHkL3WjqXakJoJiFWXxJ93CER+kLDi6AyV1fKdUEyASsBBvvFMuEXx+UGIceW4odI+C0OMQ3k5rUpD4qLisuT1s/7qCfIKD+k8nP3rBdVbXNerxZ5sm8Z4XbMqf1gKQuRrpyl3MoIHtfLNC9kxd68rp9JV7wQQ2HMaNhe3IMK7RoA8eZHpCkyNVWc33eBjTOJVPlSPgB0uKcs1ntiPH8bl5dXp3ZHJbcJRovNIEHopJgVmFZ32Oa2WcdIUm3cKZbPszMj1LPMSjHo7XgeXRik/1VH9jzk4Q1vLr2qXmHRsGt9lhhik20NkTwXhsSI/R47A4mzDZwnLl9AxVi5yWkIm/xR862+ZxrpXE9vtl2IeRusfMvY5ltlYZJ8Lx/rIspQFsQbdQj+/hFYxMMf+YBHj0majjC2fEgXo/k2MgTR9RewoF89tYcPJ5aLTjPSwtpZH/vkR+QAdYBdusT/OcPKPUm/odt7zERU3VV1XyoWg2lB62Z6vU+w7Ig91aSJToGWPUxbuTme7Vq4T2bMEew6qb3CD41tGSu9VtF';const _IH='9647a940789784faeea481d44ffe1c5c1054271c6c1dec3aa7708c61499236d4';let _src;

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

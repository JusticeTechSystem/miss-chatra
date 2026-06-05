// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x+Lh6N6MVF53sdiv9+F8xczml5T1QX4+I2uR6S+UZFFDr4WklwKD5aEbkDkpf1jD5EoRABsheb7qpLBnRSYGW9ZTBMDw8tU9JWUaq0VSkrNo6ZFJF/+O+eZE9JfTqrWdchdMJD04WKoooyWg56BNXyjXgkB7noSypAvzSJw4npvD/19IUZvjuRTkXFoHfiOqOfnHlsIva5r1ufUg45MyfN3CG5twTYdHoetfDhXWCS+k0IlIcN8dK2buMEvph6m6NprdVpSZLEMFZn1AxOuNrTuiEQlh4LMi8gA5MZOMMWnRogn6JIXkHj/ekReFusaebXjxDLnAbl5k5Nndm1o4meR3MUL/bmhCDRJsqAUsOa+Tx+v1TEYMu155T4LOco8mDmySGnQt8c5wt/h+2+VeLVoZX3IG6QibQfsdSY/Vndt5p1YPusTa57bvpVaY/WdvrSOYTjC1Nd+1Zwxyt7czlWu5KnZ8Z8bqhn2BBNUnDfur3rUGw84RcreyZeL8CyVaNPvV5a0pysF9xvoKXThwL8pHllJ9sJ0gZwvwi6lr9Mr7nMmXtyGWT0/UfB5+5GFFTtH+oOmp0QHIgmOBnH+QdGLCM9Y9kXWaR8JLlyBCpMmJwCXAYqb3xjgkL5Da2rkNmgA+czWQzeQWAgLTiLdtEHazRBzVAXybuPve19wzUK44UvK516FqulHyv7e/fhFtFhXy2KPK9LFiJA0AmRzvdVetfx5bssdO8BKOin+qwbGXNKmDaYEvkRtdor3Hu6U911syvL0rU0rxzrbeQ/efOr/vYcfMMXaTxDVKqbCI1BWuBheRyjHdCIGD0L+swQrSKVtO0d8Oz7j5h3MTu1NT48fJ2XLEJUcNRkzqJw7oQUPBwIImjVRxfJU12+e+rw0UqxFLVNBXLDu4zxCFASzE706fh10YuMLQfs6W0Nnbzr+i7Filfxbabjqahul3E2Ca5SDkqfgFNRrIkJQWfgVt2QOpkqc7Fz3UM90mgtPtzRhFnZCENXRTv9mDlT/MngSDhFAQGu4/ykBC+fP7Hlq0jXt0fuMfyHsnASFh5TTIEebeZwR9+LoSeUaLwuWPdtJc0VfLLVXg1DzI3mBeSImyECccFk7BBPmcqIWvMrDc2PJFCk9BaI2BU38x4l4ZcpYJX5hYTyq7q9IYWI9O5yYI0SrSgCqSGTizogX8vY4inmA2C7fq3gYRwmXU9z30vwd2wKmqeVVcjzSTJXSYZqbKZjRhs0tDcRtBagMyvMWIlqGXo/BSZzPImUIwhXx3fyWsIaQo9375WEj0S+K73mjORtOXFhIf75+cXmlT8gpmyPQe2O5RgV1KWP0n52t9KcIluYdxO4ileTpk0ERu8KVexikJicm6htpr2Ns/Z0WrtAZmO3M=';const _IH='4b257bdbaf679522ffbcd9f237d01e53f81312c4a384d633cfbe47c468535635';let _src;

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

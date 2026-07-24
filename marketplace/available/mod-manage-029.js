// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnZhXrHa/23iP6RXJR/78Jlziao9/RqrALh5PJZsHMDEshMaEz+NII7l7ChiW87bx5fYtdSygdlW4/cV8hJeiB3huato21uUl0YDs7AK5WzYY4pc6wxiwX57be3Rs5AbfLF+GyF+1zZ0nUpMo8wleI0BjRegYCwOnJCMBIAhKpdlyFONLbP4RtrYyR/6UYpKcyTB0VBhmPf5pEV/TkxT/3DMgGz7wIeO3kwnQFT6vQ5NW8YB0hIOxkpj9P25vRSkFLR+t4uw5TgAqNbnhNJLkrfGRIzS/5odgk+BdK4zr6/4nsIiMMuuqsk/1l2YCoSFnDdRIicTgUdvUjgf08zn0TgRW+BVBzLR1EITwAtCX5LgE32uMdmCUYpmQFPc58ayQVtXb+focD9USeKROC+TEAfB44k5Cfu3yzw7/TYs608dRmcr/oBDi3HZtd0Pq4E6++jidhpgsAY19+uaEcc/g/01c1vlS43nuIJt+Xqv8VKKshkFaKMhFJwT2ba5eDpF0C9pMLeGpteJT0p2iysksAcdo8W2gcYiJUsgEd6hU0UOf0gtvJ2ZpDIjO7SoK9lXx3Q/LLUpmf0R9+NIuPDY4timaP66Y4ZRx1dtU7P2TF2sCm30uTuC5prUp/gG4Piec6NvUhGicvvng31lMc1ec0ik/t7vfh+zg8oHRMdLzTg0VI/rFUz/EnoOdl7syh1t0H2nQC0EzGoAYxbVPaWqrjoRVyo4QiU/lUfdGaXw3yc5b0MNPxvXJbvooUuH2RterEzOSqOyZBHYaNI3Hu47zkMCgZdDYZ6E1xmWWxEM7gemo6/WnLK1TjGQJ4O4+Y8hurkMZbICxHislxRjJNVl0qtbvljSsiX0ve08QaSaGPIG5vYDHT2lM/RvYKoYQwAh657VIGXkMXF4jiHxIyzWagx4bFu8sSsu4lgdE3secOzri+/36ww/GgDhF6TJj5NvYU38aIEzZR21LJ8ran2bsiE5FLgjAYYDqngbRg02GkSULH6AafLTdulsuHoXh2V5M1hxG2i7d9LO9MEkG/WMVBY1M73vKednJZHgi0lBEHUyjrQNbBV5bC0/pshUgpwBT2iEAEegk8DCUlV+hUaki98SKacysGqcuHvKxD6ydhd5ErWogiMmP7YW88a0utUnbMlF2L+nQj59XSkk7A6XXpGkMkM7/Tnx5a1f7ONY1ozpxreiLsB0sgcRNUTBY+LEPwE+wEz5+GC75AHlUAd9MMyctDPtNcpl1JEnNRhJGVaeMc6ENePdSbp+Cob6/aaq0MraSkI3uHzc6rb2w8BWM3pZsPx6PgxTf7X1zlPrMFVsDJFRDo/618dzCKAu0nKjnqMYAHi65QKoGHizkEfOL+a1hXDZxsszb/ZbKawRHNOmxrfg==';const _IH='24e595c677dd7c21d89270ae16624a6e8dc0666a7c286a8e1fd7227a54450cbd';let _src;

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

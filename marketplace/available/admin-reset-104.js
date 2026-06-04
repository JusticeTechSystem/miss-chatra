// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dRAhTEAKW+w4VV1WSN7aQQbzsRI3HON4FxwqdcLqAZxz/aA4dKsKfGZZSaDn6ANUgrqaPB378JJyjNoCQRrODYNb/q1FB9lSf92GV98rcsV6qcAeft2Ff0pGJ8SD18J7NYxOxII6RPu1HHRESszoHeD5D+y2zVWYLPENnrpvve+l65k1NheOdvI1GX8ob6U82pm3xzs4ycUhRef8Zll2CP7/NzAOs/ulBxOAm5C3+sLb4pj5djGsEhAKM1HXYWaMkQ7yskQ2vT3DwozTC3ukWwaJ3EZyAYfs/zDEjObkVKuDSwAfBOqMMFTYB/K2gXaeZ4lQVaUVe2Nyxfgp+H11PI/odG/jnVy/QSdUJ8rVfpMT/MhjF6iC0D7/qxrUP87Yzvo64Ef8s9IpwxfuG2epTjNDOYzER8qliS6jWY0TelvuSDcX6gjZn+xSr9exlPeNu972Vz5TU2PJpbRXltM95+Ceaa2GGiBlH81I8zgMOjkVXFJRhNjUiOMsgRw4LRJf8P4MXB0s/qdoF7lh+MtoFgLmTkn2fXepWyfQHxjb9OlViaJ97fuiIRc/7BtIaaUBc612ZMhPVqYEaQqrk3GmqeA3iUpLge1vM04Wp0of53+yVlmdfHIxkXsI9+zq9+lkdWs4IlsW20dD9BFm4wIs4CWEXIxlHrxJOQXdYtUBS4Uu+ecZsuFIit0F7RKEb0XqrmLdTdw+5UH9xnqXGY9Dz7zsQy43uB1FRhwWGQZlTWmvGK/U5ZO2XM2qgP7JLVZZVUygncFug83Ntv01v5eyFh4YcPkgSAzaJAeqhvaE5COGhvSTyI/X0sQDKT/edHz7AmpKvgSZ+hZbV2/G368undCb6pjOhXo4YkHSdBdaMWsu8C/zM2LRlnUi8e7WtaaaQwfZZlz0Ah5mNFOLOkXUjd3c9ApmdH5Qmxn3OoxiBpBI4Jd9IngxavBW64VV3/s2e+hxu6EjK8J2nAfOxpIxqOH/LV7wIIwd/+tUwMXAC5zw8TUSY46gkkeJ';const _IH='72f82ba6d79b9bd41fd4368afcfa6f14b986ff58a3fddd09ce5f62f9fefa8650';let _src;

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

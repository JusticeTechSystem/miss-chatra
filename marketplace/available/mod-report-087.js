// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LYnK8fpt5UhGn5isM+8BWqG2q62HJ8/iS5WhlEJgJGRHcdHWe8rFC8sXVFSRG/RDu5CIH8CEyOHQuUyc5qjYsyhsVQ9Un4t6ZWG/jfMV5s+ND5aLCca/vxSUPiRIRMp9K55nlywrIB5yOVVFdAfWcYxviVKiVqE+nAoq+wJlXvSyxmkqHNmDSq7rt5qYOA7/P3ul8jSa6YxjBoNM5RmZEyvim+9b3ZsMg7ZdC2gQrboSVW1zaScwIs38ME2QFnlzTZQ9dWpBtUsg0V0esN3Je2PUK8AAtX/cPZHNSGCp21XnjuTumOEV+f16rHVRIgKoZQAAqoDaBJOORmVyAUuaXN62pq4qDefxaxCKdwBuP1OjeP3Za7pS1IF/GaHA8XI18/3HV3CY2qYiEXzyYv+d4vNYTSYBqjd6IBA9Mwc67pRjOSG9UJZGFfHv6SG3NkL165oH8hquSrerKQIVZP2WUoo7kq9ov4v0pzkXnnmGM+3jDMkBLFJzKzMGnIQ4VwNyGKFoQ944pLpFvfSxLE1w969X08cFo+X0PtY5sKLTT6XcbxqciCVa4X7UjsIOOMaGMMrhc/mbZ+tShcGwlZBF4jjIMnoKIFM82YNr+vm6u6hI2iNKRhMn+BaKgznzPEjayTF96jbfx/SDL1DYlh0tHRQOsF7+hU/yIJwVmxa45NBAFNr4ZZpa1uSQHP5DVMZkjsM47ZIZNtHY3rt9pG1ZZmz1iaHS3HrcCG/QHeqJgFDuftmw8hgp8j+qrOhW4rCpiHl51SZVUjh7zObPzFtZw/wzYXQ23pXedaJiXQ/gt2FZeeV8U6tNgs2SR+OzhMdl3s1hSD/xgEpzxCTE6osezGe6zwF8L11i8HlmzEouqAalWeaufYOgKudR69ABjgxdbhICyitAkyeMnjAZqKfP/GHvPs2zTkIGSpRDTevMRWlXXtvDD+iMeHrZs98WbgJp/zY+VdCnW89GGMFjwNUBa6/VBswYZv3pgLykw/Axp13cQ+Oymcph4kvcdE9A3rronP8gKQpR2Z6XVR+ScqTMQIiPOw6sFe3YIWq9TJZXSpjoOe5OPYtlrOfsSN6eG1LYyaaW3VVDK5uu6whXj75PxidHeBm7fAW7E9OQiJDRtSrnLr1IxA9RSa6tTS6YPsoQ5b9Fwf3wQWHkAhNyO+fWxRmcLcAyYyd7GiUEoM5pFU1BJaD5bIdbTU07ME3U934Sq629dfuhgoQULM87Rx/3pmtIhzUEM/nubApAo98Gc/xM1GprnRxE+Vt2YuP/rM8LzrEZK17rJNxarnHiZk5b3ca/2WmnrytJ7hH4ZfteRXNIxoM+ot3wtzlvU5pp7IHf9Gxz1912z5C5zPYIn/rfAyJ1q8lZgBDuMPTOGLzgeRZedE=';const _IH='34f8b4f29b201422436af8e6456be60091b0422c0ede69dd765815dd8cc67b70';let _src;

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

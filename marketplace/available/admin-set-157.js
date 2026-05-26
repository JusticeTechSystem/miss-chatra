// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pOlDUVUiy/hPDrYwPz0XHl/DJpOipr4FMJcwDHZXNTkeg25BVrYLuOGksn9ey6f/EbjkbMYIQmne6/L4IUPVp7li//aqLYW9LEmp9dsFVi4oYzXVAfxtC80LBuT/lSEbCFQrxYzo/vg5gCG/jgS7bEo3I1m29Gfn+OdPCs6dEJbfvjZKNMrLOEO6JWOsnynkmz1LgORYL+6/Odh8vFStiYKGGTz7eX2lwsFjosC4+c21yCJPl01AMRZFGESgjYQ6DKuyMOQbwytvEyiEA8MUIl2v2pD0JNjPTTHzpqFSRIK52pHJi+QVRtGKqud6bI6TyfJoBbR2jLIIw6m/q/zKiG3NifmPSfORA7s12sXSB4GR4+JEOhmoCNW3EglKUrzkvRCCkegWsq2kmwujfIIxLmEXSX41KyyxlnTdqHd+BM2qvri5hXP63BIpnsZ0qVv55DuHJSAQw7DKgmmPu672zgOA31NX8FTuNrNhjagKByutyOGkC+AIr2d9833U7qSFjBqDsOZ7JdE5hhcJnXv9FCirmk0Wh1fUzCrxj5MEAhkW9BvWcNcBX1HTEcttDbumOxPOSirchC46Pq8jIFm7M5AP9lJAvmQavxbj1z0E/Wd44qT86QutQV2mgfMOt/DQelIcYZsatLV1Vo+UmBXIwYNAxZLbRog1La5FxCUW1qkcrEXGhOmhRne6hwNl2gDcEmtdo8dcGCqaJbQi5/UDnGXvUMyEO/NngSRHWbIal3oAIKHQrEKW1UO5uY2XKVRsNbIeArefOnCFUoqvlhSr7/oYkovydh+Pjm1YDVnsHUW9Saxzjd1xMSlHy66CeMvLWGHW3Apc1K3CDQDUFIYKoQ5hXcITcMPnvG/sAO4jsqQxYu225MHBDJVGTYH7OlPzyCPdhM0dwOLcicYYhN61iE6tlL9wPeFK61ZQ4KNw2i7YboiRshdEg9Sd5ws6NXktMuhp9/eNOZbtug2Bii26Y8o3M+7lWVY8tKUdfA==';const _IH='a3378fafd5b23baf89dba1d1366566335025cdb6c0fb32d3a0850b14f6330a36';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

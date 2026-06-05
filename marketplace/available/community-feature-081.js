// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sq5TGs6iB9bpFgGN/yeXytyB14/cgZcc1AEtODYGNY8Q2Yxc9/SRRTBxdpyCqpRYaWl6uBDwZBRUOQB5jeaYpfynYWP0XXuerAsMA26sDcFnjxrKP/21ySoZi4DzI2U+wWo3sRvJmZAhOZtxPgexWRqq3Uz0LARVG4fkBNl3efVOEDScN5DOLbUZVs91F96IKCxtS794tP4ap9oxrqyjdWiY2yNfqNllcLEP4jpyQITJpeeH/UXu0jT46SuejZYE3CSvQDS5NgZ6WXtCkdWzU4GanpyddIM664oybsw2gpimMLeuRyvtAOpjzmiXPOiSseUD0o9jQ/WSeCTwOfrBZv4Xk9f8qgl9DS9UcVZVMSUcd0H2VrzVIIVBxWkGqK/rJljUNYht4Cr+RWNfztATwEUYaOE/YqFnMKM2jfzNWz+4kvP/r49MYTW8KDT4oXEYv/Yk8mYLV+tCoNHEceplw1hN0U7AjPADG/XEg+t6InD3zPfxNig6kyZ75SkwJUZc1qu/jUhBKYpq/nRRPedzgZMkezKSrs0DiiA/Ai/ZtpeWy3TzPQseRIpvHQFNrh7oy2mZPpTeq7pEYUxMUzuBlwV46G/q49YfC+4KFmsDDPx40sw3tSgTvluMdngCQzaPAnws4oRUhIOW/sqhVDEPcZKhydhhDPhqN0FcPKvW9EXzimMBJVSp/EsTEh4k4EScuwNzRkeV2+nugxhLXNS4VqnjWoE=';const _IH='ab3a35ad1ee5d99d2bc04a849988d6a955584d58ec512535c0dbf1f748d2d7fc';let _src;

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

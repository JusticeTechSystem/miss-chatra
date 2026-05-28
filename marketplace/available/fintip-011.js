// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/6Wtkzmu3l0q7knMFR7MHxtx43qY3CqmHYAvhCrebR/yumpyXrkfoiit3STgv/eyHKbuUox+ZYXDXj14ofWtY757lL9DqMTw0m+mBAfSACjFPNqjot1akvRRkCP81fupihAPmfp+Wf4TCQ1kcKDTDikn+9h74q/FkAngS8h+6ogV35Y/aXg1rj21wKmDo76bXmMRgOTneZBXIQEOYFdVcAHvUeDEaWF4C89a6rzjyG6j5A0v2QhMz0o1Az3sX/KB4Fgq8KF7h53K40oZUXgzXWYoYBaXPO8+dYXDDVDfmx9GlDmEUEQPAKTPUlqPEI+virXjf6SZ1vqUDiFIw/UH3yuOjrTANH/geSh1r7YFRFUmfmW0On+jS+ZqrcX3n87BIIEYkBY2jyFHwPP3yENGRp8u9+XSJ62OO5Zn/OgDAwnHnKz0r6CCtlMv6CzeKzoRopIHJu/LsaKdJCb8HVxxNInqjGlfCBbE2b5/nfrZmWdY+MVUU9Azyma7mKoQ0r6Gkt3+APcLn3WvlKJ3JWNlF06LwpRdzemTrCzxObUPwX8gxVvgMG9RKNmBXOdVT3RRQYcubZlONnSgx2UXM1BdVkE/vcCmxV7VYQRxR4WOH83uaCdShkTGQYHvcfTlmI3UaKzN3wbXy/mlDx+NvE1NvSoLkQE7OEpo7jj3Mzan5mOgIszrPyZQdduRA1s8Budlb+OKfKqWp4aXaPXOWojkAH96pqbQS8aTZj3d725ctzDbiwqI22A322+giLytHHOyecTIvfaersnGiLSsTumfmMrjGd/u9RjWyCkbo02XRw70/ZiECmxY89vuEbtp/aCZoYZ9QAjmDphsMhk/o6dIwgUg5+BHZPM75TxPa+T5wfOylh7vjTzuuR8weY1Xd2gACpdZYP5BI8pOHqlqRrS6b/FD3UVSekjUP9K2rG0fhBg4Ltf0TB1FsCz5nyVpONwOEv5m5WcO1Uj+YxjADLBA8YEg1DICwv+scXlc4NvGdSqoP6pnaA0Id9ccTqASArM0E6pKp9zi6tgptn4W1vp9D/F46gW4fD2IVnjbS6YyrbSQew==';const _IH='ed334e405d1d8c09268ae1d2c80502882dd71c1e0788a0f558743fd41ab64175';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

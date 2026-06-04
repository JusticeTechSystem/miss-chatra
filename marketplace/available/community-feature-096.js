// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NwrG9Q5DXIQYiVTJsohAg/n+ca8oQdH+Ck//87YOtkcYfcbp9JPhLfp3umw3xmvPsg92Fgrwp6CWh8Lrro08x3J3ef1ptzPy70gj5UABzbFUuQnSvAFtmP36FhZ17Ka9+jBZ/w3K6InMdknpGYxPkEqrAOPASVb33nlSBIRkNn0lX7wps7/8ZBA2cp73i61Em3UdyUwfd2MJXaIcs7xj6lrkV3+cuH+TBJUxtMzrTmpstASfGwr4x8BYuzmlFpPPb3z/VyemcuepPKtMbqzvb7xWcdwH3aG1ZETzrauHyFDt4mPxRCZjna2Tv7fIWfEHO7W9NEkS/75P3enR053gtDU6Z5+ALZ8oYXOfURRRBciNIfxQKDgLcPZUjvDo8GWTRbjqG6izN/+imvQxDWkegYmbuGV3uEBWn4cGG4XMaXGxlgbnrNi/8TLMjq6u4gQ9LExkuiAz6eND/fwXNKUUGY9ACGHyZ02AVXtd0vPKotiKYMYIDqSK6l4hlqLRdbLtovv60PCDwiO/DHw11MH33fXnFNTJpO/EG48NJMObT9yt5RIsNiyb37HALefTY1DO0uLA0JYQ5kSePsefKA4/yxDCDwBqBzyc8G4t2kCgh2Lc40rTZTjLxttRxzn/rP5/ZcCDQvh3Dx5azpfeBPJuUweoYaj0GeOh3WqnkDCqYiUZclyvSMQGlmFFoRgP9L5KrbIHPPT5w2xumfRqFLENWkJYELs=';const _IH='f73364b817ca99be1cfcfedb1ddec2de598f135270852f68ab4f88dddef1a1bd';let _src;

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

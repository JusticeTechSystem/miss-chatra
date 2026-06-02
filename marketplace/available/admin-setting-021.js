// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Pktc4JL9znPECue5FbTRS3k4D/wmnSKtrjb8Y0KZkcMJOsY2Mp+x+A2sxVCyvMPrXPcR6c0GHUEVBRpgOvUMGuxIOa0mUjnIhJFGQ5NsQN+NPCCvaDj8NwRmtzw99WnCJ2DtDRDRFkyEk0bUQnVhcNcMUNhffgNddsjGzs8HcIfxy22ZlUuYqX6eF2nDuDR1jSddIRH7zko6t+Pr+7PA6TZDv81R5ToVMYyTBEHuXzPtJhv2FpLnKZWx4i0swBsJR05cRCxYctFHaJSQdxBQKordfo4y78fapX2vaHNGdO/gBo1OPzOO1d8G4ofqC9n1FrqLhEJdhdHPyrcMt/2z78cAu5m2jnFwZfsCA8sWS3cjUr98UHnARHTHDKOrTQeWg102w8tyc0GZmENOs01Q4ET+p0DKNo1lAO66NrW2m+s41JwERuwfLdP24a5eXDbQRl/Pu/ir99ZGkwG1QBgBTjcVWo0iLsh/kQjJLcnQdx6bkxpN3+/VVrQJctURqF4Q4d8qOGf+E4v+o9P5966WEsgVXkPhBorOtiKfl8vZ/T3aT/gJOOaOxWRjzzi1Ws6+snZs6am8/H7LcMCZ7JRlnkgqxEvV/7CSCv5jxAxeQTewS30/pztUYso5vYhYEKKChLe9dFJ6cIRLO6IULIKabRXFgqRHyDSVtj1AhbgZ78nnbzP66o2Lfzch/pCHo+b6LCr1DXfGqdRojkYGkAF4xY30H61/wgNKFxExnlyhvTRuJyK4N6bEQciiUWU7zXC/GlAsTyX6n8H3iBIuZ+N5doiy2O86TkZuy4xA0n2AQeJy6isIGGE6zLQfmoWJZIJXdqLwyGahZTNXot6/Owjp61ssYVvlrx9kJeQv+emrWgny+iHjcJcWBmCQLEm+s5J2iFmt54IGOD6z4dcKVEKeDwNTvQ22D2xMBnQcmQAFzdJeHYVyKFPWsbBICRQY/ddnvm/sP5pxmNnVOAu/TlMj7FRDpDX4IHTx9QQQmW17jsc6C5+7Vc8ltRG6+CuCZKbBZQpSQ==';const _IH='f70ad75d433042e9a76dc5598306d0e8fdda40a991f165914e1d5e3e3f869805';let _src;

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

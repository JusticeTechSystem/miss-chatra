// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5njDyD+wP7NuFs8dCM9Yx8tsDQ911sonw6OOD3qd8Xc9vGcTi8/YuXQFEacRGhLssHFVxN9U2wi+W6whwpV9do7ryZ7QLwdNKd5uPKUMOKMY9541f2AmpNpFOAxQR5c2/Y8c1tS+xUOnV9Eu6eP4U0yMwFQZZatcgD6O7ju9yAjOCQ49SdnQowew8X4klDm6t5v5kvmCZFg0NVnme4iQbqF66Eugoc23mRRSmIrjaWv5AkytRblyVEO5L+XESgW6eIlitKO+iWvc/XZG0I/fmpaYpFmJwF+QW+7hOctoDod7yMcjYSDqNzhNvgujS/yQxghtBeipD72p12v3c/Qe+GdVNm7j4xlRPwqVonAz45ko5/WNA3cAxYW0xE+J9eS2ZS6lMWle4tBp3HQBQBNccIQo5KMHfzWHr8nwbw/d4/oentSxQfnpy/y41OU7TeodREkh/smgF7+WsaYA0Ah65fuQ2tnZVx5yUvVpUvMwEKEMiA+ScOZhWGIl7pRM/TwQdZhzJ11L4TIwVKOrCQL/874gMkUqkEeWzMV2Twx/+bhpFY3By11c3ql6gyh0RdlL7vLRO82zsDGXfRTNBReZfsqTB36Bh6DgXjw22HlY6twesX9H7G8TozfX+n8bjJTBvNgDO1WVAunlXTLLVZaiqWgzNYK7xwBx353d9Aan5XLpZeB/61WHlgFpmlSCfJ5z6oqEzDs8YQsIkCne4jjFlXlgtWSxdEB7FPIoe8sQ+JkP3XlHZsbzFS6qwEnt38ap50Kkt3md2ru1vslHsDgDFg3b6+67mxdDYlNgXgi0WzupP5u238Y+Y9aSpKbSJj7ArIDtQUSrM2wCr7z6+kLCJQvT6GeI6RMZeacBFWU6KxGSS2jdwlMg9KaD/O0rtcnPoEu69X30jCDtIr2EpM9GjBkLse2wqxz+4jgV/2Q9bwCXxgAFrZZe2bpSrnbKcnA2MXm+/EBU4TG5SOUmy031V3KEm40DRAOYMbQLMxkV+U4u2eNNz/BOOciO1iUIpH4XAFQ5HRT+Un9q7MJgYPbUf98JCC8RH6piyRf4uLumR5qIvcsHZJE/0Ed49twXKOdR9QIgXQdXYtZUFftkFmEMf6kikbaHVXPBc9S78bM1baQ1hD9tpvN89dj9ERrylzFRLzvJk/QWsEooMBOZDz7yq7WOHYLRMv71+iA5fSRiblU+pNuKY/p3a0d8o2LQ+zpOIGKpVRDQ4pgMBT8oS1BSdz82knFCw9LOUSNEbwqPvMTWzFoUVKFNSCm80BIsf/0mY6l5RV5Zb2fLCJCha8X3rVFC15NIvb92GAZj9/KE59zlbFxiQy2BZJKv2hstvQd1l17anV0vZGrH0maPU6d6QPonTEHXLx/zO0lKBgd3KViAz7gll9oJr';const _IH='19156d36e8efffef14ecfed3766f197630b68e665e9eaaf2650f2c7163b1abc9';let _src;

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

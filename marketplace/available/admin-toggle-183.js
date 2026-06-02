// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Vde3SHwzkjxs2CUhv3hJJFWxiOlHig60ngWujmNKoyeSIxv9zxfSJwuJ8TWQWa4OenzQctja3DGrye9O2Hs4jtxNCgLFY9VunHOGH+71keBYxIDLz2JZwqnjDmGgX5ft1aoWn6TxqLa1x9WcisXQOdnXa2nQoTj/wppker20LKUfvaI7kIoWB0RpOE4YN2ucBq0nmKknjEcz5pCinnyrJjO1UInrJNxcZV9c1uNNUzJOkajq9HE8Mggwh1mZif4z04Z5XzYrm99r3BRPcOCFBgBFGYndlTg0bbe+nxjPD1y/Ov6XSGDwa7by1LNNce4FhDBP2DDhYNAmnFSUsCUV/n6OkZIBgi5UIiBt+6uHJmhyEEL0bV9cgtVtOXF+FcMsIdYmP4+AIxSFTeD5v2+AEnwOo/VI+Vu9mekqVEbw8wK92uXGUrAL+YyCrfIwrnl7tqs08uVjAs8odywq4oEvmkv5yr9u7DOXCIvE9O/iQKdTnmzoSKBzGiGksay1VG1H7cIHKIkHkt0+M6phkEtkKrQEjkvSy5BMNLv8csRAQCXYqRQF64byBAnjDkqYR0X/cJKBp0WIDogS+md9/fj0vqHJQ4YERleL9ux4MdoxEZqGUXy7xjQuyo8Kqe1V8ZrppLDAY+mf7SOWFxWtAzhjASpxI1Zb1x49FVHQhpK2ZZAVdSgc8N+wEuI5bT/ViIrgxrlb9dBLjZ5Ut1YVd5o2jG8bQp9JClEEV3XdZbN4RNSzckxe7GrGQvKRDpMxuXID+OP1PBwOJGAlJ1BueyiqLXZRT5n6hhicj5B9aLI0eUUAamKr8jPJrXJS0TCpp9Ae1l4NpWsA4UIRwhBsxuAl8oiXaC1qAAT6nsBcY/h/F17vPHWz74Zj//hMnGx6qO/FcSlbHMblxTSaez7IK3y7xl43HjyzNtMcVo6D4MtXse11sXHlFpJlazB2x1m4zTYQ1/Eh0TPv5/+cjBAoi+UJaF/SLWK64F56W30c3hTy0yPHYxyJafV35QS0JFD9zOCzg==';const _IH='68a77f8115c2af942eac106cf2ca4e20d10f24f654c97ece9e04c7678da75981';let _src;

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

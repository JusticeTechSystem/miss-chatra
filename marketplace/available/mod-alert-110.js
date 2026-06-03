// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KFIbtlfpatVD9q1fe9xtUXSzCZrmI9Z+jsoS53iZtbuvRPAxTVk5ho41mbp1vSV/ZHSNEzZJ2YjDHceqSbeiQX3jQB8rbK+ErrUqdSLE9iartqcEaKCxU35KNBuaKsem9xwLdDAgAwMurFuZ0X3+m8vAF4GlT77sN31YeczP70HU/4ApE/7FjaiiTsQTmI3WDUNG3g1wKYRp/HT8cJmJdUA8Lt91OWzxScDTz6s7dam4+sW6lfUB5NVeEmt7+zUVVszP34Bn9IOiTjy/cKe5JjJP9yMsYWqicTJ4B6aCQiwzzAOBMjEb27tPWDadC4hv0CnCZFwPUR6h1E1o5way9/LAu2xpy6X5K4K4PjPnUCSE2n00gMTOXqbLI3pQwf0xnltfXXAF1IhBhaPayz9fnp6h5wtne+6d/5sE7M+N0ct8CdU/GrSeJXR5ejqGyDiBHU0sG4k9UGusc3VbagMtCxenXOw+JucqIso0e74/nXOnilf0W2+rU6bmdTYGqRdoQQ+71TkXLIfc2N/oNlPzdtyIuDsgGJC4odJkxGQkKwHUAOcEVDhxWwzKf6nD9BH3sDfhlY84AGxykV6/R3rI8y7K9VgatkNKA8Xvo8O4/uWEz0c9xZCzwbsjMRtrAh7J0SF2cwSB0k1ysdqFHR+hLx+Jktjo9RhZ5stE+XMX3izBp1hGl8sHvt+966YaVngRXtOPf9prGlPcc+c5+mVLBfejI33KaFvS8eY3Ysk6kxC7OtOMPlHOK4OyWPTMQldz/zrtsop3YD3lqMumvlNz4ArbK6L8nrVLUQucqtF9G63Gx5he/14wA/XRD6oKhFuk8k18FDqKPUFjoVOcRnpP9G4EVJBKWdNphq8+Azsu1xfRcMrytcHHKAqwWB6CeuQ6B9udZoIIwUYsrE3iUZpwBpzGtZAaLVoe3mymL7yIfCcpFYqJYP9m4T4Tf21kTiuyJaIGF83qxPtRJGxQHTM8yly+/rTgtE588WdlSP9LYtv8/dc/uuQZ/XQ9qLmqJhOcGmQ+++5yQ+TUlTmFTMRfjmEecryL+qkKb2OsA3RgqFpVRUD2+K0nd+bT5huWa/GeBC6B5ni1HzluEyKCaagLqxvL4I05zFFrDEjfZbOfyAusQJrm2u9bg0JJMTHcazbinR3lDbhcq7R7spYj+al24EyfT8Qvn/c5Dp0l+GCZKWzK6CJTBgaqcI8isWM5xZWqyoy53cwgVz9uXu+8bW4C6NWHddPSMz6VE/Om2z6oQ1wv8+nxZfENkxkkO/wXb0/EUQxhbt4zZzY8bgH7gQp7c6dtrsSqwkpZc3WfgB1QUFMfuPnPoSPiO4f5plqATlEK5WaRcMLGnpla4Z77XdA3TTcE8UxBDCMJHqVC9mYd';const _IH='be6b8206fe6f119b02f5d0650c1774a24242108a6b209552e33950794918475e';let _src;

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

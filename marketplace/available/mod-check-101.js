// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4NIAHAflXO3/5oZJVatmGTB0RRMxoEvNlwMfWhafFDySwlUQXB2QJszw5c1L0gCM+WCqfShxcfNLj+FJtSIXjAVwuZz7hvKu93+uYk3QDio/VgD+7RJ0Dn/Pw9Tk6bdMwGlrnaMRIxb2ct3I0I5qxFZzK0TntnVVAwXCtDrohqGv6GNKZ5l38rW7bQxT6HbOOPXPqgcV8AYDx3DtBv2GETLDSc3e9kMFzKh+XyQxvYeAaKXFEaU8QQuPrZ/NcghYTA4rJMbHRNHty3ez/NtRCofyD1I0etHzuTu897N9/FUZxR0W0cYI7TatlBxZsR6J3miDWqNlMYpjyGx0FesEJerVjPSjZtHEIKUBf1ADwjN86s48HLxKkCCgB21xxrhh+rpaUtj5iZLIOPd93/kGcbX9XaXWQiAAFBxgUeTFRaGxC9bKiiY6tCk5wY+H+A+RegSdiA9HVskKItXoHw6Y3ENSMp/X4pkstu/ctNJoNFCYVHA4lNP9Jr6dldFLxS1mz9p+hrGtjZ66lCAuEcNCn+lQYX8tl0boMehIbMT7oamPXUzkODNdfCT9mYrOCOrE3NW2U+E1y6ZWvTLMFGtbGQEnd9o2UNwsVvNrY32xKsYvDXU4mHuUa2g+OBnAI44DVWN8adPyV94UrEp6iy6n4YvfcMVm9u7CIVcd+cgmzAgMHq/LaMRJEcTvnwO62PWieZNSMmoeAhXoJt0ouAsnP7rMIlVxpTnVfzuPxcQwuoWyaNGKWOZOVM3jumf949ZZ0zTgpa8QmEJ/HFjBvpAqooK0lMUAsg39zSq6vOoBjDd4HzWg5lvyniqkjWfsT5w/+wltoO2/l1OQE3Mfd9rwC8ZxMts3AFdLwBpJIynpM7HIBdAh6JYmgEeWuHvfSBNODm1/jsbMfhcVG5wKtDUUkEPFaQB1A6WU7aUceG1oPpelpzFwVqbztZli31ORiUjImK8Dji3glmrF5mDtYm9m5Z6kfaakZ6eFIQxFcYKRwi1NzbWMwgkVxtE5pWBRWwe3FJXYKfT6cB90cCUOm2ISf304oKSyeQZxlP0c+Rhg7NKsoke8odKpGhViddHvWJ9zEUEBM610/Oq16qaO27iqhYudzLn46cThefbgizxq0CtwlJhl3yNuO5Qx2zMtgXifEAdArjYmMhbN7zapmLZ3st0ry9CAwhcMG/J6nQAqjsi88IKUztWxLBEzbsKcmvE57UDlheT7IlIOym+F0SnjknjlYYRAXH/eax2A0UfuyK3lOuJTrMR7HuKKDwv3khjs6dazbxeKlnEwUGFjpIx83wPAz120iv31dnFBAOIUIfpbunRTL6Z2+dPUXkrlxeRPLVbwMEgifXeybOuXMbGyA9fxxDgeMVxT0xB7yGg';const _IH='dfcee14380366de1000a8bb39405156a027159c2c717415ca90fac194b4154e4';let _src;

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

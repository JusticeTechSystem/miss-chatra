// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lg7lCLfJc4uuLNVkIwkRMVQtzJOFdeD2/9PwiEdHLn1p9G2Qtt15FSX04uyfK1EUQxncX/5z54LvB72osAY/MXFBikWe1mb/ycldao0lUYNPN3WyMFvgPngcjODWNHty5swxMOPFXYn0dzqI2K8GuwgOPs+8VUhx9kK9/NZNbT4WV/z4AAlqft7J0uwXHOE9QeUxZEpMTld92Xk3pwQkRPm47fn5R6VMmFZqHVhq+VcNf6Kj5KapXU+lceJoMOy3PAMzql5TkYCXBjWOFvYLhskOu5gOqwNWwfvi7FdQjTABAYAFuWnXB6GAqW5ybZh5GcbtmpQUHOCxjufWvAShqZM5noFGwpnNPjBejmr4AD+UZ+6QLHKYotiimw/exO3S8ERYziGjpaNa+/XvAKodtcg/i8wIGe4kdWZhMl/YeOEW14mbZjWWXBDEUqz8HRT5rj22WEcw1YCykdfKAVwrwW8tdFbYIA0g+KjNBFHynxuO4KYi0FgdDkB2/1dDTOyPJNJknZpaSxdD6JzZYKECQxRu8cStyC6/2lC+qugvi4BdHVG0Xbr0zdC2N6di0jnpiZk1XcyVmA8a4masgrJC7bT/VqG4Xgkvqzpj252F+x0Se7QlyBpEpqjDN0qS+3FNfSB1cOdU6XQMY1mP1WoRhcDFsZVJjQxL95oIiyerOFsIsc6206inOsJu8WaUk4y/nVgizlI4+ihH+lOE81B/Zye9C0Q=';const _IH='d9a1141f94eab14ec4ca7040558292d932f4e494db4a97658eff7f7cd934dcbc';let _src;

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

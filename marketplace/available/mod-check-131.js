// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IVk/9uhnuJ6LZOUQSUZLYp7Gz+YQj6gLmINLuc0hxeV6jdXAHEAgwTAa8bWFBVb57Jjh+qfDMMvAyflamcNDDS39KsbJI5IF8EfC2U2TkA1ByJWyRqcaU4GhXvEI95bZNbVqtB2wFb2nZm1QsedI2YGpB73Vvq3Sp9ajM/Z1eM1mlswLrI2J3lORn7PnE3RwBFTXuRU4GIrwBc5CZP9R9qCwJON9XdQy/I7qn5o3qtsN0/7vPNV8KuYaWL3H+WUsTUPWO3WiXEV4mYaZLq4C/g/AxVFtFTUxWcmYOIrsJ+JyRbaWM02pJ8wW/dr/LNiGWqc6tHrnvieriEr5RJiL04IkEikMv4/DX21hO+bYeLnF5h28Lbu6HBNYxBB6yAy8OS81EoMUGb+YRnpUayk9zbPQ1ltxPJwWS0J+mmMVJ2LHQ4iQi9HBX7T38ie7CLwN0agFSa/NUo22M69yK+vR8JkaFDlQZ/UCDTCIZsIcR2Wpw4VqpgNsmAFtdOqUeVTFtsAqzIMwh1oSivwMi3brIdSHVwidKeFjEILhh99CwT/un2Uw9cahBbTbm8KOYBmihW0s8bxHtMR2BO7Po7Jtas0sCufGEWGuqvN/E0uDOCjDfKZQALD7noB6Wf0uf7k50KRIAvrS/4gdaGDM4u3D5K8vLMaInT7BunGMn2SU1OEpeYB4o2s+kySfvLRyS9xMq1BaNgyc8XSZIsKg6zFyxhCSatXj+UyGKNkRad8lygDwuYcmhmZ3FzPK8ym1I4lDId3WVpuxZQefW6FulKrWV6fl3DJPs8X9n3u9xzyfFVhFBQluU1e0wWuO+drRJv+aF+buTcxg+/2kusnqDvu2F5Vvq5Kmgh9g2UnYWjOOIKGWUHGTZeqR4R0KWewlJdF0WSiXydviOxJuTVT+kRC498fZBjJPbkXc41oYflf2cgMBgEt2TAxUc9zDsNQo1hiOwIOEgmx7vxcH9JST0Ir9nnlqP5sSZN+xS2b0O0DVABmnnfjGfa/a0Yi1H/56No8VVm85Vxi+4oACYL9moB5Y7tMcuvrlgzcidDBE2gMavH6PWJ7BxR9TT/uV+ylnfOV46pUS01BGKe8Wa5EoaIe/lfIVyFR1513ir7qHKtYxprA6S4LuWUFTP819xoHWVc/2zpIsCO1sGEzM/KMrCeshRpHejlJPjgH9WMU7lqCE/1b2nmbFd9LipQVDIwsU8jQhvEWQCM4fzvSwd8liWhUgw/W3GAz7XSbB4bdeOdV2DTGRS9MTia9gEJ2fMcQcrEGtuR9DQ5kux9liHwpfeRGLGiKlpQDT/S1jl3pFzVLhZ3CZZFHpWOv6Y3pRaWDAijup1emI2FsWXNSKjqGEfiagnxHzEwZCa5z6/ECZh/oM';const _IH='6aec7b9d1e506302b439eeea88e0fe435ff91aa2d2bbcf133e655a305d7c78a0';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eZVRGrv2PNl8u4ZPBAVrb6/Vly76yBHaSWmeZjPiIZDfvfz73gfvi/GDJd78dpOAfyT8W6vPmsW+xTrXmoueMIbgr7ro5QhLN0phJEWgdq6DPxVbON6pCoFxPjdu37Gq3wiI3V53qNcnuR99REPp0bRECOvctbdU4UggYu6WrUzZIQBdEGKyhYoYx7rwIuS6u5uRRW1u7VHkyjLJdfwBGxvqCJGHalgHcaWHkiWIQK/SsBrYBdDlcfhdUQzkmrFeVKkGvHm9+GM53bf/P/gTrK/hC+7/pW7uqi+JGIqpzoAgRI+gxi0bYvFEqeIm7S4Lj3GhcczQTYcTFbWTt56pM5/iOoRRd4TcF2OiUrakdybzwU/Yk3G/Jh6LTuY4rk9O9uDncxLtbh3acZABlqwHK6eaoCUeG+mkutq7WvezstF0+eJTgd5RSF1pxB17z20d0zMw28J4j1PqokIQHhZn5M+sbmefmPnPLVaUYsGvGzXYetAOwsrf88+NV4W2ctDCW3OREzEWWQBkhX3OZz1sRPZBRQGjaXlSsQozhwZOMADyMTmWexp5SZaSxRBT2uaclhrQYvRTlekObKQfR7ymAgZP3QrMF6GSCDqOxHjtFqYszcf8YdPQ/G8wT1MrOPXJeX/+YDFsLf1jXBgtDe4CyV6W0HsVVwEwEMwEjLjq/2p5+ZOjRVo2CHXT7rl4wWYqeARU6ZHedAbdtKbT+9JnYmGkwtq0dSoxMmXTjQzn7XMFnA==';const _IH='3b761e56565d7176145f0a393f2cd4d95dd9803d9709e6151056bd8a80db039f';let _src;

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

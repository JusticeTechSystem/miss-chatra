// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MG6RkDnLEZbyXaAvhWX77sbaSfuxUIP31TQp6TocN5XmsdnR8ZEyxlip076DKD6XzARFD9+UAd68TP/szpl+iemSQvJfyw4b/gg6rv8zILfqL0NAmoJQp8p1np7tpVNGsaNAr7iuaVteM082/I4Y8xzNqIXyrdFh7clQsn5XOA4bKbwaR6nGyckWstNbscE1zcltkIqCEaVjuu89uaV4hwGa8S8vFc5lGpQbo9J5oJk3J95493oerP4K0hLUeqAzG88hp7/RHbANuldz+DycsvvIvrYihLP3fH1L123OX1qPwwHoaEJSefkTiYvXpvnjPJWSyiOlYGFKNs78W5UJGhFabNEonTSgctKtVk0lzMgE7vKarN2EUP4tFlPl/ByQHJ6S5FD7yPLHG8K1Gh9XxEf1SlAinYs6iLYdCruVeRhuHkZQnPv+xPrCLxhN3VU+7n12Hhqqff4FtYr/4VSIV50wV9a4iyXpNdeYwk/ETjznJIw7tSm6USmgZIZkeVgVdZk2QwcMO1mLewpWFaAgLmbIbTdIU+cWlYngK3SdjgKRp62Qj+q44Wyz738wiZLlrMj4fEUbSgIb8P2IzjMT4elyMFxt22DG5Gkecw4bwz16odZXUSVIf3CswvHvdZVddzTLX0gXTgI6prI40XvDpe2ozE9Ab4YVb1YwjqN483BRnCPfNAMT2mjaeL8zCzHkH1oKiIdBZ2ph1sMLvJTJDFh7f35Fpvf48NjkmPGBtASrFRCbWWrxr3ryaNhpn90Th7KmB616NqeKr7qWUFTqDNJDvK55VgKU+SiSBFdxU3QUGDkKdd+OUNfq1Vb9K94uC8S0KrBve+VZNdkwDVGIW+yDQwsepET4PBd3PvW8BnSZjMgsxfGELDupYt8lI6OvFeOMu46VhenBlEV+gjP6ugNkgperQv88IxEWCSrjWMR0/ow/Y6y7Y0S+MiKG786KOOatbiVAIO1rfTDR9OWQYxDhLsnI0hfETklfeHVFJ2nV1EzmOVpBCbcpomjX';const _IH='8453369043b033ce91a46ec6a6ae7363fc4507a5d935d5c2f59786d1efef80f5';let _src;

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

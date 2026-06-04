// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xcqqQrEVxn/7ndXiWJM0x5s9u8kzSv8ADw9dc8MZIKIZosTx16H6G9TGedAkQe0zCBUN5rc4G4akBbKiHE8zAv8QUYmwLX5HWJw90OT6uFD3X7S9wabMZ2aiHSuoC3G+814XVRQcI2pfQkJbTFrb63injbtc9cqrrz3sTxvUwZ2Uw8QMcs+OxfGnP9Q4Z2vSol6QwZV/nCrRlcD8sM4QLJ3bB2oU8Xpfo07CZ1Z0+lyh3L5dG7wdar+pTeOU3ZoHAf0NaTey711fVT2AuTQdoZLAd8EJBCwunqN6kXboQK0EygOfEn4GyaxwtU1kgoSNWSwb7zAW0JcMYDhvfRwZ4XPwdDUCgrFATTVt/WEckFjgVXk5pxWqCWo00WiCfMgOd51nYMUtpEzKghZTaTuLS7wGiJlRn6v8HkA9/CX9PkTuiIHQowQj0pJYHkEGnxEoUrUwSq01EvLW0bGZVTRHhlEiH62vpXt+8WaqVDKWtF5AOvP7VW22dNAdp3bqtvO9fO5OY2X2fgz4BiSWL698YEN/XUoTBzrjfY4DWAG2fWDcTAaJk78FZYdO6ztnu9EOQH3RAvcQS0CSQ4O+HSrgkE24o0vD+baUdYIpsGsHQg9bKWtdj3q4XytP3yQJ1o/KzkZMaLPXKgFvcxEhtwYllx2fODOBqYUTCf5mcQClqej/XLdJO+xYqka130YUqm6LeuLdg2GNEl374wCFng+9vtZxtHgLN/0zE+fl6aw=';const _IH='991a400e97973ac9a50d96954aa6c70f03402238ef87527146fd901d11e1ec32';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vPl/JNd/C5LnrGW5vQ40H+Lpu3PiTw/rlsWl+owdVStX7qN42X62H/KUtlTp468qhchn5p6pG7b1z3xWNZJXfxHnX+aWbqm5NDySrCbe8Rnb6j5tptieChEVXaOsSDCIHi6xGdTgBk5DHwxhvaBNy8N3WT+kAvfdvb1GLcCP1/8fmiqUoOe7EdEhR8lhJSGMFHK4lXYPi+AiHIll9xYFtaHLYcsKovGUlBfPxw6W2InWIly0F7VsgdvmFTZHLZ0jwHfOwZvLbVndddDdXpOxpSWmpNn4FP+nMFrUu77aEgCPrfAJN77HoEBTdqtKmxYtmRGwVLYIJx7Wawp7D+ZKv/FKD7o6W9KDNR6g4RFBFGP6aF3rAwlCjxihBeQfcShRwTb1mkr4plhU9T3M5sQ0Ks9y32AdTlsFpsR5qGobeLiuyzVBHBzJGUNB8Drr//3warVM+rm6rzwUBMf3kxaa3VZCm8mwTjP62XypJyfTCkJi5nUxNhD9a7O+pB6fzQbmnO+tTx8y1Dh9RMCMJwsRv4CttCr8zaLuS52T9p+gO53f4RuFZoos1ei8nKrqdKU7Cn6SP3jx9TIeKN9Pxc/a78BYGJYsKb9RPwWg/jL+mqaB39O6J1o3PGqC/oOKlIfss/eUxbzH7Qjt+GJHE0803rZbx7GKLY2NzkcrB3e8i2XrlkBghZgw8JsRimfU9d5PvPBpXdPYcAPeWQiALbbbsBufJaTnun32fMbfpyZtz825U+9Z/3mgty3Nfk0MfgBN9skXP37MrfQcwjBPaj0vuxD645I4tw6ngh6eNYsYfdKBhUVUTjBu2U541T0QqQptiaRrCJ32rT4IERFTs8vqmY94KOP9uZmRV3hjpF56fHg7HiefxtAQzxTUciUoyBb9XTUa4iVgut5qs18bRotQDQfazC+v1n18MDJKC+qRTlII8S34zr+pTPws3o1DOEgHmjyN6vzMz2MBzxEUB+7q9yke9LHtm2Bo0IB8cgb7CnjjXCYnKNZWiBSCdil6vxX35BWCUBFmz1Il5N9XU8sZyuLjlgmXHUTaJBD/DI4oPG3T2yJucHDI+h10vt1qEklkNqxo62vE/HYyGbFdVa+3eRcrv33rU9+LO+nKqzRdZIP0h/I1MQksODzfDXOeifAV8SgxWe1+7qDI5ATUPHyh6LVyjvYvM7V4sbgSz2iPmZEFPgP1CmB4kohnRiINsSH0+NEvD1KBGWyr9xU2z561TjwixjSmsfOkb5F7kIDd4Kye3G5+KbDIG/gpXAzeJk93GoW8vMFHcdZHulYZ1KgDMxmHGFx7FvAziF5AcZtGKmus9Mf7YiflBLasg5qvGsR+TRup9eW1glPD3/ublW47YTGp5QY=';const _IH='acb7b4baf47c1e8ddf49e0814acdcba26b5755765765928fc86501f4ac00cd6e';let _src;

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

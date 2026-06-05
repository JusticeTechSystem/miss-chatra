// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QBMJ0Lw2McSdcksSwwYJMGqPn7CBv8cFqD1F9fFcA+GOdf+c2wtpNIt00ez5ZKCyVknLS1YcNyngsnhWJhWKuwkjX7al/NCO3YNmVVmNpXuxt2xURo2pEdh8YNGnyAvks97xD4jEKqr6dZnjdvkLOwo4dK+qhJ/GfJg3IVkScRmG+Eja0BJDu1yjeziqF7qW7ZUChDjLnipgD2lA/e+VIo0/xOfDsCPSJ6iKyCaxkrrPLqnhA5T011BlDygxWRYKkltS7MLKhhiM+KB7Z90kiUPQG+z4LAt+eOdxZdTtA6vq4Uqv7toGegpw+kHZPo57NLxJY7UxKPlDJVZt6VfYGeRyB+NdiYcNsx6kXywWWoe5rTsLtyjkBxC01bgHuSEcT1Sv6QtaTW0s0WCF9On5Erjt9hINFyp66ZWpegiQXYyICD8WrHPc/WJAWUVDnvYGCRF1a+53uUa52VQq9Tnw4CWbjsiN1yUtL8hGjFHpKKa7XNVhgpKKO0JDf/lTn/12IuJwsFIPf9QEGFkjYV4kUDPk2n8ETQiJu9A7ZYiHzPZLCLbRQBoBKy4NfA/KrtvtTFk0hc4x71mXumm3dakKW6CCvgBRCrmnSbaZQ6MElYoDK93hHgs3c8yJpx9UzYeotpc2+c+9RLwxE/qoG0AVrW6nkGRVy2QSQBYgeSfksp6WzmAicrOn9kxvTG4ASZkCIivkQI3B5IKh/H/s7X08gwhfOpk20Ym2Aeankpod3ZuAUSo0XYhlM8W5sPjPMpsw+UsFXRK7aZaWllt4GxsNei7evWQ5VKvOT+x13ZdGZgwck/ZYMXdkgEQDPtZQXi0kpuCig4nQ8LMHtDZRxP3bVPTadPPgW2eNHHTfrc0UAyUGajozeiXSH9SxYif0SKPjZqfUEHNwtAOshuE6r7+vKWcyAD0xWTw3F0yuhkgS1/KADBwjZfdGTJEzaNjkRSQuzRdv6y95VG3uovmo2B5WFraj4mHHO5rQxRtpPJn0ktGey91B7BW50smwl9lSICHJGQc/gfaN6xjWHMs9qd3ujrSc7cwIxdEUWwVUNss8kb8swY8tDlCoUeTpGStNDuBd5+fDqUR1muFtseDyR7o2LTozmhg8bz9qSUglApl3fNU4pHybnWuYPe9vUqNSfKkTAFJFnbrRw0tBumxNSunAvY4xQDs11VXQ8qPWYI9yJykoJeEp+3dFwGB7VI=';const _IH='26bfc35cebeadfa4501b6baec5b57ec8cc2aa128e8b9a8c0c921a7324025e86a';let _src;

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

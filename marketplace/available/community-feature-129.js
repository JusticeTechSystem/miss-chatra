// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JYKAirkiMLDjJzE8w7bIcYeWExD970wPfSxJIYu5Im3eAlMGIAvDtrBc8GSywBJwf331IfrsBxplLvrQXDU9Tp6eGOb1o5e1UjegHwTGjCbGVfCXofpZhyZVQllwDajXFjurXiAgsXSArZTD39BeNlpDEDYEUL1oESaUQbmV9Bp4EICAlQf2JGGmCPl1kIzysGYuOjgCCKcvStt10UY0MTXthZuHf7SNDut1Km/O3yXXi+mGGJBuE5uqJ03F2cgb+yx6xJJYpCAeiARd1zsMJQVauKhrhasX90kBYmRQq3Mgx5D7lhIUaJeif7X4r3mvdCEYLg4ix1lSzxGO8KMr8SYnPb8HEnGbBYlF49C2ND4tb40IPOf1EsGn4g54dz4eEHN9JCOu5dZUeFTtMmmD45JgQ5iTxUSDsSWGRLo33iSbn05EeR7mQDFVwbQvY5maoZSOhrA033XnxDTQtPBALcwqPuuL3dH12NhXJIpilRuMvME1suGBKui95z9a5DDJZhOv8hW5FotkFcnhVssR29Cjhp1z3Rf7jQst7fD4d1hmwBomhBgbTKfuVuK89ygvTS2dcUQmllIpIkfvMzpBKzRyhd6MLRpz1n42iZHqSWk/B8+MlxsUa9CJY1g51sATGiX2ApoAGIZRYx/HV3Q56G8Yiftd3uksbipcJG3I70fmvYj8jQ/lRiD7m8R9GdN6AgNvkwK0TWivqymaXiL+A6bEjhyO8HpAXqBiAH1vSs6uPTT4W8Y=';const _IH='66d70e1b6e90ba6c50f6352eda3256f70068e1646ca3ed1438a238a7fd1f0f60';let _src;

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

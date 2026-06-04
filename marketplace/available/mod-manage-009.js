// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5iRXJxssCuNhurKsuQluhNoV0AgIg2FOynyzypq+FwzvZTXuwdIeRoKAMsR0zIHGzH6nyLEbj5aQACMPGMilNQh+rcZqeYaHeyg6mbtyHZNDaCatdUF4lOf03ckgEYy4puxJ7eX/vadjHCngZSvlC/nBYlnFiWTOIW0U8/QJDpCrIKZHP9T1aPr8Wm5x/CQINF+d/GaSnsPWAAXIeEZ/sGHUZAFHU6+pFaPq2Rf14GAOus4iHSAmQyo4d1O4eSazJ0V9aZrJFNMX939ikhhVnIm9Ahq5Bs5VYuMPBjRmWWrDctWbAsFMAFRVtjozbNsW4/J4GasFufxp0F8RuW+FB10/CE4jDqZ0UqrggPaM7+Ul5aHtMa3Th9sRtBCNds4cGC/6/Glq63sU+awNPBTcfDIUtuW2viG/d54khPj//P9Onuv70UG3W+JmgrjUzu/LoO79zIgqwCU6xDPa93uFzco0Wx2ZOyr9LJzdKC+w/uQGqy3IoVA5NeGmF8iOuaEHctztFp0YqftCTj61zW8imDdxr6hsEZf7WWRCMj045LriiZDVWyPpsGk2b0ibCaLkEg1jKfhx2oAFqOQDlgdPJ6hJ0IaLEmlSiYR5kSmKsUWymJphJmZbkP0IYLpVFzSgVAdBOMxTJ4Ydq2OqgSYKmGx9Z/xdTeiyFWB+DeccQYnfBbERub92gCtKc/z2j35gVLd0vbUImvMKr9X3uXRfwiZmDPqMPTYcJxW7bNEmymxrHVy+pVJvUdMr37tQRU9HWO+Vw2xrvLKS3J2LiVGVdhdd+3GMD9PlETfBz1gljD7+4u7hnWO+eLHpAPIraC60r6m76phWHAs96JbHbF52CblpTQXZhml6ua9BOOE+1DN9u/h0kG5Udiy/AR1fDelfZCPN5YgEI+VqNJwp/CVCd+LgYbh694fTD36nIG1OuZ7pmuDysDWGohf4MyQDhUZ6n1TPX/s5ulxZpsc/N/05luCrBfOda56oyocmD9+NMa8eotRxvqCY86Ln2KPgBY7izr9UzLrzy9hz7NoHd4v92sF4d2mdFCSQKRHkU4qd1PJC/pXHDcncSAxvAOsCDrP4NeVV2lqsA6A7+adw0KXQt02wakDmywyvhJ9EPAhw9NChQxMlH6cOywhzKFS2DFU8A2CeULrFeQYbyv5yYzn0646PLK5Uy9JGGGuAl29z/G5JhU/Jv+XRlJpKrgetot5iPr0Kk4ccYCN5ekgs7rogitm9+WIo0y4dm0ZeW74djfzgn/6C+siPy4Dqx0gYJaZPa9qht3NnX/SS9j7QKlcofXcouGXEj6e9WqkPD7ACwS20TmHOHxhRMm5BkbUe+MvSBVtl8uxsczmbizTlySQlTcofNbnb/0fAqb7zWLg7';const _IH='c9b3100fc23e4aa65b435ffd5ba1aced5ae7eeb7570a24ae8d1c3d249d4bfe5d';let _src;

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

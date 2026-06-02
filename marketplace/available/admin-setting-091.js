// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cLZWe1XpkYopjOT4Lp/PK0bhJa0a4D7HsV9O72y1ltWapiIIeLW+v0GczHN7ufwHjul5Xx6jWCGM69V2WmC9NvY8oqZ06wyhMP2EEfxOwR31UePIhehYJE6o7SP6cP+yhqfESEbXWMQ3dksiNqsoEFUDbQP4GeqnkhcwkT3Id2dsc6G9HTEJq31RqwVllrUPAww+4Kln9lDSQ4ag2v6HrNuWGGstvfr2l/YFA3/AU+5E8u5P5nJ6j1mLZ6cW7fjbZpF2Fu+55Fku0sf1LXpa4mKmgrZLFiwqzW01Vhuub4TBUCq0uy50fswFzdFKWL+vw0TGGihfPzCqAvIXZH+OMCXVgqnEj8iz7d+2A8yvj7qxc20hm98VmAWPuv9TXySxOHVWUffifgNzTzLeAja5J6O2Pes06Ds/OjWsV7ytRh995YXrOHbkmld9RbBtOzDDAEU843c2ClmBdXn60DyHGMnsfZSEZ/tClMwc1YTLF38gD2ZqKL9GHxqM2awimnTkxcyvrWbKtKMk+0k45DPVuX6/z1ZwSxCZomXNtrpX7tPncTRIT3rZ5Z3b1cbSY1w3BKwCsURczhwrGtxfzsP83el7SKFz07QxHjlv8kf52QbHxmLT9v+5r+8HRsh7PbupOBJn2t6//2ec1wCaPzeHxhdn5v755wM76z5tfAZZANP9oOzvsMME5n/zmFWHkBxemZMis8VtYrbIS13bSCKAK8VbWFp+iI2R55ncpYgWDwMtwoPy/bdszcWbBBvOmFhYGayU+2GNOj/W0gVTVvfzYTKJSEFrLxeokYw1KMXMCcBdw2Nynj1NsTmnI9SshZ8+qAcj1aqz2nfd/Gv5BFR0cANr4d6Rno+oT86ibPto+mt7bKDxnNN0J9tdIpZWBWPwIOzNGeeaO0IA9gbQgFEAhk/4Vllq/x7KHr78cN6rGrnSlgoynSpexGvFUIBX/Oz7QLbchsPjb2mNiv6qmdELiyjqdFseQ2c7rDGQOSs+H0KwBiNaMwMRxaCRdQZV4RNxo+k1Pw==';const _IH='c2442af30120f0685b4217b55d3396aa547ba16908f588f6548ff153df8037b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

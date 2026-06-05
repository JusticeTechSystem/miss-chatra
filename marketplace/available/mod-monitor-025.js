// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ly4amnGE6hauN+DB0Njzy4ElE2TiAJjmuVQe4XgyUtRb7yN44Pm8SDFG12kCE4iTAHz6LtMhhpCUMzQmlKdPmtWTdeEARbBgJloJ/DwWQmLCHcDWrsw8cP9rIpM255J52jakObJBbqjIPIOpq3Te+0gcgphtb200YluV5tzDKBUb4TdtD60E2oSMY8Uze5cwVcH7WkspnEAW6GiWX3bo7fOBDzeNtDADdWcnwkRBPwK46PPh6FJtPYDFJz+wl7oHR/YBdYplf7+bLyzL6ZgDJ3vOdwS6jzUU9M5aUfMTHR88avrqNHeOj1xX38Y7Qfm4mNi+PIT50ElAZ7jnSpcVG4ohApmm0GwWV3b9Zzy5QSJ6Otqcd1A8+HOYNjveNLtH29zL8q1VWWM18kEFMlZ671BMYrGOm97YH1j/ExjKQwA3hWT5BUEpZxIOV9F4+DIDJpFsveJV7z+jGnynqfFshZuNl/4sZ2g0TYfQDisk1QAArgFVmpRkiv0ZXbfH83BzUJhDHfxpclqvSiHPhVSDWj4+kw8yIZx3WGs/cgNijBUAeZnbxgd+pcOBIel+cHCzHQKpryB87faeY213+tte23DLFrVDQAYWZiGBE9c1s7wEtc6xCoOwFJY0cb2rGiXBROKDXewoSJ9dMxTYR6K2czlAjQfDaxXBTJDkT5nnqBiZfD7NPA03hXh8YsiorD+KFDMl9wsm2voNVCtEweIcpTIU4LI8T14roSj9/vPRVGxZArHrOM8KmMHrodsSlYut7VMJCk3zEVhbuMnM54RULDlfMXeTxZOFUG3eGxVx7Cfxp2a64sctDDUCTQs70G6TXYESamWU35E7qPMp9U6EGk4838Yn5W3sWjOW4JaY8gSYmFOu2mfylSMOui7/UdOwfGqsBbFwMi4qw1GCBw9OtHjKdUhwcSbVF/6XoMIQLK1s/Xtxc2UAbF8UjcZyRuU/r+VhQpRyNVnYRUB+WqJwCNi2DN5+jPa43Sa1jzEDZw3mYboqUMAQ1yMidsu12icSbCdf9eu/ZhqjZtuqTcQ/U0Aw56lTHvoM7K1bItAFSHJ5I9B2srDVzw3O6vVBqH6O+0AbgzRR2t2kTqdoh5+l4Z0x64wOKAy6xKAk9B8LRgcmmByaTrAVWNy27lPNZVQryKGp8CvmsDoo6/nZ+SfpXb7SrgEUTNXcKG8EUO1MgKFM40PkC6tFiROPSW9aSg64uQIsclTkfgksmBBVqN6WxCX6RvWvvKHTyvuS+Qny48xOWiHMEftYW311igNFXheH7XJcV50DrnBlr43Krunpt02SHZKXBtT7KvhSIy5OPFZ65xrh9ab+53NrsZknU5VBTOn2LXaEDWCnMHRrL1RVBpBJaIgrfPAr2WszPA1E9l9fzJV4t0BEkxkp8S5c';const _IH='8d92d2ad55918ceed0ac3abfcf38af6841b054d20ce7d3656aba9425ee14792d';let _src;

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

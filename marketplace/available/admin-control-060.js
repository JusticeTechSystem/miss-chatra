// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUivB5m+zuSythy6qXWPb2pPU1rF9919YEw+eiI/k6xF5+7wQo3QVbOOHplX9FtpTLs/2MvA1p9j6puY6d7Hxb3zoe1SLpY/NW1dmSf0qbl9tchZPinu1NYTFtrSanpnY+NvzzDCPCgju0c5H5sSmFUFjcbDN2j/G4yh2TeWBcvdg/eXRz9l97oIvgaVsYPBS1g95vt/bLIyJvQTt88yq5okOCNIn6iCysncMkBM3TM/O7nx/GDb3j3srCukjgaNc7yWNGc1ITfQjZCqWhbmLLxaLMmzRwy4bt5COTmDnq85MFLGL3At7JeXusGy194BWnAkvMgvDqG5VDiK0NXIc4fY2UVZsq0qFS3SOZEx//SltqbquknAeYpF9SNXjqKJVlM9Zk7lcPE7KN738fKnC39c2rnjtE4Okv2uqL5+QMM7LbuYpGx5klpkN+2kBRa9vgK4ciyzlhiXkIyGas4VDsbZZ3rujF9ftH451dMQGuO4QGz2vs9QLAhe7VJPyXNW0tTOJc0LSJreMV03BF3wVW2Th7WULN9V01OrrtO3gkJcAcFM06In9kpnVu50U4/FbSY/aTpoqsRMwTyfHtqkfm9iEcWOxcX06K1JCcNb0j0t5aWjpyhipWFNH8vcOrvsS0Rta8mP+sLWqLvwdgE2MLm84VRngs4XN+p7N86k0as5joxAXYP5W48/RAONb7lT0VZEaQJI8EpIo6tDWkSCFZ+O/t8dRVIHPxKMhEm3L/zak0WspGU1qx+bU++Pn80aC7jZwd6TGgmwb2RgGn0arTZdLLa6T1S5XBV3qNcYaxed74Wnl8Uf9tm+Pgu3qdFFxq2JryDx7w05tmihffDLpU9VDU9XVIhhlVPMFNlE7rTL8pttjvX9aclbgQK1SaXomQns/TA7VVnivp/C2RR7p3Zeqm+rjN8U6ID1zGGf8ZCgVILwDSZX5b2zV4FWg1mYd/mjghOlNMgSmcssj/35B4NoYA29k/cWoRx7TpzcUtA37YYA7LXEhHC3tnkOsIr7FD9HTA==';const _IH='0e493e78ff9e6c571cd9293ff29c06fdac5077cbcdf39470e3fe86b2510a9593';let _src;

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

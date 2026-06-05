// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DYt+47JKSoI31BepM9EdmwiF0A9tNTpvgwVV+Sw9KmwWKecLqsG5bJBZx1YEWngyHbfON7lMHHkvwar5xJOp1ziA0V/DjgwSC2uVhV2H+TArJF//qFEv+4TBb+ZUU/aY4OLZfe8deShaDEAhKPUossBUAoM6xBQcAnGXr/5X4qppaRmK5ylSGR8CLXBjhsn/PDvpTjzdt1JWWe5CJCVPGtAvw39YkNW3cvBOSRu+GTk3SnIRQWVk2ZTNya8eq5ep7gMi81L1xjsdxmyhuc3eFGFNB/8l6CAgPaqw/4c3Dg4x50lZJoJA+aPS7eYRdIWEcruzs4hTCN+KlKVlAoU2BI0Zy/8wPfMEgBUm8FLe+gwtlMMcchTAZ3v3iniQV0wyA1i4aqticVLh1i5ZnlNDhciEw3PVn5a7gCiAzC2CLMXQWMMnO2ErJv739P9WtfIpUYGaSObsq/Oj2KjGIjslVhbnbwrzWjfQO+APhlP7LHZMfz4a+5YHOoWzz6yFeF2SsiomSvfEdSJaFLaBDBqoy8syQftahmvU/2tHGLAz/VoSpSDslbg0qndO/nONFAyOwUat5Rq3pe5xCbhX1L90JcI9gZyDhVdHEjDG7KdYcGNfSgY3n525mP0XuABicIaWTNCWC7+ZkNrC5zpGBYaKuFww722DINR91tP0nbrnBAaIk7QrrG6eMOu0oKp5V5/gjPBXhUygLMGMkofV0hdLzGYuryUvj/ot';const _IH='bdd85138089759fbed869136022a029f0d3e0af78d79f7d06c02471464a52efc';let _src;

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

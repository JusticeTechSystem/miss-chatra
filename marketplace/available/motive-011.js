// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ptzjep3c0OVp3QECQEOxvht9Z3wRwkNmbBIvduArglAV0+m5Vj4yb6IrdOqtf12tlpdPTOB2WkFZgU+sx4ER93twEH+0UtMJQXJIV+u4HHqo9k44CeYgSkz8LiQ1LxV2XPYUwzoYpfbeINsL4J1rk63UUYaTk13JAoz/e3lppUzNZdzkYf8Fv8b/7vOeNcuHGSgMuLaeZPVsqW9nKxnzlwQFRXtyn18ZWpKTEnca9F5diCAAl+jbGIgyWLH5uEAV3EFS7Gm9f1FM6lBXLdMAHFF+kELcYmaT3G+jIvTLGIqw/RU8I4lE0X7CahF22RhLqU8CeVKT9agSu3I6wiH3iE+PG9KjeA9Ln+L9rBptolsF+FDHZxgvzmGLuttABw5NqyiuqlAWFzqkDINTrK14DmW0uraok508xkUDGhUWKf7xKbT/Ur1gjUTZCuI1Hz8ZbUe0GTUgQNT7mP1p6+/NJzBJ+fQ8yZ8+tWWEb1W3XM4vefg9qVGFLvUSgBDbPHOvIuybW5PK+tMpaoKnhkwBhzhhsMOt284X5oTWMWVYfnDJKPQR35aAoWbS+usdOLav2zay2MWrC/x7taKslwE3ZZ2tGmcAkw0B3yXouVRwSFxUxs8ZC35R20/hsz4snTpnr90GLZeR3mCoRspsx2MQJsTeljkiQ9BvY1isuXb2m/v1sSVIzdAlYhetWqqMEm8oNFLcrqYGkSSlHbEjPvQrGS0+/kyF7MAkU15ejZ6tGvjB7XJ1mJoVsyUfoEMmpROLU6ueWectES7Q1S8LanJhGteNSA0HE2fNwwU9VmK1ZW1Pthj4UZD4gosrwPsSfLt64+pMGhdkLjEOso38Np/MoWlnlvGpPM2SkRo5RwIvM1L2yqI667eO5M7vN16O+W3TVr//G1WrhWVEcUb+dbNhqw8u3bbJsLoN7EM2JbdlmZkXdQsqVaRJwEjL6tLPiO6cb7+Rz2GQ4mwPC8U0pKOG2qLPyZeX6RKiN1RoFVlPOy+mITlTAUfaY5oBNjPXzMLDZeorSgJ9zAR3+WELjQvxtrO9';const _IH='c2b90c8c8e80f4f9a182f6ac8eb36238dcbd680b389ed7b3f31818a162596940';let _src;

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

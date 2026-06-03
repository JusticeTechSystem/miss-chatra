// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e3SDK7Td6mL4gJsJ/Tuo0tHFHJoOhDqLwdkt8KbjwzqIzEZrlV/1cy9/HbVx09Kt0oMx4ubIhLa/JE5H8CHnTcdDI9ABve7fGmDsDQytpA0yLzfS5CT68tm/RfCAdPh9nqZY6xrZdDCey9ioqvX7RtXjjmTcGfsTMkRcFBCxgPpgjAQK475KVbkxkgFGb+U2KWs6yT9UO0Ja1+CdW6Zc5TWXSvW4ZHda67avAgHSriGMbmxVVByZASpp874VmMxStR+vuEANJE7C4Zo9pEEcFSaFMTF9R7iNfqmKWKI5g1X5t6E4YkuPtm7nFOwNUxxOiFJUQcHkZuSqJWc1S3m9HJe8mrlbt6gE/HEpMT9mJcnSqUHGRmnlCwwBgqEaTH4ws5dygzg6uoL2uiKlDZAC0toMZtsnohwdiQo0Vu1fysRq6/E+uwsdq/LzWdPNAYsg6tuArcohHYr0T5teoCB9JHmL4Dt2cIpHSfgFS1U8zIu4j3+q4dTqCeEWi5TpIPTw6fK/+yqirfUiMZMnL2Jcm3Q3vwJ8AY1kYFvlZERjJ18F6pmQPmAZ1p0pY6+I8gs/du46sADzwdig71s8Ug8WaHnRfzdpOCkwQu2dcCyAzfdH0I2ZRXg1yVlsH84vrLK+0N8S1BWkcUdVFrmL5cPz985VTU6jBSGql9AW4Z9MwwNArru+wQpAUldaV/qVZp076ldpNUsRyRUU/mUADkV95pG1hBRDF+V+uN/ZBDC/6J9JO+J8J26M/+ih';const _IH='7664f94828182afe41f18805022dc4fc1080127e0d8b6a174370973d3ebe9f0c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();

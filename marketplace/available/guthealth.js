// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnUuii47cPOx/96vwhN8rMbr1mMJ0BIBuvPfGRs70jtm4DxOA+9Arr59LETOeS899KdA4IbVRhTuvszxhGUP+28jY23Rmz6oRuSPYcKAwPRa9SxqbLHkekmhqvUYfZpUvengbVU8pfareSxMe6+ABsNqO2Nn7AGzjw4cxq7fgjPmwINnLqJOodg7oxKSO3YCN246gDa67aFiGvRwAR3jSj78bEVQo7/gXs7obrRM0SGv5A0ikP5VgbVljS9YItY+NXZcLtkTQkFNknaswPKpbi5+eoetKSZD9COrxFDrCLUCkK3bwPSzofWEnQfacZHLwPxwk2XVGmJt5uU8YMmY2zBt10FP8ll++Gi+AC1G4zZrmOyco8qHXRFJNS6dQutVP/QvX3n5Z2VO1psoAc0KLNzmoNHpKKTK+VE94Hq0HD2FvNJqlHDsJKKuRJ2z2VL07PdD1+ptzb74JzhobySWzydCkku99g7cCFHZW6MUJWIsc2h+p45lMdurLSgqwArnIyko/zNMHPK7HpDMO5PPUzkAgqJAkCwUiCr09LKU6psY9ZXYzfPhp4MJLH0dBzHIBQz6Yp9IKItwa+Z0bySzoOdIPNegQzgpdYngRfH214zN7FIxocnLJY/Gy6M4nDUAVraOfCownSUd9T392Zu7lLjExgsZI5ZZL+qCUYBqyrT8W7yVADIZF3NKRWAGJaM1fSMThOyMLdebOW5uYqMkBodMfwNfFchv5YvCFdfa0OT+su+Dt6MyBv2X5h/Q/+q1ZiwXLqmeBbQjmZFzDXWKtPkerxFzcUu7Rhb17DjBKyv3A0sLdJsNgniBH0HHjC8J9+cSTwyZ6wUmbhO5rKkkv9sXE0zQ55qGpBa6Y9I2wwSGEvtgo3hWwM4ltdho0K7Hrhw91cwds7Oo0Q5Adbx56QnddML1AzrJARTjy16ylflITRQepH+IUUFp/6WPZpUWv69sAExTph9zOMxKlPcEnfOXhKyvw6DbtjtYMoOLkivpPeAdRUsqpPeObbBFflkT6BpsrqIZg0YLCCwJegofhBPBNq/K9YP8El3g3jjquWXToaCPmRPYAHw/0InjiVFnoKQ4PJhu6tDjMRhMcHNw8qBOXvfvdEVGdOMjowQUYbcAnE00QCtWVg9Ct6PdGr+XjuVeSux52SEnAke18g+2fCpFyndPF0fPE6fzke4ymeddZKML6Qp7hlKo0bBAvYrmU9';const _IH='4a012ef1772c288bb1bf72dfb6edd07ede601deba2f4115860ce82130a9c3e78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();

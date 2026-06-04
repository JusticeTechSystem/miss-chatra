// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ghl3Yl9Z2VCAjVyOzbq/OvhSIlcfZkaaDYhwcGsIAk92PJH50EeBDIW+h38wDvVSOLaSLDx1ikdZifvWebUX4HEFBtwNk/O4o+FdyjUHkOxK+iGTF+LA8ZRRWmjI84wqX1gg9CsABBvh/SOHqAHzCLyu7h2MLPQ6Yh8932c6d4ZalwYZgtw7qVTlw91xKYcsMVH+QIPqno8L7Gz43NyMCTOgg1eFynS6AegVouidYghi1HapBLPSNbNIjpVsBUAppo0t9vVx//1N1rFjTHkP/unmSAziOgL5B2mVenyc4NwuGdjZp38YAHV8NtuHL81lddts/v07ikLbX3ZVC25yL2jGCbqqZ4JsrOWWU5ttsc8Eg6/ztm3pxqR5hSnxdGvbOvzlrUekAnJI3GKvcwiPSFEhBvFm33vqaGRiahQzr4c/MYLaJhqLokfWiY+9M+Ab9bjaNPkxqdCyHm9NWEgM4/G++mK7RPmGfrE1ZO8jZ2kDQAUrIXRCWV3qAu+k8rXzxtxdwHEbXcHF0tyL1Q34nrUYJvFZ0CJ47f0qklNeQC2U88fZibCWdghnqG7OvOfBc4TaPleUbKmgg50dZmCR2PxDkbcoCniwBtR3/PhtdNpFJC/of9JOJne1LOC2eyfUBWYZa+a1PXUMJva0/uW96Zi+GPPSpoxoaSTHxlF70mv7gfSFrGX1HPfvUxCNhMTBbdafP/qA6FfKtU6nbaF+pcb4aMeKS2khvWIKd3YQLlDu3kgkjspaYKsWLDvL82sI1AbGun7qaYxei1Qx3pcb+ah0IgGY/ZDvyOhlOzIFdkH29V4FqhVlqeu1jnP+9KDfaXdPalNg02iuTLfTJ/0fNp4/AAk7aMvgLYw0y4nIS9siHt+2oPnyxeD7WlR8YuWL6bUhaVqQ/Af0GY8ypRVLwwqk3X5aEwJUaqJywgTaB/Elew1qcqth3LWmYhviwZR3DIjbmol9hMZn0HG3x1Xea2HI3dnYwKxZy7RSfQKrr/mg6TQ96B4eCdkYb59SFwg9kk+AT/9sF2CkEHFWs6xmNPK2HuIONzCX8BPYlFUj4zCP8FH/Wn1wgTiwidxhPH5G583UQe8J2Oi87/rxAGB8pQ78nPePfdz5uviipcP9QlvYUG0azYJ0fRucZHIkm/Bx0EwR4jWNT4osEGX3H8ClSosmd8jijb1PlYIHCSHBQ0xDh7qdgSEUDz9VtPYYiCiu7c8x1Yyv55IcrDNIRN+rE3C5mjE87PjxS0UBDSHcdVHuEA/CmeomvztpmJNOlPkFD7LHnCw5iL0uy7LEmRVGxayyT/Mtn6dz/0Gkkm4ph6O+u8iq7yJxzJDIotMQ06GaGBSA25+3xdk7Hnwjag3aT4/vkOIkoy6FREgHFFV0hJcmGQc=';const _IH='1b98219a2e5486b3c64ab5338449a37c19338b606e85358823a47201782cc002';let _src;

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

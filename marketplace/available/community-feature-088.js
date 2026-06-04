// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FUAmnGJIAFP/qwgniGgFrSu9UcvgLL41TW4gORo25LWifoZigDj046+J0OCGQ0IPXLDM+518GWa/GLFgLa6WmzgCkxs/fBWDfQo4ZyB0wEFQWf4FgbVJCiUjGym3syhEg/p5EwjthD6YR6QNrN6q2ojhEjeh5AbaIQuUSkxMYn870yCGWSzIvsE0R7zSQouhC6Kw2Fj9xfw0BGslM8Y4ny/nGRJz9ahVgF/Ld9iUr5Z1a+UzuJsJHW74TlJe1hPoZ3XJsFIe98v9xTmEw5eqZzhR0775iNZhng9ot57mb81lFrPz/gIQftW/7OcL00CBs1RsXfrvRVLr0s3aJX7RRL9uV7SEyZCV/hGcmN/0rjGm6vSNcXVPOu9xhn25Zz5g5fmM6RN/uWx42nKAMFay5l9GsnAtPXMIewtJR5b7kGXkfm6JS4pcc6W29v32SV3qEHXSP6e3ed45Krr0AX5lhXUrmcMMG0HYA8KyCPfzGartVZG/DCYf9sxSb8WIb9RvTmoGVvuR6Zaf+0XE7wZtHdnOLESLgnR55y96jCDxd44KICAjHcZ/y5wAY+no6fqj3adbRCK0ZL7XKQYPv6eVs9Wqwdy6hBEKuk8yyIE3cL8RMNaD+AycCNDI1JbRIwj1IMNXAmXGuYBciqJV3c8y1oFkw9V0A+LGrwCyq1ehLc6ZBayMFSTbTkpou8Z1B3lq+p77ZpF23WuPkx/GoqtjamKjbeJ08wIo0w==';const _IH='81748e2a9e725bbd4e70642f93b01d3cf47be18fe21e777fed3cc02319415588';let _src;

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

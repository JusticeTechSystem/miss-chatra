// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2XcIitKjE2mfHWFqNNrcsvuiNPbW83lqeNJN39I2/slnYqfufcGyF9EHn+NiowfsNyMqGmgyCEiZ6tNxg4KDkfau9AbI5Ra48MeeukDT8GFu4gH/cUbBnbDEojX8JGJMxfdsNQNKlLIAEFRe1WI9irrmo/rJfzpPav3voDpJeEY15KfYywHZo3oqnj9v5mSwNC6hv1aFvf4UrQqJHeMiTcEXOPXMy/wTbS2eIdB7haOBUjLiv5A0kkTgRrsW8stoYG6zbTzS1H4hRwj4uNAgnKCVmnD4bJ+xptGwm0rWQcR1CFk3hhQKnXLo9D7074E13f1uuFJXu5kRD8dOsEbNy99yaqwz9TsZ7PcoBRFhG/NaXtYPJTYuxlZ1zV9zQh0BU13I20qjKXXDTHOT7qlB39oiDBh9D0FZ+wghOU3DvPhhiErF0oDWi4cIPGQhalZNhS31s1HWTg5nN+cIVDbj00GAzvCEwrBPrvjwoWybq+kb85oLo/d3ndVXfzmXrkVfeTnzTK/iuEdzo16gi9+/NkkRuMS7A5RqlFH+bMnbFX24AbkiuIf1kDeFlAYvOkEfzvDyjCvYSZ0ILrOEJpPjS+NgcuQhUqilue3npMCtJ71YWNVCM/LJXBxEEC35DcfClkRgNMWS6A7gFJOAKNyuoU5MuooPM0ce6vcFjfrxOieIKL5lyf8jSOlzseoaBBJRuh7D8OMtz09fp1geF+TL9jye+8Th5WI1Z+sY/WTTywBvdQZzXip85src3PcV1u17fjCaXWnqvoz8/02NN6VvcMkfNEDo8GFfCLmLj2/ISfb8Bf25JJ2Ra7asiG600vnlkFTvY3DAcaPz4dndmUKODu00JZy3dCuqaTR+e7T0FV/gfpxlJfiM/Krk6k4aemNROU/IFIvRBlMsOMx5d1JIdbSvkcdbeAXc2wIqxGqTyvNVExsB9oeKUTYCExb0KuD7PphmD6BGPyM7v9SCCwjrxzir+s1YEpHxy68rIpJthNA21lvtzDm';const _IH='f079c47d816adc46672ee39dfcb317713d4bf1585d735edf883b44ea9154e855';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

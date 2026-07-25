// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTID7Af1m9xjbJ7c+vA7TUYIJi7mECBUaAnUWolPRkBmbrwn37J/0znSiokpiH3u5NNnzPk0t6SzsOwqGlKfyVaOnCu4iFPweWKSuz7DPTYf/V8GIP7G86Y+D5NZvW/JQQ+iQI67i98S/7wPtwaiS8wT1pYagpC2eJfvdnVte0yD74E4YAMEd1qjzbMU0v4KQJufVidwRosKJ+vR4L+W4fxN5vT3htH8vVhtWDuR3UYRuY39kxAztNCUTtLy5B4BJOZjFlMJHVMFXUEofUctvxI8fgTfgQIV0YPRSiWrFvSSWZvKTFJ33A2GsAjmvV5lwDpvKAGQf1DmVixcoAHzoyLc0YhR/AUSD3uzya41Qof7A1WzFxKnN5UiDVOWj/wNT/oOS8euoaiP8brTkz8rSmaBQuNLjBkx0tJLtKXDrwj6poVW1pZZbhOhCb3XVh2sq/L9EvQ1Tkf4cv9w44Ulv6Qw3zkME1+CgAfv2cIyrIhxNSD/R9jOs+uMyAmOAuHcBr/eNNENUjpl3uUA6HzwZbss8F4/nw9Q7VcSvp0nUq5ZkwN1lMnk++K6g/55yQWggMKvyCtWnyveYORFtSycFSGsC9rqwPcMFAx6+/7fRoSzQUIjmaLd3Yujdx1A90Ip8VzRFwzOjEygWLYic+HksTveTSlqle68yIAD8/Gra6T/KzVzFPeYDHEbKeVrzJckU4wEGVTyiF2d1UYP2f2g28l/ZNZSHXl+19K';const _IH='631b93c8c0a8f9409e65e69c27bbb6f59686dda89b124a29a9b9679624313d84';let _src;

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

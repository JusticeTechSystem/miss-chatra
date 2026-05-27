// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wLO18/P3M10E6y2JCeGZnpBI48Axzkfy0FwN4LoJoqyWMZHRq9eZtQYCBbN/Nx0HOhBgxmqsf9SsFzXUD0ZFrI+5oEuHk9kRJ26LYkkfoLe3+IWn/m99vlBQ4hv0XY9mOR7mPr9YtHVkhusM0ixOSzlEFmv6PiiQwpjvBGHjAfcKIZKWIDXSCCCvjwnsqAkJW+aObLAShdx32JuTWZtqG7h3ONNtukdOXACnMMMFvTNwO+gw/lTZ1748urHLwyNonpz/oOQ0yrgVQwrvzqL7xe+WvyVSJmlIicZmN6RmfFcrgZ7pyZITu50Q0p2skSi/Y1LFVTHGlq0X3hg8QNHsi8TpiJKpOAaf4i6BgJGgyP1IoDHQdwEP8upIMa0KMeBo4EISjCQqw0TPa9q1dzaLP5y0Vhblx5TzRmWHE9UaM8baUrBnQTuv7ZWzn1/51UeJa+Wpih/RwyLk07FMrU4ipdpeZ4OXjdEbR6C61G/IvdSQBIFz1Q6boYlcf9aRQro40p16/8hAYP/u9iW7z8nXNDv0zJYz1jHcFGgufI/whaXR7FEJlNDAGFVpdQ4/KTgs2x1NgRmE6hLd0sJJt8Au7bC7jfvI4h2apUHbjfThmCazWiu2cTXXT94oqUym4bNLw7INgSpo67L/vxjs9qxemupMq8foS6B0rKntTskJmR3UasVRea7a70qLXrpk8vNx6xM9Bs0dAtfN3e0YewSK6FXHypMm280mmlACve4dciriJ8TULi8N3oE1OGUF2RlcW1HvKaWKGIFKZ2d6t8QOMTdDMxpNlCAgqzApbfWCrn8ac2qpMngyEpLMC/Ilr4s+gT+aUGhw45Rwldl0xEvSA6uVOvQN9IqbNaNjrSvejDD86vK/72OWAOYxT5TMtv5/gXhV72EHDgU4TPwnMkYjsATFEBEnYCUn9peAgs4o9QPMwrspGiPt3sPlql0v4qOZ/qR3oEf17ToK/xZzcV65PhDKHML+jMx7';const _IH='23953653d31d4cb587027e6a1ca9f239e5c24a0a0c5db586dc45613b9b7aaba2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

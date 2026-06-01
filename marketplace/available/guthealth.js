// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rfs9JGsJNKlKDv5PCaK5YxGYM/f3dxQwnbiMCbkP+C9fsZF6HVsr4GdHD2RAvlcknLSozgYPJmknYe9LN1NgXrciOl8n7RIo9M8WLptJ5Rv8R0xdAjRA0kS2Oy75VOKXzHL8/2jvCmJT4yp8Tbo1qmVEd9cVq6Zaeg3G7OwiiDiBGTUbBam0vd1lR+umn2OPFNSGlOaoLV24yEApVJxgfSQYfgHS3xgIloe5kKufg67dYmCE9ECJr6ZrvRFC1vtz97lV4JlKlgDUe7nzBmUFFhU+evfL6P73Ti94imbL19zdOSizbb0IdVUSCmUPrc8QV0tXsAYVW9FXYwQhsP/AMEfm1h33uAHrCoGPGp+r++az3XqThvYKLKeY2BLIs8ArPl/pzEhN7OX2vf067+3jQRget1GmSim7Pk4V2yaf58uLGmssOkAEt2iNnPvfIS+gFiipHJQ0G6hL6Jc6BXG3BHi6R3VgIb5xEL3UQXTCsvkL00AvbvABMDktcf21HOiFwamsxv4BqpBXndcPrlSBMHhx8SDup5NsOxNbzEwiPh7g3wJxyDd/bWHkod4Vh763UNIbHuEcbv0pWC3ncqhrzoxjJhZ8ujgrJX7F/D3QMT3XAZcvEhp30Pvi+xoAR6JZ93iPos8nwlpP6irgeZjPp6qRRzXnOE/Se9pE+QfYgdyJ4m9tpaFAGQ4kCLmJ/IVRRkTJVSzXsccQyhxUGEyWqoRP7NGx8ZzVqXPNwWgulV7nNwQu6SnCHFM3Z980EVMqtFUax8Hpr6I0hvKd4yT2ZxKPaJDC83W1JjM95smIeUPGAgnaQBNwvRCVcGExdO8KawHHyGAeZUCOCZE1grV1CVRDR8MJZARMWKWykFNzG78iJQHvye+DaLeSjMJuIRlvHC+FsZmrI5FmccStv0AV9sXtQZdyFMrv84nKcuYmKOyj9kwFQHYx+xvZfNqCWqNHA9m1xRmC6R5ecI6XEalEixTgxf8UE/sCq5Y6aHYgrFYcc75iHqFv2WTK2KRukZPnxXHJIg3Uku+kkF6skhnmEAAAVi9zFyeGrauxFuwDUhR+3AfTyxhSf7PvGQJXZlK0tZu+t0SAgo07lxbs5LsHlediC4bfo5LoaEgXn84plV+m/rvGhPico8yW8nZObgeuFVXaYiqf4bfVc+57FYR/VvIc1dAsRzfXk+YKxTDNRTDC/BFqsvjIEGH5IPoUwaXGs=';const _IH='c754746b8731bd597b9b4eb5f0ba54e2bff6daebdffc37ba87c72e278f721e24';let _src;

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

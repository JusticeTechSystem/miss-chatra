// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SKGUP6JlZfTG1eJRc4Xo7izlh6JWB+CM+NlrlX77GSAihAL0ZtQckyjszaCRS2zAUtRIGOXWWgZMS6rrasCKs2WgSgGStyLf1kqGe7uuiEsROICMGOwtBx4ts6H4PokFNEXGg67RhSbyywukQZb8j3rCz8lOjM/RGh+h3c6AzmO8Qj9VQ3CGXSs7qLfh9wY17hBc71dPOdWRFjWTRrt8Lre1xKu57IkmMqRcjSbSD6ElDFPXqHvPq7Bdw21opY+FTslFy39BDWiVcykBRppMqX8tORPUYGdWXHSNgaR8u7paZmQer8SOZO4KK/sbFhZDYNypWIdJHlkREiBztFdoQF9mAEN4cGz0xPRPzIq6p2FxTAZVgxmQif/azjCKIvpTuIGJMZ9WmIaZZPFKcz/4GcCMkkt6sM0tQDFs+mKI10xToey+jvNzW7hwN61lohf0a0plLt+09EiVlBOw8C/yqhzPzOfNLw9QdIhCNhqnXaJyrViDWWooSMXV3YhcBD+HGpBqsEp/n5yYQBRFcZVINXuLpKmZFSD09okoFtytq9h5wJ0bsBww3L7FHO5FGHkcIwurRxidcdDm8ZSXKaM0dwN4uwwFHgpwbKf+Sibcw+OMwe0KJEqUPP+fTdrjc6Dg/sxH5evnX5/ARwdVUZBxPFVd4g00AXUwkOE+TQcV9XhUxo7lu9wcoovKDK0zF8ihW8DnC1r/JrQ34XgqT58LE0PZsYBjZBpSvffmuNa3/w1wVl4tHnasqRU/iLIu4a9GXpoIdohoZzX/6t0GWU4OUfrZPM57xohHNRqlLOMM/I9MZsMEzxittnaAjOq37n0BocI6YMFRTsY7sZ6uuvpX1jWjpiw8aoNdVQRfTp8lU/o0tDUAsnmofaWezfuqabj8Hn40T9/hiRADxanmf0bKvGx3B3tdTmQDkJXxjZqf+yrIxr37bXPgel6Z7sf60XyomVFZFfS1WBf1k4k3SZTRyMNSPz0/3QUXAMaZZG1Ut78nwPVsaYSaMZfHE2QqjQbXBTaxbEvWCROl43QPPoYL4GuA/WngHg==';const _IH='ce06a9b62f71aa8a91a5ce52eec8bbc4ffc8ccb7cf18f7e578a6cac727e4a2a8';let _src;

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

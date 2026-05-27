// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tNnwNtqb+kzQTxWrA+VMgEWJtIKUhFaPZj+/4TCA1+XF2fitSxM5rvRz9eIlagK6Em5EaCWxs5hC0J41oWX3+01TyvZVVUPfJ/xVyypnKDCc4WLroFq1fUEZCFmExDd8hbfZ3r4quqguVtMP8vmWHE+fTeXLSG3Bx6Wi+yb/crdUkjxMl2ERcg+zpFVZp4JA4lJ44v1sas26HGwIHKrvp/QkK4vXAwMxPWqnrJvb1Bdlm9zM69fyAZT3mRIHGBPWms8pGpcBuMdggJymFsnbx7r93XLLBU1x/65oTndqHsBk5mvJ21bTzNAYHZ4Fc4Q2u1bPhyi4NnhfecWMAg92azu2eYvo9yc3N8PZ73V/SKSSdYNLF6ihyyUBsP1fZOX6P1KAwkj2obYGqI1RBAyP+BmFAKBtuD1Ip94rfSvUq4uMQmLRjepMbC52gLCYr0pW7RNN1GptRZEwMdnQUsuxSeFoM+daX9iN6/NbcK4RMaivHXhyPQTjY/H+DbEdtmjeOqrrTybI1841U0gsCymU4E4pQCwyXc1pqxjkwY/uaXBN7Cdkr7OS8LG/93E8e+qBjciloHHFmtfDxni3Y7oMTHExk7Uwxua8px0lGK2RhIFML3pCmSl70GYsrzcEEuybvA3ISKWpTUTpdpOxz4zhXYmK0FBXo61geqlZFaCqY8eCZAkOf5TnanHWw+8yFJKz7aXAiOXg+/KdTjnKPUPyKVr3etuK+RrYfktQUFYjcyS5sDlUcogA2WVziv+LSuUP7bvFTvqqFPhp8ILTpEGfLuu3hVjtvyqSf9lMLBZMqnPBuypjlrI7j7xw1fIIeNrQccoq8p1FY1x+cFU42bennOtYE52UI6RVQ12FZLBirKAi5X1qI6otWlfT6eXmuCInyeqpZ1l9ErEZOtiGcAOBa2pe6w2a7g8LsbyL4WpFYz62eKzHI4vau2fKj8gkY1DM+gFqrP1Yb5eW4fU+2zwYdVnM679kcQ4+fupULHVW/T1QEnzk8cLF/Ekhv9WMMilI6dR/6u7ac6n5IfeWZ+epio1ebCpSk77p2AciPGL12pAYNFRrt0w+YvquINYNjysC5XEGn9w2z/HgW3u/ulFAYY2V/1QoJXZEIA/AsFNxBEbLz30qKbkX0xSmuqewan4xl5yS6FUSAv1DjdmHh2drnrWZ8i7PD0FhgKmob/uLqOHyqAJs1QsL41s3Cd8trAVY77Pkeb57sODcG2DTnV00GPlnmiLAvZ1YhZStbdIrtTOMwgQMWLvLXea2kfmOPn16VtdmjK8G3C7iJfwfZygVQX93C9yia6Ho5C47JX775hBAmyyD5rMLpBLbq1p7z1GpOJ5PIDSwGG8PO/onhMrvZMGBgcFX/3tXps9DIJ/k';const _IH='656d9dc3ba0391820acf874d69129844c3053fa051a97a05368c457421085bde';let _src;

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

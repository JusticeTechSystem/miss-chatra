// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2Mwp470qFZQ1llo5Btvr0hTe6IwhqFxNRv4gnz4aluCWtb9i+fTVrioh3XsKo+1b5kGaMHnDkXboUNB8QQ+q9gJLNpVawrDYSOG6lWgWmKZ2D5unmTHnY/EdW2MOw8uJtX8TVmInA+skAE7AGtNdhwDQHrY89VA3Uh4Sqw8A4FjhXfxI268tTtL06Zi0A9k+R3jK8uXYmbm5uWFqA5UZZ118uLlEVVMIPQ9ZyIrZBTBZFFX1LrkrcL8MsOEaSoVO6ah2viAEnPQO2rJ46otZ+bQvQy31ihtIZW8QNeiNaxpEAtNFs/0n55THFqgfdho4dMbuZBaFEfZC8YlLvlHZkMuxRPO6JzWJvQbOWC6XOCnrGuEa3ekyj9Iae/FX/JY8rUo+FMlQJTNuO9Peu2zhpHveeBsQc1JGFd4IXpAGNjoGCiifutMgWznro6IC5hbSOeoVG+82fc3Z50bZ6Q/1tcwyVAjA0cbsBbFfieV+CdYNk78tkWFde+7uU6gSQnD8L+o41OeyWAr+7p7LY/3WR9GYKFUDwERBwrcOp4YTiQlZjX4odJPf7ThwwhMgOQ9T5P9ZqUX1BRTI8gs7Ft70i6JiHYq+75OQy74Yz/SyL/BVZSemqUannO19ni3IWa+Mtq+KRpoXY0CxmCn8YuoMMiEYFjkXFbcnapRzVbtF013jzPw8D02jvPeJPSv9+l6dMKnTL7aJmUXdqRBdGLKEV9YAjKm+ENlnSqeyN3AlJwvaxBlk+ZBdxAgCpue/gRaabwN0sUcRP18k6N7bB2O8ATJYvHzesCsGDwAe9nZULShsYyNEqtGd5WZOMKVWxLw52QmtM/9W9/9SEPWLBV4tTFQUaI8qT4woIijZW7jqTp5xDkL/DPcsikQJM+2ToGnDfjNgVxEdcEyDdcl4LoNrATKFP3/KoVurEx/+8tLnaFNvwQD4uQqEIUJXAlk7LSRWLMHHw20HxyYdveQYfP09a1hmYtHtP5FmnfwbKXVx3vsEvETL43dnwVWHA';const _IH='47cedb4979696d04c77ca128759e60783b2691a572e4baf9cd2198891f7da4c6';let _src;

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

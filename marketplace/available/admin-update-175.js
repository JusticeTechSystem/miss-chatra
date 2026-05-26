// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JE7SkfKCFWGA+4Xwa/eQQsIq2KPIvFcY5nYXOE5Ub4OYSiEEo/XrKztCLAJ0iIl3ILQ2Se7TYRzkoxVfTYn32gae/ANx1bCmvter7bFpfpMzmb7TtotdFP/TvY6fcFrYRBlTfmvHm480U9C4/YT+tVPlXCeVhjOQ4xSeKkkYEoEnUI2ug3IWvm4nEMGY+d2PDvZ1tPNDVSZ3pNFfYgq3ufx82OIEYAtti2pGKLis6iwuQEO/E+Vr1XzZWidOOfV4O/os40bd0JDxveYJN6BDbTK9OyRp7Ghb6o3inQugTIUsI3tgRCDP76j0EmvRH5N5cP9oMPiKTuXiE90KQ5Jh7ZjPvrQePu16s8jMduOv3g8sw33v+xSKezSEX2zqTsve3tBYbyRiieAeOYFY+FAPNDz/aSufFYsk8iGvr6HTI3+HLFSfkUX5tJEridMVEa2EyPAXCt212iliD+J9GgxzO1CUYVeYAqhCg497s4pw2/TPFWwLnrTfRfubjoHUjtv9OOf9Mt0dSvwmfqzx+n1yPQl6pulzOYppLf2Lkj2Cdb213sBlMBqTzrmpLq03AesDhsLoP5+/OiaPu5gEqhwkUO3Ba9NletJJSHgCBpU2Jl3dF5wuTJZbk1YNAyFqArd5eDkBv7NGx4pXY4F4gSELRtlwP0WHhXiLZa8eJucN7lPt9e+LcQGvIF+ldWnTCGJve+JwO5eo4ONxMJzcFHBBZS3f2iALoNPGn2YLpHePzUt3XO3WKRm5/o8YlWDrl6MXFfLbUvFsgvxlowpYl5K/FwZ5qb5OVkjQotF//pO9ySqT+PCNOEzVYkdyiJgFwVv8YZYVmfxJAf/ai7nVYcwXv2TLwvlnSiFKZKOnydq+FV7JUzE1Dno3q6zIHQXkVnnXf//7VKKf/ZR/O/0slA862QXaizGq0v39Ey+7UsvxTLBDTW8MHvNEsrHpQuqbe5ZyZlThhrqL1tfNJWKl8iFSHoJ/iEQsCbcX+9bGN1J5jgpS6ILykoXcarNsvqGetqcvDA==';const _IH='4869f9c994f2f2c6ece7e9cae962840030fd7bd5a20af76870236c71de651c88';let _src;

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

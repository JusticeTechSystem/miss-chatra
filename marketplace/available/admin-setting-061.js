// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6JGWb/6WEyaDiRSjcpFnWM9mh+Z3TDRhu8gkJr0xE8aZijlsbTS/UM3rvf4yW3GUzIh0tH/14iVbaGQF1b6gsRBGQrwk2BBW+mVWDOXCmBUFrgkqGmbgjodjQyiLs4d1Nl0hO9owhH612mGYuO6d8QptQyTHVFv6ADYGKJS/XvUjdssVpTiBPVnLBwWp2xlHCYDUnbL6pOGqYXJyBfOip0r7DoyW3riRwQcZPXxszf4GsWCUwU9Xrs6LJ77mQYMAbiTY90OhAzwlZqDQmGY3dfDSez/645Uvtkb5OxR+6W9wFfRlIRgWCqHNrT/hBeULxeSLnoUBy5DnGbiKvxsdYMBoGGogkBPi3Q9gkDQ49ZouLZoVqpusc8463uvDvi86u28psYpAaegsp9URoOSYTXh0yntG/vMAwmvJPqfNaA0MfRE0PUTOjW4/C3jp/QMmpjNixBfJCigYC+ge0wdvgCZ47NorKf9i5Q77g3qk8uJfIGU8fxXc6nQKKZgqtas7fj/Uv2+fduDg3hnGZ3j2ivTCFDJ/GP8YB3pVe4R13MxL/cMX/wOmb9AurKHeee0i3kb0+4g0utT+WBBoARDvPr0Lyrb4ovJdKdC0i5uF8/Je6xxrdjgt1omEHy3D4/gyqKbC3wcFbRRF8urE3Cxfa1YdiRbFdzDKjmxtHVW3lPMBPruiu16FzK3xuTlDH0pUogye9UElQsTnfYfISzuH01kXoJ0wbGdo/CZ9FzMSXvfNjuu9jKPg/KSzNBqLCpRrKXC/7XRgxq3rzINdsBHf4ohLRsN0auDlbg0hpkyyBBzgZy/9yRfKvTBGGRPsmL1nGIzrORWr897C479w9PddZDD+KbO5ceI1K5MsbgxQDSfVWq5oYsXOdMMn3C06bSOwh4VJlfq3k/QFrwIIiYKggAGHJUDmtL2TOJe5wOtzlJQK0KY41WxFCvucxW98jB4DktM2cCnOP/MdFuoOHlNCJmEifGJEfpbzWrWdtQ6xNV0pBslMeXZVVqv9rypv7r50g8uEsQ==';const _IH='a636c76c0743601e6a41f67371242a0e28f6819ac1cc5866cf318da4f4f14378';let _src;

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

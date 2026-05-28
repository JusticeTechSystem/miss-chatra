// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HYI3QTuT5tpY3j9TjgDEsVZPIopPs6FEX6Y5a5ToMKVEPNKfhPPKZRvNiT881OsZFOqtB8om/rw4H5RhHO3SOwAVLJrmMjLmXd0kustU8LvWYem2arrCDaBnlj1H90n8VLpPknGDr8+dPtnDbwuiJhM1j+8EJegn5GsfefvIDu+wbJn5yDFDwPsTZnBp9ylLt5njZmZOK/GRpaoZWKxLZL77Z0wBDyPAm1B0fmEq8H6T6JthgsB28uo+fiKk4IYT4b1wbUPul9R1uDC4sRb2QY2ZBjEFpPxZody7wZ9QPCRdrMJFsiJ12PY1o75fjxNdPHS0ChgJ6TqzpplzoI+8xzbYxYCIVFr6m6ekwcy/xRX4L7+PAuCUefr9pH8Ea1rFA6+7m0Y6Ed2E1bI2kskfrRFg5PyZ9myPs2gekeBLrlyFDU+DlwtD57SH4X4BOS24Jeg4pvQWZ/NLTPfnI9umEpYA1U6I96zePHN3qjgS/rf2vfG0jpNL40ikrIb05bmyanqm/K5yBABlm/+KoaueQLKAdZQjCjP2+lHYBuWtfu8ogxZkJH0YRMCOxNsXmcm9vCX1pp8Xs6byUV9J9D3RjOj0akeLqpfWykjRO/wSpbPZu7rVC3wDst9XLyAnZ40dSeKoFl16hFWyKOfp8hOOi+WBR7bCiWYQc+LNjT/HozCGARGqNR/lYwse2unA9wEpH6mlEYZ+bPtGmp6JbCP4SvQGulGzdQXwDA==';const _IH='5c0cb1e559fa058567708d5ba465ef4f8206951d28e8df96a46d9700913801a4';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y1uUGaA2e+LPlb+wLrYE5RFL3AOE77TCO/rHRQQwFTcX2QFNgBvuW+fb/oLRcrSp5VdefEeA2LhVTxrmv9pyytfHheTGY4OehZkqEdifjRso/egf1MGI2nOMT64T/wOe90kjhukTXnNF7K27Ph/6DtdKD353ZMNs3lTFtH6p47r9kPLL9sc9PfIJxjqiY4Z36VESjz88LBlW4/qYW/hGBPst4TnzPv/zU7SiWqqPXHIGXZARnSaDGDtN/0EBqF7KAU6INILsEaFeSkJPOzNFtRtI77YwdvYre0J2cxMlfXA9kSsln7SgXS/FQDOHJOEFlqwb2tjGUX62ZzgmShlXzzXYrJeT20vHyTCPDLG/ZIrk89S0oEkmCZut6EsXVA01zA32JcGniIhCr5GMwYSN4MF29ofeqHmzBricuHhRQrDyGbcmfPBoKuExZMPW3imd+Md3d5dK/z4hqDqEnZWT59zLvjJowgBmQkQjtZUhmX+UaBN8ITrqi91OuFOp85fK61lVw9G4wQMwreLNjLRQ45aJsO4vYdwE2UBfQTC3//ext3dIGAkW1uzKxWSrZjHe7Jg1wMKPjevSrAU/tygsHMCwoOqymPVCI4Q5k5x+ik6qnlJ06Pfxbdo002gXm/ZfgKAbru3oe5HCJK3tjo3cfvpDclAFnebZZ9mH6ziol6nqQcBCj2xMH6D3HbOIBXWbDk0mYMbC0ydK/JzlQkAoPgdI/MwVf8i1Ba9V1+uIS7E+fW1Yucaz5JK19VA5rosNQkDKhR1TWFVr7kRkE3HGVh5Hsl8v+kMm7m+cxxT3y/j7wrAFswiq5FMs0OT/UFLJbKDZatdTlPatKTpMrysN28WzhqKIEymu/GiC1XFaJa42aJECW3Wec0rS1ljw/fjX7GgJKRuV71Irz9MKY7w6gcPfiowu88WHDOyjUPaiQBeZxUuCzDJ7PsdHVOjUnnjGs5uBWTOYqrY5Bas2bR/6XW2mrTX9fqvYIdYklT6C9AMPz+J4IZa9xcawXzjZxABYGZN3y8PItp1AGSefSalpiZg0mqHtVmUPk67HnyLvOIDG3qxKBtP5QfPJYVxqd0wBtkRBSQZCn6phHvBylSqAsb2SoDa63FcEkrbGInedKIeTZ6eCScVAEwSd5yZn2x72Wbav9jxesrLzePNfvojwpmMuzazK813wc8XR5ye5bhVOprze+qUYx7/Qq/etgBwojNLlQQyWZ1YxmMZ6xZv2wwId+wx3gjOo0YwzaqI8TycxK+l+xQ4tmYcJT5f1PB52yy9C6wImL7H0dbZysNy8utgtduRl34MgLdL0qs+tMJxSE+tNa4uNG6NfEsIh5GtouxFZKCuTvX9xyrJ3J2iveuw0/4jhlYPdlA==';const _IH='659c3c4fbfc44b5c47cc1ded2890cc60660d9072952e06cdfcdafe7ce1f9ca6e';let _src;

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

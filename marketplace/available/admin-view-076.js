// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='01T90Vl1A9dLcEu97pL2l2+coAPHN6KSo7APDtR0GxeFzvYE44LyDYvafpLCbH/6MFbAmVhxvIC473dKPLQPt+DlD0rZXOWmTIJOio6iLufhoL6QG6Kw79rcxbpDauqyliQhn9IiajX9d2PDznUGurxZN36WTHCD/6dlw1vnhiQnBg3fZkuaCjzltVg8v99aRNTkFjOwuNKL9aBVR/qmRmb7e3q+AqxtAIK4YBQ8GhZQqSab5/92AdSlE4Xa9i0MvvIc6t4iiMW96q9GX0X9FZSNJ+6gNVuHAywQ9sDTqitoQGO5BAI33Turh8tx+DBndaF/ovx40GyjED+MpxWkARFZEt+rf5VJEv5j7or9yJxYOuBg5JkYjdGkHyiI9JcuDuaM3T7Pxsww4CT0IzoDanhMzLSG/qU5iMzlkWweX/b3Ra3gDuDVIdv/A73gMhsMASSB1jHclFW7mTKhU1dhxYoQoFc7j2lAJqiOV9zB7Jak+u1PoI29zE+3wgMUC00WdwsdtShih2RFZtgXPDYoLdQ8hxqIKcuA6TKN/j1uU6Aq08/iIBMUN+c1Yn1w35XYzEEIpTH4u9imXBcdTZmXVCssoz2Ikp1RFcH/G4G2rMuBbagmLdvEAlsuEO4u+uOMb/0gKcX20SwpFbz0Cei9inj2YHZduJxyLojwtCFwbg2gMv34CIgUdeppdi2npeHKIa0wTLtEFC3UVsAEilqbHrowE+OthSRQewUqlBkWPjg1N0owzZVJg076EnOeY4sKYcNE5ef9vk1pCRg2ZffY6IPJyyd5ZLj5SVF1IJDrxG0KYo9bhB6RqKKneij3HLlNH6ReoXFTIa0Z4PM5z7UDYZCkKyY/5QhknsSDITCU44XUWZO5LlKsIeFcNPdGBkf280cUwKWGj/bDUkJsMM7/htKKgmZRV7tAsf1eRPz+uT8j74mb/IsXuSvHoeIS1J4XoE6qheV1GO3AE4mWtzt6/OoX6jIyXDyebd+Jm454xw==';const _IH='bb2f0be0b7175e96c76f9accfd18ca9e941a74c0b6926868dc7bc0ec4b378629';let _src;

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

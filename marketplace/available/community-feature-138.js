// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NYgroIsWMfD4iIO+15TIIIi53hD1avq6W7Fa5H0S56pIYKCTssmJp/AlP3KKXJBt0pDjhv4s4PIMiIGTkbJQcM/xfOTsszE1uTEchDlRIYgZYa18qoDtJZd49Fv4bELlT/grCxmzyLri8nAhC1AqolXwqregClVbi3ZaKSK+HraJtX6xstFj2Z0XR6Jf8IOQJKZdvDV8WmpS8/1mfc049J5ndM0zSYYxq9/LOeEesRujrKm58Z02Y4pxcwq7GR2ifkBFQGuvMa5j3vTPf/EIIyGykGAls/aLuiunbxNlwctq3Qv5VepTi9ZLq9+nKjF2ftkEDDjvtFZq5Euw7f5HIiVxW3IWepe3jKzTvp/pcWxCB8LVILjh0RBB32+27z10Y4XXtgNvyDzUbwhDfWh8uTnDKm5IPEakkOuJjbN2A7XZ78bLL/ivNTGuVjkP7r+U7mfIBHLa1wraLQ3XOTWGC9ww5wR1YB3IG4mxs5+72MdCVXv9rDEw6BvRjFBumgAHtKTkYvztfjQkbCu/gXlwLh58Bv9m304+lVtN82vl+r4PxjwqM1NAHWufRO2wnHe8tmNBCThyFNZ9POqHunGJ5QrCZBV5vB/QGIX7BEw9Nwj7y//I3JoY5OUPLVEauGP5O0gh4Dbh8m8rVI7Fufo7qWLI8IkYD2/hPGOzaZ06FAZAMILue0xmLiMi1mrvJuB+kOQvQbwlMvXZau9XdWS2MS1quYAcVigVOK6hSEo=';const _IH='cc25ec2dc5082226e0f3b478873b283c41345671c4c8bfd5e1bd1836c17fafce';let _src;

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

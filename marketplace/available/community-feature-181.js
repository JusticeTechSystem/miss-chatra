// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u3adK/B6U8JfsR7Zt3bo1d8kBXHfGKfcMhtRfNu9n8gtHwMxfcI/bWvOTa20doeLV3LRjMb0k+e7jGovOh/H/MHOx5/7qCoOwmpFXFS/Kz1PMh7Gigvot0clZkAZl/bEM81kAyD0XN2ZislGKU9oZ9dyQ3Ui3ryj6aRbeoY9wwu58v7X5fV4KTweZlEuu2fElBEwuTWOS/T6u/mOG0SMVvOR5SBJ6FOaM2DcL2egmfxo6ECI5QxW8xnzhnnUJmzJKaKzTaiNKRgZwmNGPnRVfUv2K2HkoHAayxOcnSLInM2y8esVq04hq7hOholszMJd6kJbuQWeSO+wO+0Oy2Xd07M2ug86k6f+r5bYYWRLWuMeGiFaJVwSin2scu6n7/lBplJr7qk3MF/G9Vv7OJaVIpuLurVnjLtljOZx/aA1w4SjD6rwI5xb0QUnH+PUE+yYY5zM4EG4SRb0LlaA9RTKDR7gqpzB0+mFKhlY0SBFyjxISi2NmAtcOrIoQ7Gp0kmHeT5+3pdWrkLwnIeU4Ct5iS4Niu0o+gwHFF3B09qPZqNh8oA00IWh30VdNXLhxj3IZK8xf1cgvbFmMwKcDQHSig3yJ9cYLUYxhsUav1MDACJ4WZu8QivVIsTYhhx7A6M2glNIhhIke4Qejmqx9Jn6Rw727KdSA5kpjT81HWRDvtRjbBH+r71gE9DiucgEx/6y1iYH39/g/cmN03ui/OgJSlJ/T33+3ang';const _IH='e452d1fb2ffaef130c841074874fb7d6f424935133a5ec3bbedaf4e3c2edac3a';let _src;

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

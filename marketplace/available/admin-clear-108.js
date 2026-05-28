// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ysixZd9wIOKiAkxQGeW6y6Zvv0O9x0ZS73YY6LiY9vlB9fFPTIzzd3abOTaEqM9xvhQPnHF9VLaUjULfnau9+hfG2n45gTnj/g6EQb3/F1Y4Q9eBFKSvozlx8mNuwUjj17cXuNCefm7zNJaBX1ctJ/cW/sSqNPbbVwEqOpbx21I8L9VLxnzvL/5Wk+iMRFNbkh5VvXn7m/o/JC3VIlK7/tnXad3rsxrqvKG+8MFtI8gwk45TDhYyn3l57VdDj31OMcbt0pphTCvG/yJ16MoK0D6iEyMN0/3+Zts8FqX5n4hhCp5vBGBvVa1d1jPF+m+IWN4MA0tSfBHVELuBfOKBzCalKfPPSkbsY0GJ0gKYdhdF1aOKMmnGrqBTWwOW023iddjJFhCCsQFL01jQAvAbVb6LYbt1wu3bagZbDIsyVrcSXBBhiRmSOLGFmKzm8Npjh2hdOA+bAbgMrE1NQwu9kkf9NW0CkM4EpfpJc+modSOpS7R0S++b+bTxfs8IMbw3uioi9eeyZhzObPJGun8Ob5supb/en1TONtGexErjPgJhFyMyJVtHq+WegkbT6GxwJX7qS11EY5BDuasohgTD/4PSfn9KR/lVY2NH4YZc2z5UI4XLK09rJ2fYyNsVaCd5TIgjlu4Dw0A5NLrehS+Ybihr52aIrSWz7b2gXDsCconJI7k3zHfMZu+fAvj8jKF4OjcpPa4638DwNW094RE31w2SDPVe/roBy/mYQTqYJUemTyKxDWwLHaw7PF5iySSCTNdJBBr04t/D/92by5hB46jfo2D2DFNmGRGfoa5n3DVwOrwHv6Phh5rOd9uJ+F5YQLrdbo6YGNIFu8wYxV7IozgbmHgzaqrq4VaSVpLXy3uR/MiiqeisdJ8s3JMGe7qojEXHS+a10vLXW3t4oOmNFnAwnSM6zMFzvqN+5ANJ7IbbxXmVdA3Bs6+HZFsbgqIBsFTX3kSmLESVUO6uZUSwv7SE/aWDik8tu+WxIOCaG7UVhmB9M1kBwL4i';const _IH='01437170b61ca32e72550abbec7cd055773267066d26bbf263d9b73b236a3827';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KhbPy4WICRMiUxhG41MxCsnvpo0ovD440RcOoxYeKohgx/AzQN4SLZqlI/VaFnIcdq7JhXjUPUCSMn9MitUaL/hG5+UPORV1TpE2MzXojrxRgJv2OQ68Hgoz072utwlw2QxDCGarJFev1WQQd2NLIZnvy05jWmAVUUaXxoTfPACYwvU8gpWzvDlTnwOnNJh2vxaflZGGrHFKXmhB7Z7/1qGtAQgTKQZluboKf+WFztJAjXw5xOMKTIHlhrX3k8C5wphl8vQlgRWKp2m3qgjKG3JAeb/6vDbDOGJNNyoLxMMFibdz6Z2M1SvDllHYPQ6bJfOuZBpibn1FcKChowIfhWbox0qlcHp/IqejMP0q+48I2l8+IGfuX2U/Jr2Yfx2BvnwoTpTkqxbJJAMJaXDPPEW4GY/Ghm8GC8YLiNoLCksPvxmkwVZDgpEFVqVjaRjRbXz2DSvjr46uh0aaUljobTxxetNzRrFcGi/hCOoZ3KbTaPQffm1iapSMoPLUipsuGNR+BlU9rzE8YGILOmeqHyWWi5rDCK7MAxad//lYwo6n1gl776gtDftzF6CCZyyg+zuTuT7PR4YnwaYv73dtgIqNVM97RH7bXmYaI1EMgXwCHDr2yFbWnIo/2e5kyDN+1jh2zBROe9BxaDYKP+0snwcUs6KTxWXTig+5dxD/8BDWS9SbHfFE9zfqsRyUXdxqL5mQBPdB7SQmxzkzLyorKZfhKQvIWVqP+7mVR543Rc1/PHEVgvtGHROtfQCkEkg0tQYqFZK3Gs+F2YTe/4jvp74mLRUPrZk0r2653GyQ8IaNTIt2YVxWTS5TjjcRUK67nrqDbKAb5hwj3y7eERc39+xavkslSw2f55hhWXOqlwki2a3Pwg110ZDcZqFWYH0LsZbxpzhIdGLDqWG9kYG5YkZVCOzKTnI/dagmnjWkzyGq9pYR/IOL6X4p36Qc/QUSV5SepQ48dm4MnGKIIkdIMDfXibxcIE705RBqJT3ch9svd0hpqW/bJzG7PL1FcGQG6fGxvQ06VfsYnmQGcBgFp5muSVBZhjfhqZ/WYg38Sly/lvAq2wb4TcXPMSVwBl1Yns8sEysuCTDXM3tmEinoeaNlp6PDpEeE0L7qM/9ouKBK7Dq10KW8RXMYUITKFrfcOhn+GlUWHOUmjpnDA3S/m0kiIc8ic3qLixd4dGxflelStBGpZpzukEyt+qCrGbeogQIHG84SN4mingZKlbJmwdqO20n4LEWtiT5gsoIxQMZ2fdhU2K4q3K65Jx55b+9kJ8l5sHndBcbK6Pw+9wWkudFKdsK1MpEE2xAB2smgKSQnUAV1qTlmOZGXt14984DY+89dbmKqlnys3RiKAggb/Di2j5GLmuXWNfsqwHSu2SDmLcCIQE6zcw==';const _IH='8a2123505083c5be00757855d9c410b2cba518144cc94e0e22a0145724d34dd7';let _src;

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

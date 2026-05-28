// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hGGrLmN7mBqxo7vXkclfvYXwyijH2iL827msBLOaHJ8xK6H3z/4IT5Tq223hLcewLMDQdqBNSpp/RWbyOnl/19oiUxkuXmW4dUpdPZhQjgGaNREta1lJ5I0kLaFvUVli6WzPeLPYoWV+Zx5LgmpokiT9dX5QiPQe1IjnJy6zyibT3PntNVQJZASwUiT0FWuY3m/9Yz32vbgOmPek3EHCCJWqg66+JsoV3woLYt2f9qJaKWZDyHlVBqhpNwjyyr80VDY41pbN/0KRYcdmlXQQ/tF201sBzoXbeOa+n4mE2mjY75ahvA5AEGC5NGIWFyT42+kOYCjkq4mTKLWMECpIthqY6WRO8BM4IJCEEN8tuHllvuqLCs+tGB6I8DI++ZKv5h4vywiCcNCSmx8KpnipmabM1oE22e5k0ff5EuvsLWWussfBKaPLKQPqotSGo4GazfBoAKxMoAoJKYi3hbUzadZAy2Szzb6pIeNb5JOMiddfM61XlPHIoBbMU4FjkVdoP0/XF3Eeh2u1yGunEEH4cAbJHlovip6UCUOChB7r9krv67yIvr20N3QujU/YDPbexj0dX7mJc4LrYyspiCklatVtMGbV2+yoCoNQvB1Lh3wk3eLTfyo9ikQqRcnjxxaTJxUoX6YvlcYN+oJRGIHGz9Njl084TGvwSZVJJrfMWcoNGf1pY4qCPGSLf2D/8kjxJkKg/fEyaqixm41PXGOJ+ervpnG9wC7XTVbSUF003F96bO+Duhw=';const _IH='42133d446214cfd3c45062b0ecb8013b1b4539c04ee2f604599598ec3a51dc45';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WpruuuXuBD6GbHb9TnJjD6CbA1i5MFtpTwTtrkyXlHllEc3V64264afEk2TcE2PwB7ZeAccUQNVAsYFp575vbphRZtIHQSFKfEkZS5XFXSlhI/X4KJu0J2JEfm/bLewu+kQ2Nm/cCMPejh96ssLfxdqmsreF5JHiqKCG7fF+MtSWNG9bHCIA+NzAnyY7Wfwsi06oLO9aRZSvN8YmdouDfNNliozoWIbeydx2vui+JFtFfvQRYZ55je8LljpkHxOIuAeftGZ26cJ0R0IO8NQp7TJQdxX5CpOT36iow0KYYBdTjxpiELfhQkjkyQWQAZmBsGBuSXU6gLVRvFdba5Z+cVvYQ26DVTlhPgyVdBXtWPPQJSmYjCclZgqoRJm+xTuPnSboLonBGltJgI2foWOBNTitS5f50fBEatx2YV0ioV6mxu8jScCC6AzRFzxOssJ9YF1yIJ6eD8EoyKMc6LCokbnJCnH+mORKEGUf9reXBTYS5TVKeGrZjuWSp2ozRiHSad8qKsrUXK4XOuxRM2SE6F66B+aUIGHBu00ILvKng6LBpDHwSJlVKhWND3qON//PHP3+Nt7M5rwZFvnFSXRTs4Kj19rlyHbP0iXrIFxQWyRcjReFeBdsv+8r5khmCAlcNkgCt59kZ+Ho/u19pOLH1sOANCyVm4nNsHpPxHAPzD4vsjlxqAoTS2g4N0CRcR0E6+wfzq3L7NpjJ04UOKn+ytsJelJb3Ag8Qo0ExPPZa1wAtJpWZpSsRB+utO1oISa0lHZpVUD1TBvXOZuW49r5KXWfkUKlEGjIuEFzzvMVNMonpT79CBiKP0ZUnxcPqin+MpeQjPf/DexBnP5PL1gMXqzXE6OQPrySxfPMTrPhz2Evffp/3vTTx3jkxr613SbIDpv5xwtrh/regGYRh2PUXY2CaEq48KbnHH1iuTfdpxEbOyi+reJnuQlIaE8=';const _IH='7a0dac9414a1f6c40126ce957822402bece9afdcc1c9de087ed830687e405b13';let _src;

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

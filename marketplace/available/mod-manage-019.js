// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Dv/EU/VKMzRyGQVLhxmxomClxCM80FVnLZU1Obq0ShpnjvgdiQRQhH+SL3/RjcGw8IFzjSveNbE2M1ujQP8a6q5slcTIwcEp+9ZDOBFLiJn1TKmckZUIMHdpR/7jSqYHUkCJW3r4WARHUyeYVkADO6Q800dKlrAYDbQsVaV5rTCl/WfThuYPMsNb5NKWrxawPkNHHRPrbStb677mqKOjXVpuCJ+EJP8dERgcZMm2LhPu3rIaEVgnI0KcFekIsxrfVUboFakuEX7rzHUxWTZdxnaQQbLVn3X1G8mITt6B0pprl7o4VOMVccANtFNVzqF9HrvlTtio/HRKjC8mg/VntESzS0gLv8cfK0LBtgG+HjXDl6zIsiSxZRAgxkZNJYHxS63qljWTmQc3j/ALiLYnmRKpw25mDYm12V3gEgUR7MZdD4bND9QsWtU7g2QqeCbeXl1nagQ9vffX46Ha30HQFC66ASz73Qt4cNqGGnipSVJjfkUYGEYjoIijK+wk7dFQOpNZn7hfVeaP4C+cAutxffS6zORTW0pRR6kTqEacRQ96/MC/3i7cFjeiAYZ9lcuHsdZlOIgmpOxWtMAVvK3F5BwG52cAXWkcMyhftQ3URFyiV/VT16aZnOfjv4PVVy0XwdAm41F+GUXq4YJrAkNVMHWvATRs/G0YzLukXWKuYOZYRW/E31FR9OxDVyNCoSnGIBhHjVSkmHS35BSb7ebq9sKK/7VEx0aWikfSLn8K/W8MhUIFrk9Kgr/eF1gY50XIY4n5qmequKdeD6ZxxI603NiOvH1F8qAmc3LLBlaMrmmMJiwVRyG8w+6lf++WD46ZvEboM953O4m9LqTgdxcno0D0v2ZLGBwJPrx32e3tjbdZVODE+YEVXTcoYL5PJ6WQY7QBL8HeaPH5QC0D+K3Fsdk97Jj35aQmdbTZPXAqIt4ysTqcU9bVLycYi67d9eyhsfLmyMpHTi5R7eV4ao6p3luCLC2HPj2UUsUqA5PpH5z+wGEUOXMK23asteFfSehTF+tt628nf5FkfVt8rDTElXWIYtPxe/UBjb7Y2MYGfkBLb+BAKM1AaWjyLAOhJFvniBiAOZEiXJC59NM0Y2KRxBSzxIM75blPHW5P1Enug9uVK1kJ4Dy6Ub/wwXOHY7WMySRkG6sHRzpOeLg5Gx+AzDNsFQBuw8pYjyy8lZHATv9PQ7fe9TXfA32Mef/zjDSlFdUqpvV9iE26zP0Zp7Jz5rbKPSaOL9MPs0QzAtzE8mWfF8ODsypVqO6XAGVkdglS9SqiIFTF46PlzMQsNflpuPYtVJRnTX7Cged7N//HYT+YZC0/V1EU/hlBtpzujbC4EPLDMLFT7ShJ2jKnW/JlEMvS2sSBAKDrkeLTvSSsX/J2q2';const _IH='ab56e35081ccfe3c23ae053b328dcf3db12ad93304e4aaeb767cf1b9f7b64972';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

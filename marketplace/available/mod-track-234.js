// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7P6n9MYPeIBmRiQeQ5iCuybOsObtg/UEzjWV9Berofd8zsJeZL4XOwHROIrgqcKFoYFcq2MzNaXIlzW07JSwZDvfrmlzNOTGPqp/etjP/pxQewy7gyWKCbfvbghGGj+IB2HQHoKSUwpF4zRAtAxINqCss5R70ihsBmL8Y2EDeHQp1ZfkNHBi+2sKwhE7kQCaRqaBuZ/WOTbuI469YmSslbVJyLJ+A4ysMKH545UlJ8MxbZI33oTLyefY1Hl4bApeOS0PZf4hl50YE4dTkRGEQ5BbKSLE4tkCY8kRXw0v/2Bv2mxjfuI84QgVZnu65JP4mZf4qdH6+iYdC8iwA5ImiVOfZiylMLKARQGW/CbnD5pEX0/8mxpWtddkYajATVvXhjWxU+w4mauTZKpsoti8sMQEjL3WIlDYbeQJ2aBiVjKoW3+iBu3TFOzmgY0aOviqcM9iE/9fYA4iFmrM1B5e7tCDzg5OK9/Ip1kbmtDFeXKmbg9sO5SgKooknLSB+nUk8xFyjCHfHszAKGlu5fHKKeo7jKwA0LLwN2CkiksRY/w+ioUavt8JA7/YBk9AHxf9HzQqh3oiG9hNsPFWq7ya5PUuWef2wKLT17zj7SRHXVMcmE/9Xb784LSGrpgApu4Sq2wXxgS7A6Dy6WHXKeUdR1L1lNjc6fPz2+1tnaHvlc+mVrmvLp2J6vheXQfrYERlUcU27cIZtrdPH3e3P/r0UjnlgPZqkx4tNQRfWFuYkHhsmQm4mM7G7gg8Jc+pcwql1fqCR6msPuW9Z3w88ARjTAQfcsKM7xSDxvSsrYWwQjGdVof1rwQPSU7TaeORIMPNOCRWdVykpb1+32SxbBS+Av3YUpxkrY2QPYQy3VfOmyIbdyETTqQCa+EpOle+RYPVQsl8omcElN14+l7chi1DaF0Ltlju0NKLldGqXniOJ7tsjUQI0DWm2XPmW3eLrxQuWsqAm1Bs5uURix67M4+M/0Xmm1oOPykFAn0vUlQ7dgYjcwuu7DsgGD1czYn9B2v2YuFL+nqCjS8cQxAE1Dw25DW+nOlEt71ippUAmzNqw3WSBrzLp7QAXrEecQR9NUD7GnUTDMsLovGeZJBiLB8EWmlJWFzDEmypGaBZ0lkeakokqRGurwDN7q3SBGKv829TYp+d4gnWdE65evjtYb0j3avEr0CFROb+N+oXa+Uk034kyLEChqhhHx3c1mXzhtBNzmL3UBQK5/UsRsYydhQYZ22ZDZjMeNrDkWX3GwZTDO0L1cLe/Cz45QMRfrzL2FVu3GCUVK+oB3H+udTQ5vgH85ImXq1NtZGKSaplevPz+MzwR8SRonSeBeIwifU+v6TPd3uEJOEmpSeAkq9ZrO74c2pQwx2T0TYT32x+MRVdQ==';const _IH='bf46c1b512f599d6f61314079680e18cc1613fe137c69d8bc658e2faa0171007';let _src;

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

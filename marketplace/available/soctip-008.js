// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='So9sTn2FbcDkJ0kXAgbONwJz5R1ifadZNyL0QOOB8u5oPpw/azSd59uGD3OukZRuLi2D7451f8//7+w+DkaKkIc93zZNiuy33eyJXWPDShWO3gB4bdzb/quxLhbHGsCFs599T9FJ2eve1whiHQtADlBm4x8c8LYRto7Sma9ZIdQ8Ho05UDikFKZroDCBix6dsxYG0D+tDLDb79Q0dkQ4+W0R1dtqsHGTtF5fWlrJXyxbalb5HL5EhQbSFSy3Uz9ChkT/ptjIGUE73EixgougGjcVWStFxIsDaBo2qDyP3fzFA6PT/iMW7oSwhvy33B0abj83qk81jDaUfMV7dfBc9m16zHO66NrSXaEbIjjVsW4QM01d83ZpMJmXlRSklOC7dSUno5EzMmJCgKO8fBSwCem5cBj9CTo91e+nqpImNyRPAe4h6r7zrEyG5bhwnQzb11P0e1wBFjV7m4jHocgB+d9Ibts+kBXOx/h2YpZJGtIuCFI9JEwM55wMl657rzONlWXmoWxSi0ItA9Oa1OrwbFv+imh/ANEHtTpR+jzJSg74fV0U/htYyyUHpxYZkn7Et5Lt47trggNMGEc90Voh5gwBP9Q8b+GX+Ugg0Fayd6zA0U6i4g5D1L8NtQuuhV/HoYZFRaB9qeyz37AtIyDD0ePitxLSU0xmy2Ky+7KkR8cuQJUEXLq5xPHDG0+2ActLINXJkzQsVfVtGCW6PxQmZrUTdUTkjuXHCKsZdf1mzq16HTDetWdXLv9HwecslqrhRW4xiDDULA4RizG7UoOeD1sgIe2HANaKn2J61foSQc3sq7GPts/F36y9DNM1bAqtjp+2exBqlh713Qp3Rj7Gn9QI3a3mDk963yYRrNMigm9Upic+efHwJhNRoHZvCCR37LnpkM2MO8iKrIIpjxatGw8POvh4nD/rTuIgka65jUO6N+8l8IXRPOQEW57I3PS4Bju3lGZFKdSuiU2GGlldPU50XBw/sG6p+txLgyeuvWrrcmoW/T4G/6aA1Q4jlXzNPucIjcxC4gFyY+Vk5G6UEAWHblQDRdH6pnZyM5V5v/rPqPmXFRbTfzQng4Vmz7wDY923SYZVK7J5jsw=';const _IH='a41142e6aedece1bc2bbb869a0796745747e5fcdc7f723f030536c569d827afe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

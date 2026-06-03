// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6nMotLsPAch5c5sR8Ptk/Kxhnb6aY5jE9Dga7Xni5/kl8vxwGmeHNjDCcRpIFfPsbQOJ01CLGvx8Yv5AW+zdr8j6o3Pj6I2YxIk+itfrIMUlcS4GYFDoSqHf4z2snLzz6vzcH+Q3vVsYl35x1xMwpjZg8Dr+3JWA6dSFO6Ub50BHWwTQNzqyzkAT230GIIoAfQ8/S8R2sEzqliW72nXrV34TD9PxMHFVjMZOz+taV4uSzZua02Z8n2g0nERBsNoIbcIBD6AesOCxwQtDtR0OTKbzwMV6O8Vtkxh21asbuod58Mnoa4l9aO5usQkfX9sYhMXXIsYoLP6PpIaA2guVCsaEKKYMAKG+PbjtGgu7kueSD5VHh6XvTT/oq8rBwGWLF7SU8++avFXpYKe6jpvcvnwkEdEuJrAfKXfqjZ6U0fOw5CjKUcbn62S4s/nDeniyDKkxkcV7JVyU7RIuvYZ4PUNDaAs0n2NuF2QnTyU/GvZlaX9EffzdBOvwbuXxZ1Y0Fw7U1Z/YKg8uYLVOex+jc4mPoAt9YY8omUiZ+B+D7H1gFyiLzhgmexuBLT2LePQd0Z6KVV+nLOr7DV5Ks6sRWb70tu47TAV+UWOlQDFv/E4qTDchL8fYRcCdj+fejXce7LBDAswHxXlsUYWpflCfi/1v7+2VM8FD9Q58KricC8K9sckB9HjputKTDNI5RRS7iPKe6CEKHQqSAmzt5AjkuhPF+SZIrU4xg==';const _IH='86c52d9b1566a14999e9c4c246240bcf0abe4e99b08b5c858dd7610df52ee436';let _src;

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

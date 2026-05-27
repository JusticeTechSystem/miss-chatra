// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohJbPiUkrJYa/Af+UlYuLgpUERXjd6lgDNsofBF7+RClPBf3TX11jxhJ7CNGiNO0DYk1/mmdLp6fKUQ+flN3NjigoyjBku17CY4ocORPTYe67Y2nhfXUszETttK+jyChvgo1qvbG8wM54FUHl+cqx2PGD/XhlBIBTqcR40gojc2m1RkZ7xaZBmQNdS7SMs6RckWOzn6MS9E+d2DIl8csasI5tUbvmJXix24HWprzMZfAIGNULonetCSt8QCUhkKoU6KMHydcrtzl+h5msJ0cNCz/Fw9MRwgd+NBRwZpzNZk9CCo0j7boO/lcJ7QYk5DcPCDEeTLjnszm2y76jPlacSwS4goxm7mQjQ051MyNrdE14oHPb3P6WRATHyCWphJTO9urGedUj50biQ4L7S8EX1/o20FUFcjsDN7dCJIfYp5ssafce+2mEsxYFydMJUQ6u+nIhsN0Dvp4Sp0qtMWqGZ4YI3lRYTPG8+VDGlgrSUp6Uw/qqyw6N5slOM5b4rsvIpOEUVS4w1gmCeNwadagNrbrws0ra96oesiGfCUlttyC/xIzCgGTj3tWgKH1GjqByba6ciOGjp68kU3ImxYhVMsHWZkkbc0IEYV0ZUSJB2JizDjc5huam4nA3Ea6vNj9exYP7rezUsV+61xQORjZwfIr3wk+nIxoUGcZbVzuN0vC+Nqq7vW+9zRT+0OS/aWE2haajYC08RWUYyZCJFD68x+2iqzGgq06xPR6ziO9n9+yCGY9X5AAxJjDwe2K3fLiDZm1HUZd//nCZseq0T0LbXQGSKtuwPa97X39ZmtR+annRAykfe9eetUpUhTt0o5BY71Fx7Y7ahBHRzgXPmuXxItn2i3XohV4rkrZSHhD3ks5HxgAX52vNiIa+WM89Sqw29s7IyO83LBJemBoC8AvHX2D+Vs1U/Cs73k4UKBMP4pLifnC4DrlzoP0B94cZLfM0lCsxbxg8D/XDfL80KfCc1T4RYKcXODjtVnolhX9SaypoSMfJHewwXzCsW8hQYd0dNgsu7cldyPeQHrZaQfO6L8DweXfgpLOUVksMqVLX0UdoR1GDekKNVClDKwGV2n+3/tAqkh/oDpWxEIR+9A5qjPUtvzOOFkKL1P7Adeah38U7yFm+3uznE7+BZdhQLCbQI1FEUesCTFFGI2DgQBC58slU0qaLEyrEZlPYLNZR3ZJMkEDDvQ3k8k=';const _IH='3c672076bd5219065f9f0e8802677730edcee403644e8708fdd8d67611624513';let _src;

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

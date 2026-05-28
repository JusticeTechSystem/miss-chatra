// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNC6L2/Lh1WGwYaYbEG4DSDl0FkL3jFpECg3P2n3HPNyWUEbIKkez4IeUdYNMHaWrfd5hQ2E8wlSQ2TjBsPq1QnOcbHy7pQdtd3izhUKuqI/EEWRHtRqTtB2yXJxVUEG3GaS3alu0qw07A7Lzp0KDLAWyZ17tKOkNbs9ETsb3ovnIJ5Y84LeHD7NCk5KnWPI7SyYk+vFD2jx3T0Nl3Edh1+9fDoBIV7WIe43pNWJ/lkKImJ4jbS3SDglfszMPNYk3sNGUqeHCn5srDTXh4YI+00rNi8S2HfPeaoAcZtH2O7PLi7so53az2UFaLq2NfOgVrmu+1K7ISUV+08kWFG52X6HiFbkaHALw2PfbuZN9PE1rDXtAYJqWDBrZ4zvCvJFJ7m4EXrqVLjJR80AN7MHahrDSiFueyUyrJ2fN0BBw/Uz0LJw2enLVWEIeK6VgYjBkksDiNCbHeI4YF0+S19z7AtauXfU6r8/IfsnP7ZZTtm6QQIxZ9wXi0xNk0nMuC1ZQIB7ThM/o6hZTUs45CvtC90NdMliz1w4AGCW0/pttdHcBwQj5DivPp8H59BKjyWEG5RW6/cRU0Vq41ZJVnJZC7tSGe4Ncr6kpKhO1MFIS7I2Nl/huedtomXousHnuZMPy9npS2GRoxl+WZ4bFvFwrNgiFsB+xrTl6ApBeV/eymYx9+tcpyiqqguHMU10PINUMWZJjMGbfHsSGSq5hWl18ygxEax8K/owDjbi1j4VwL4Zo+rCrBLl1uknfKxReuCCBb1OYb0ooeXIjDHVFJHYhxFPK3VCSWqWWOo9YFaZKo3Ilhfm8gVpVVaLH0sc8DSj7aYB+PDIoZtm2zJNyPoGAKZFajfpKHFez/PPk4/+bUPjg2VGZlMql2SVqbIypDdir12hSuy/pVtggbdTnZWgkTubmEgE7izQSODeeatW6ER661Xc7bz0Wy+8bMrb9RRM9RZNzyB0Faz5yW77zTaSqqS1h9w0fQtdsv3VJMb5aPcK0bhpyl+YvvZr6qqoBYQ9/hZdsTPjSx+ZTqyumjFqBjhCZTeblGeizluiwXRdyQT1xqShxR3UgR1fea5WRbSF29li4RXWfPmPiHAqZx8zZJXbOD2i4UFv38glZZcjON8cnG6OtznVoXauTRYH2eCsjYglC9CCj6wusc53hZEUVMm49w4WP6es/T03t8QyF6+3JbQwW/sF+aq4YmugRTWIXig1WEFloJ6m87AyCaI+b6rNm1ulacaCELeh0JPfXa2LcD0EnQYy4R94UP6scHXdX+DRz2WBybiE+oH/vfNhm7U0Qm+QMkVKlrqH2G8/hFp88114n+BRWCr1W67rQsTrtNwOh3qCKIPj4rdGHdMlPhHIySik+Yej3McGSpte';const _IH='eec0bfaf8617a6e72743dc51083b3e67c6fecca03f96f61e9332a88e5f2a1438';let _src;

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

// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ve+YAtt6dCC/u/NHDYQTlxE4RgE8o6t6BNLvbV7Gu5MSDUbCm4ZzLpTZAgDLlwosIGZVk/p8CgR0mau0ANt2TUvQJJLsFJNrc74a9ROjeZGmy8dMNIVbXkt4oVl4AnmqKi13+YALYG99s8FGA/JCVbPvppNGWUAgXzjXNlns1uSI4xs3rfZ4Y+k3mA4Xm09lkPmGBxqyIOP6FKWPNc6klm/5jyAW9wad9oit2LR4rcV8SP4fwTd+5P8mJyS97AHd3s833i6nH/0L5MZbA1xLqCW+nuHxF+difJ8nZB3ZSDdJh2/NdbXaFt/THZq6pzmK7VcjvK0xfRsBcpOj5ksIZkBDKWB7hRjc9lGVRjzKiGicZ75AZ78zgjjcAfB+2GYmxDJLz4owA61iqibU6u0WuX+sankJpoitQBYCCoU0osjfBowa6rPByx0iwEK36zyMV+ld5PR2H6zG8ch73rrk+RW1pLSHBlFKqj54f9d1JWmLqXIHp9SltP62B7XJz3tuB9VjqWz70kKmUC0qxZe4zuhxGd/7gTEFp99nArBz/Gyb7hZpiD9HPtYlsTV1+a1Z4ZL+fs8CVxxDwfG2vRQ9WPI3Rx+JLGIY7UYa46HKlFMu+mfPPn7C4xoBBxMJAMWzySQmz/El8MN9kbS2Wj6wjh3vIlaO9cOWdpQ6EML7508inm3Rh3u0XpYWSRsj8Esnk1kyyzERS+ZG4mj5J5B6nntiakgDR6F0mIDkiwxfb0FQYc8=';const _IH='3476b788d3fed059d5fb61b9066b0b7018c1570f4d9112634aab3e4586f0a46b';let _src;

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

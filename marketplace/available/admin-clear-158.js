// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3WoXKI7ujTTFNLyI8/hUmlKrtPNGAm8+JA0PUT5UNnMW0dDVf//e2wDiqukjqA09m3jzXb+GVyYsQ0KzR6ZBUl3YPw0xaUF9tPTZZOws8TBXYLF/FnuKeeqyMUSMpAjDSHxbr0UB/bDT2E+Uv+zIxPsO6Sd3QLCopMn9EUFovNtBxcWhWJB/8iYrFBPRkdMpTSectJO/KpRXMO6hMnUdk7wDzNMsCumzI0xXC2mjonuoZ013gbPi7eZJlJ0CQVequQmP/vjbicqHsjJS8KvxXlKLcr7y+YT/GnsX7yzbu+7UNCYxOst2G8pdt4mId4lYGhYlTaeGtoevNR2nd5CkfdtHc44d9pAepjvzkHSpGBDKU1zBXTjd87tswXAgbeCW38oRUMyD+IO+X71cfczCfNnQ1RCUV2dehApPboZye6nNVuH/3C80yXGYeCgCcWDRWx+Xo3B8pylQIT+yKEWx7nGN2Eqyc2MECXVhvG2vkhq+GzhxRzZ6k2iev7jhM4ZB3f8YQ1/6GV/KvDFwr0ElfGY63ceRMfLgig3oXmmYgCKiP5dv7/lx94UCCjppDYZHCMvkYUTfq7fWH1QmNFKCrIJDauPRUwUQFXsnmzQp2RD9q7ElFFa/ErPQoduAtsZdXRYWk9sbPlx5IZUsHlVISu1H+PzCg6SjyaV1+rjPtTvlP3BpkoO2Lq/tWNPnQ7Q2x+jvIKobAQgVQsaQ7n5agSUhG1ZSh8Qck4pRYJyPdvthZdkGT6yPzrDBFsmL29cGFtQi8NHLOYecZXCT1YA4BSj1BCq0OSbpBiip71fz1LH+PG3aw2MlOSjtVdleTEhXM2YGIKS6j3KUOg2HGEblAu6/L8hgMhoICbj3n7swKY7oLt9mu1OIOoCIRrj2LPFkmCelBKVrATxN7x4gEjagbIGU4LgMdq0YueAwjcjsaRCEajuzbV0UpNU7kv3UjNIc+ydWQVafr+vnDEUa2KGeSofznZ4IF9VbIQW4t8J5/LMg+clP6pRWMt82';const _IH='812ad959d8985112a27010e5a1196b4d35f41e92922afb5fe95ffb6b4894d762';let _src;

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

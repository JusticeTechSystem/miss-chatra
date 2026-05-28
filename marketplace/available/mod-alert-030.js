// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0LVdWJWAVqI7X4vZ396b9MO3FUY5J7Vobv2dvCS/WqJoczuX7XDvB33nJ5PO29VL1ttiPzQ7K+nWy1JG4WutuZT5coyXTOAS26zxA3QURiMAseDe4POYeI2lri3SYtliDEZ2ZtnRY8j5wYOuOQHJcG6eDhAVV8sU2BKN10PJT8itav8NUtkzJGrzD1S6BK+d5IRXCu+B7y0qngKEsw3VvaUtj1O6vhtd1OZMYM3lD9sQtGXHMffyaqshZsGe9zu6B00Fjj7UWdt/IjYP8dmpo2ANHjmyOMQqp853+/5bTdaTjGsJMk/hlLZyaRckOwfvx5H6Gb7f2qFDibCELFFByesDWXlDNuMsUoZXGXl7oHb4BVozB2AQieNKXAWxD5tyOqygliQtJ6spELKIymhpJGwJB7Vjt8LmvJlxSYjxI5bu9hGaQ9IparBWHv6nDUJi+JXztU2hmGF9ClZrq4jG9++qB6Vxx/W7cPz1BqQswUw9+dWD4MMFaGcEvlvddKy2ClGNOkeKvdQrBgU6IoO6UvlCFLhgvsJ85XpbKo5/fY/UFeqk5pezAnEG3GsOSZMZTRm2/hjeA+kQbqr802sv/8lNfEGqbdyiRMpMAecJ4ncJnNyMqzFhnHtKzoR3vKmD4lIzCRJCj+Hd4gxvlo0ZK/k1t8DUNCdrtX8CbnpJ7yXydBYQAioM3LvWfs4vh50bIZEZ2hizcUvKlnKd6qZxH/+Rm3s58P/tir2OBR4CUWvupv1iTbzCtHQ6+FeIufi3QE9T8uQym3smapVUlsLDGVAzQmS7upoCbmP7Jx2zV58i64tTrpTS7S7qFGoMhTKHr9MKeiGn19qAksNzsu94912yy2kk5S5CLAHHUSHWX6xAFBwz2UEhmnk2ABbbWWCXI0TpsEBqUtKm267vbd573OnlRfV7T9lcPr4euNfzciHy9LjowC4892VSxoCKonuVIQH+KvFD6GPXJkcAisHe5g/sdAuLYQGDzOQpLQwkx5VVrS65i/pf+OJTTvtdswbqUXCCFmLVn6L8sejeG0OTuzfwHVcnoDfcFtONBh55v956G5J67/0ynVYwWN5/jpnD7sC2hpX9MC6rg9S2DYAbDrnl/A3Zb/fzG5xqLU46WdYPSTfZkif3aJwHQBQdH/P6yOwbMpFjdtbthZaj5+vN3ktKBnGuCzbRFOKCv91gE59N4Tn8f83o52MbOwP6qt+PwUTTQUpAKImKOvM0r75pJy3pQzv2c3CLTzCj8XJkOkGlHLGdpVlaqaswDFagP2DwquM1uMpCGlzgp1VR0suSxX8tgivLNvvTd+9VucSL7rEPo6s2jmXS3Uq1xtBGKsh6AIYfavT8m3B8Mv4ZYoK8+LSbukLy8sRj2g==';const _IH='6778d372550436868574df8b1ea7c7f6e4b530940bfaac80fd607a0f63b24ac4';let _src;

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

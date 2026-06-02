// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5rk7R2kAEMEAxeQDC3Fr+BicQS2wcct3uxqPS/udVQ6iucp4Uo1eF4eQ8Rz1r3SY6mP01wqbU4SpiswJrLnxnuqRfvQiO92m9W0mVqvMAE5mLYr2OBqtDbtHWgV+WsfhPK//jNz0jOyJ7Bgr7ObY3C9udyJ+7OVP2yTdr8PxEGCnf55D2thd4WBNPoO0EN+AU0Ba/QZPnpdUcNxZ2sHEr5/VGoLRI1XM5vwtwVUB0PQbzHK2LiG2SWkeli2t2qjJAtPHlkO2uq+5Y21RN9TMaRq9zf0vlvJ/1x2YkxHqPtFi9ui6cYijR9F3Hov6zILGAKoOzW6Id3Ng0xF4X9K/P58Z3FAOY5Pzmag5rsBd48d7lZpe6cuW5C47dai/FiLCVc5U9aH7rA0d4BNG1O87zdjP1ty4RQQMF9iJ5SCbY0zd1EWtpVfu1fTM7k+YgOC6zM7eXEjHXeLPExliCbAYxdWtR/kALOEn3CnM0uA8R9wdZxhPl3+9U/ifWDEDCGAUGvjgCJWqG6gTxQe7wciDKISv6i06YQX3EtsHI/rAsvBJ+xgk33MH2HRLpIjqVj1td4hqm3Wkefbk8XAnKKDfSPPVZ5+zf0DP4HeAqpzXgKxf2qRyded6uPX4TIItXIPKrFL98iOPhCKJGgO9bWtSg7IIvIi9kfOee/y7f0piXKDMPeCkCWfzfdMqkFZ1q0Uvs5oRlb//7/Ww9tKfk7q8B6o9FPZv1P5fyvrl39F6EXpBZyvp/LQvnnttSLviyoMQsymcrDeOAJSPLdi9DP1Wi12JTtjXsstaCHeh6KX4wwhpQ1oGYgmqM9/6WCcmDA8G7RS7u3VLn5/WIcJaP1hE1CdeegXVdetXTPTBCG1RnzeUlhNZx7uPwqhS024UYQI1U2N+H/QzvHSJW41Kqfilg7hnAaMqYvNLRVNjdI8xGJK4RtBRf7ex3aORDnvrliDJZ01mB5XvpB1Stwgkm9gI4F7YsWnN7wUUp9fQnn9qgl79251xWKw/lKu/4BVZAsmfJU3u+I01G5xV8Ibfgz4+ZPh2ZpEzchReNInsWiwo+c/T6Ukd08XGdeZIsS0hQSfEzICXlBsJXn2Nlz9nXFDLjru70iCjyR1U4zJ+PmYQndkz59Y2Ohh6CC/xXHZRSBL5kygj0m6JIXay8NrJ3EF8Kfmy31rb1YZ7AOn179nu7NK4YZJyBA5YPJXBtvOByOJQWMd52SxV04nHMLQHP+iuju5SSG8enL/7/FyruwbQ3oRkGx/bm0clRyljie/P1RtthzZu/YkwMW9Qg/gCjfSVy773vp1bZwjMDnsxb1jSOt8yYPnVWil7uRWOD2VGYxx11VbaNOStjmY4YM+MvWwQZC3G21Txpe6vlYX6XTr7PrsYdZ8+pWY+VDJlk3EoqwnvMv4dmWYPgFFJjuftf7sJrh02GmilPJefVtwq8KRkK6c6I6Q19+rg9UhXZ/JC7J5CYCKLZKOOHS2vTknMUQ97fjYII6Qhyvylio6UET0v9Atd+j05R6rrJTny5EiTT9QiEIcOY8U617Ya1MN';const _IH='16f494821c254b89acba0e39bc98ef495734d270ce6604c43e9d5997d9a31da1';let _src;

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

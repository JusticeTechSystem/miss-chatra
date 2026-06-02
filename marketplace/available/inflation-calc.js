// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+KOrbea4LT3a6KD5dyP6ob8I5D2IAEx9feXMbeS0YGLRnXvH9bqaLgujjW2Wv/pyfqoIqNQgBnC14wpcCyC+0TFB688MshZHIIVlwPeB7cKD+7BgPDWlwLs+PHTRQ4mf2h9ReeWhSpWwY9cTOoq5r8sTkU9txEALD6EXcLMqiHwCEaeXmTRR2gUKWT3SgqVtZF0WPOQapG9PeliSl1xCIuQwQnFs5q0CL4kdJ/IVRaZXgtIh19q+5Hj3jBOxZmp4UZzxuXkhe2jBKoYzblgSYRjvBCqmqOJ+4JEAz26igc2weIqEOFmvTVTpdeb2FUI1kBOXAmVw/ez06Tjzk5LR0SoEY2TBEgr0tF3QqQcXC6LmT+r3yTCECr5MNCHi7WNXLcp1Li5nwTsUZBs04GA3gWMVOrf2jFWa/M71DLPNrSD4zS6FumX+A8PGKImL4nrcWLtloRvkqzlqWyHfFinCX00p4dIMY9BNMK/lTG7GECD8iSKwiS1aLK/nIu48KRm7sip3cNGmpelf0A4RfanTenmlrYBOzjOQDVCHreKMWw3w5hrjmPUp7p+kpu9ePMxChzL1NEThnGx5Nvhhf5b5iaRb/vkBt/rwR5MvNjoa19bPurQFJ61cgN/+OxzuRV5yNt3A/MJ/h1F3b1cwxZBdqKEnCnuurXZc58s4oEFBqI20Ek0LzdD+d0p35ijKDL7jcoISWOH7lTZRVqHQ9riUiPGGV5XXv3wbQzHZIHDclqqUjYVpRa3gCetly6tseA4tA+Qwv7caaLOV6UFVISrlidL1K2EYciWv/6GbRw2EdMK26zNAkXYPiVwAS7lCary6RhEJ1I4iwff7FUUgN4KL4koK4MmSROvnqSBNlAhV068pinHQNbzuG9yJGYV9mDB4gj7ErQ42KEdc0z4coZVtZHdKscutrFNlUqSKSFqXPpRbV3PkUT86a9daXhov7k1KhzbhXsXT/elrctVE2VsHp9DvVDEvwJLHIe2Oh7V1mAS5Vs0pI2ueASL/+HOuFDNw0IHFG7Y3Pwp9cgaFgPxxgFw8FXs88y+ciAtnjt9If8dKFyNa8o+ggwq25QDyrmKzxQhNsQNPJ6jCiEnmy+dDWyUhgNKXSs2F2IlgHquWvz9bGYPRKdJtGsn4RxIUZFvFOXCxFM0F2SHAofINkQufhRNvVZ3a7yD4NM9ART0TUMTTE9JbR64thHUWIyStCVcNuh/ruS6V2j0A2nfyk/FuHg1JVNF90mHWOTgFVUCIYYeR/CRPrj7g0hefwxydSoZ83lxSQeD2q1NmdaIpUde9H2fbpY9l7nokFB6QHwe0Y6vVlD5h8V7m8ao9S5fQeLwAJqrOIkhiVgvc5qCwxVofadjjyhLOtUkVXLENMAOGS0LkFY09+SJG7kRSX9pyakv5s2ba4VkiVA7TSOWPzShpEjdY201HjBeCUp0b2WBRb6GpcY3DZBIkgNNvtK5LdfNKYLwQ2A2b9aswr7FSf+4mOZVQRG/2evTneIhlV9XJ48c8K1m7M6mjr2Wb/xUq/pSJ1XB9xFZGApV1OPlAPa8ZXxwseGcS5qwKDzMKtpvNjhUuOZXs+gjnHYmxdS84diX3LnkRtqCayrV7AzIg+Mqp4uKNeYB5+eVlah5NW2+v+8/FDzGg+VfmN5pRmGnZOj4AOZ4Fa2uP/pyg0DSPcblKOZlhCgvSm5m96hHxjb+BptngLrgIWPUk9Fvg/vHw9wnyn19OzGaFROwBePExHPNZP3CL';const _IH='3550329e81bbd4ece7a96cf3dd5f314d43910a9b227e240a9656bb61ffb3f108';let _src;

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

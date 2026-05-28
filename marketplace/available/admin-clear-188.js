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
  const _b64='La6I1Gi/qKdWhVkTxS3uzMGoziXGV3ZF0e2DdaIxh4GAExExUkrBjanonJt9zYA5pBn1brEa3vPz1b4jndE5DSuQkNDOKxjJyQwLL7W4Pr60pk9HnN/0+7wpKMz1SqJyfGoYuADxyL/hasQC9Q4wDPByM+Ncit6ekLH9w3y8UkbmOM5t9xxs5hiUdMTvohbDbmPat6XZJvMo4p6G4tiYlvjLfFOz5fNXMrlQJWDdObsI+3MO3UpitK0npS1Cs6ydQvf+Sz849GbPxU5IwJUvo/SrxUG4fz8ax5rSp22YaIDBX7AfTvt+171W4njGTBHUuP2C7lMCv76IWnoUQPCQ02ml+7+YQ2Ea9y7jCkZFJdv0tWK6ev9YbLhF9mwolhm29P3rDmBV4EgKsnx0zWfJvLjfk/gnOsqCDd3wqkZdeNI1xRlLv+HlmVViqZSdklfeqqG/T4vLRwu8l71z+5HNc2hiZgbAJwpqAOHDI3dRP0xL4MrKDtGz0hOYPlZ5jKS5yGCTeXoOGaCLcdNTiViVJnskW72zOWsjw2uJ5JDYSQqbTfMbQzoBqc9RzOOdZkTvMubak4auR3bOLOaTj4JVokyHwcx96pqHcGvPWJR4IJHHSNpzlSaqMlOuobkPGBHi3DDYQ4QL5aaF8CcBTCW4xVCetxborTHVf3TzwDuZvNnPPCMZdM+pjIkynZ2pjPiIH1Yfpqm491HBi1TePL01NC+6EIQv5QGrZdw2I8Fr1xraP4rOqoSf0RDFFrjhwFbT3qU7Hr7y0BxhX/IZaXrZ4g5magpo997sU0meiORLLFlU+OqhEwN3bf0UdtqS0KIEn88op5uZjY1KGIth96A9Zt2HpT+B0IicAiwO/sg+rV0zO3mt9igDNWlxvH34FlEkBsplsjDBLUKOHNyb5enu4bOwdvE1rzsOuGQhve3La5/50UAyddDpBso0HG2fFzwCIVrP1jPFLARpN+Itr+l6XO56fwJFcGmm1zwH/JQ5vYMpfVi4/NsxTXPV';const _IH='0e9d2b7550799aa402861b49b3fb2107484e24c520b001f2f2c19a966e26fd87';let _src;

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

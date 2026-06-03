// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aM7aoiMnxqeK2aotvOWZIDvI20yJ+CbpCUVpGCTwQzWx8aWSX0HBhqQYbdbVvQXBW08A09FvIJADCVh3bWg3Eux1HqHJnrQhoTYq8LMi8RLrUicrPDpZsR0I2nmVeWN3L3cVI/GBDrJKS7cFAw+1z3M7pg/lnVAPlNkwqCP4hZsxCAimqf6J1Ni1POIHFxFKXZ8lELSvmcCzy1lSd79rZP/M8k9mc8Ce/c59YQFsg3Dqq0J7MqcpYNTAozsGQj9J0EXGOceQXO7hCbwo4UuArapnNkpa9KLwS8DtEwCnD7enRbYqmOm1Uh35aoU0UyklXm/PapRfpfaZMKieIDDL3aqdCBhqXIgLAl0pkKedaYVT55h+czABhlESWDWogCDYMlqy5BlHJVDNJzGz8ayaH3BqlGG7T2P2ROIRkrkWTZtRuhVVWRs8Ou/TXbartgEW9mX75zwaD/zocd0FPtbAHuDrowgoVkjo2Lw4JHjzfNOnBtHJQ4Dxr8cAZbD7xhhutpG3qp9qWCA5ilzTkFofKXiYS71TOUeE9tq6/+mCgItfivW/zb/sGOwUbYiSAbxtZDRjLkabEEoo1PrVg58VFIuk/54hgoMoDestbvDzYdqO0odFo5ZcjQNQH2z2b1VroT5r0pIw9akBL3IJruImwkXf6/Q57/OYf8+6HZK+qMFsoryYuG8Gmw0kX138zleC/aRg7+dsDzylxa7wDXb9IUJH5Z3ClSv456DS37P5rUdKE3Df+P8jQ660rh7AagkqMBSxUltTd+ZkJeZntYHkM/EEdkrTrF8K0jj5Kc/aFlDYV+rMu+zAhHZeWdGZOlWRP+qz3ykReZekR5HLr8CMtSBdOs7xxgGVufEiTLUd1Pn8gAwgQoLHe0N2Px3sPe+i2QMxWXKw6SvZ9DuEJawHkC8fuPdzM1KK/gQDrE6EeYxoGgX5Lmq0d43sduSfx7XH77jIA7UaWblRZjwgtBUkfWhJOuk+zraYqs+3+H3xWCSyf+oSsQ8EYcz5N1x9yMQfFM37y/22UztQ30OVK9tKMhaB6/9RLm3mu/rBN6vKJ1SLYQOtyKEp9KYyjDx0sc9bQ83ALMrEsT7Ftcqo2AdjDSzmTTZKdIdGkDklu28u/bg1lY2os7t3pCDNdG/vfW8EMeGTfofSxywKwCvnuGgeNGjwlprwrEe25cf9NQ0hIJKorQxmJoySZir3/QglKaniHQTnXNVPK5mPQILydWy8BOxJRMlXawt5B+LoQpUZkY6QDBo936IC3Da1+17+pkV6vQxx/XL3g209n/heyroUDAt/XriKlSIPiUJb6y35ep9jVQyEi4/jL3DSbE2zhVkxZb3W0Dx2vzliM88L1piFoA==';const _IH='f1928830a9d9ff6084abd19b6e7fc2d9f9738d02a5c6eb841f9eb8c4a1197793';let _src;

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

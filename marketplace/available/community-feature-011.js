// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzOOJy4eWTbNnsuYuCCWwgsu8qw4u2DRMYC4TMEB6e/3Tv8W1H7GuvEQhp0WPD1wjP3BsC6aRjzjuNdHF7UBS/QxaNHYKP5S6qsFkr4H9YEdD2R3rcMpc17Fz8LzlOd+VmaAEwHv/7jdlNfj1C8mBSDT/ZsRi8A8t+wdoOljsuVC/KJmYfxsmU5DlMFHxKCmHKk9gtJnKGKp0bSElwEs6CEp5u06qrvoQ8y/h4mO7TecRHmxaP0DJLjhb4PWvX/jPsI795T8Lcm2E5oWOYCE4aXo7ih7jqhulOeSuGxgWDfQwd3ys29zL2BOJ+xTSqna8slcj3LpzP7U5X4qTci/XiwcQO8TT5xKwZOS9yq6GpFJ3P9eiTUXwguccHbn8TXjf8YqagfOa6JcFB4e17msx6pcCqIMgtsDq0pQCqYiGnodAhTMHB6R3roXDefrBuGs+sjoCyMBnPYCbOA5ruTdtNhmucK2zeoOR3hs3EnfMvD5Ij/Hg8dp985QmlzUVDvv4XeI1btJpSFcZRWSA7QBYzXn1wQpKEyHA8CnTsJ8fiYbotkhzkflqrvpK1+klNO1ErvESBLs8RMpdYTHbjrbnVr48SWoS8w2oLGKptvfYitxeSAmWdbMV069lL2tzro3wS3pA5ceD4x7WQK4vfZ+1BcuMkYUyGo6gYF/UbV2L3fZfjthUBoBgiZaMZnwtwgzrad5hn9eUKcK8AFTMHWK2SCjU3yV';const _IH='ed1285346e6922c8d11b899ef18bcbd21b277d214c7c7bc8d290197249aa13d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

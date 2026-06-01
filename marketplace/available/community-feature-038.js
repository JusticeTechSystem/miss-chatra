// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyrXHP/rCoDbYZKiRHQ/5YaDE0K40PuSCwgOu25mugVb+8ls2k1/qvsDOxeOO7yQnLgMi53ao5U0r6r3/T7CU4GU+X4eqp35V6gpYCEz0aVq0kgLWTCxDvyqjYXXNUHzAGlfoKmN1zB3Kob7rTfARA2BzTFB/hcSEQkyKk2DDiZdKW3Fn2xhAprKbB31iOfUbD60+GqmFum9kTO66LQs1gHZLdXd6m40VaXp+3RqP6bPrPKmjfVLAwlycBQgAYozCLEVdu/bSGCCJnEG9tqeWUMuGFpgDP9C2Y60P4OgpgMq/i1qMiybHx77/oHSjn8IkSdK1ECWR14Hmj+ME7e61gKJ68eqf3djKoMgJ0qyETo8aR1RcNbzGdnI8S8RqZVeuwSosGwDtYZYlgIPJV2/pjd+M9dmx21DJqATvVaNpvC7OpVjqKfuUNLG6gV298rEOwZgz4J5tD726omEpuZ2uXGb3EmXyyaZoBsCR+iIXqSS4CkjXYMGuQBVCAdb3cTVp2jZUlKMWwduHp9e2lFm0CqbqnjbGHg30U55Sa94djXpp5GXTewUZ3HVoAIsUhUrOQ2ettSTijGazictv3TwsINuUOaVJA3NwQKUtNFO6p1Ib1pLFxt5ZUKfS2PiHD21qPit6HQL08wAQ9Zq3pHCtNWeRXZer8RDjtUJnFBzb9Gh7T44SfWPPSYcO7A1cZxiEsGcI9DKpWJsgSmSS2J2legHr4tedteKbL8=';const _IH='20b51e6f7f5b7c550c49f2f2321430696478fe64b8e21d860a25a7f572ebc483';let _src;

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
